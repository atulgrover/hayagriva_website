/**
 * AgenticProfessionals.Net - Interactive Directory & Leaflet Map Controller
 * Implements 1:1 Design & Tech Parity with Resolution Bazaar:
 * - CARTO Voyager Clean Vector Basemap Tiles
 * - Sleek ~90px Compact Practitioner Cards
 * - SVG Pulsing Role-Coded Pins (Blue IP, Amber RV, Emerald Counsel)
 * - Minimalist Action Header with "Retain / Mandate ➔"
 */

let mapInstance = null;
let markersLayer = null;
let professionalsCache = [];
const markersById = new Map();
let activeProfessionalId = null;

function initDirectory() {
  if (mapInstance) return; // already initialized

  const mapContainer = document.getElementById('leaflet-map');
  if (!mapContainer) return;

  // Center on India with zoom control at bottomright (matching Resolution Bazaar)
  mapInstance = L.map('leaflet-map', {
    center: [21.7679, 78.8718],
    zoom: 5,
    zoomControl: false,
    scrollWheelZoom: true,
    attributionControl: false
  });

  L.control.zoom({ position: 'bottomright' }).addTo(mapInstance);

  // CARTO Voyager tiles with API key support (Exact match with Resolution Bazaar)
  const cartoKey = 'cb1_4whn_1_0fe06bedf599b4851ba2a7cd';
  const tileUrl = `https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${cartoKey}`;

  L.tileLayer(tileUrl, {
    maxZoom: 19,
    subdomains: 'abcd',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(mapInstance);

  markersLayer = L.layerGroup().addTo(mapInstance);

  // Setup Event Listeners
  const searchInput = document.getElementById('dir-search-input');
  const citySelect = document.getElementById('dir-city-filter');
  const categorySelect = document.getElementById('dir-category-filter');

  const handleFilterChange = async () => {
    const filters = {
      query: searchInput ? searchInput.value.trim() : "",
      city: citySelect ? citySelect.value : "all",
      category: categorySelect ? categorySelect.value : "all"
    };
    await reloadDirectoryData(filters);
  };

  if (searchInput) searchInput.addEventListener('input', handleFilterChange);
  if (citySelect) citySelect.addEventListener('change', handleFilterChange);
  if (categorySelect) categorySelect.addEventListener('change', handleFilterChange);

  // Keyboard shortcut to toggle sidebar: '[' or '\'
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (e.key === '[' || e.key === '\\') {
      toggleDirectorySidebar();
    }
  });

  // Initial Load
  reloadDirectoryData();

  // Handle map resizing reliably
  [100, 400, 1000].forEach(delay => {
    setTimeout(() => {
      if (mapInstance) mapInstance.invalidateSize();
    }, delay);
  });

  window.addEventListener('resize', () => {
    if (mapInstance) mapInstance.invalidateSize();
  });
}

function toggleDirectorySidebar() {
  const container = document.getElementById('directory-app') || document.querySelector('.directory-container');
  if (!container) return;

  const isCollapsed = container.classList.toggle('sidebar-collapsed');

  const icon = document.getElementById('sidebar-toggle-icon');
  if (icon) {
    icon.className = isCollapsed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left';
  }

  // Smoothly invalidate map size across the sliding animation (300ms)
  const startTime = performance.now();
  const duration = 300;
  function animateMapResize(now) {
    if (mapInstance) mapInstance.invalidateSize({ animate: false });
    if (now - startTime < duration) {
      requestAnimationFrame(animateMapResize);
    } else {
      if (mapInstance) mapInstance.invalidateSize({ animate: false });
    }
  }
  requestAnimationFrame(animateMapResize);

  try {
    localStorage.setItem('hayagriva_directory_sidebar_collapsed', isCollapsed ? 'true' : 'false');
  } catch (e) {}
}

window.reloadDirectoryData = reloadDirectoryData;
window.initDirectory = initDirectory;
window.toggleDirectorySidebar = toggleDirectorySidebar;
window.focusProfessional = focusProfessional;
window.handleCardHover = handleCardHover;
window.openRetainModal = openRetainModal;

async function reloadDirectoryData(filters = {}) {
  const professionals = await fetchProfessionals(filters);
  professionalsCache = professionals;
  activeProfessionalId = null;

  renderCards(professionals);
  renderMarkers(professionals);

  const countBadge = document.getElementById('results-count-badge');
  const floatingBadge = document.getElementById('floating-count-badge');
  const count = professionals.length;
  const text = count === 1 ? '1 Member' : `${count} Members`;
  if (countBadge) countBadge.textContent = text;
  if (floatingBadge) floatingBadge.textContent = text;

  // Adjust map viewport to markers
  if (mapInstance && professionals.length > 1) {
    const markerArray = Array.from(markersById.values());
    if (markerArray.length > 0) {
      const group = L.featureGroup(markerArray);
      mapInstance.fitBounds(group.getBounds().pad(0.18), { maxZoom: 10, animate: true });
    }
  } else if (mapInstance && professionals.length === 1) {
    mapInstance.setView([professionals[0].lat, professionals[0].lng], 11);
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderCards(list) {
  const container = document.getElementById('directory-results-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="padding: 2.5rem 1rem; text-align: center; color: #64748b;">
        <i class="fa-solid fa-user-slash" style="font-size: 2rem; margin-bottom: 0.75rem; color: #cbd5e1;"></i>
        <p style="font-size: 0.9375rem; font-weight: 500;">No community members found</p>
        <p style="font-size: 0.8125rem;">Try adjusting your city or category filter</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const isSelected = item.id === activeProfessionalId;
    
    const rolePillClass =
      item.category === 'ip' ? 'pro-role-ip' :
      item.category === 'rv' ? 'pro-role-rv' : 'pro-role-counsel';
    
    const roleLabel =
      item.category === 'ip' ? 'INSOLVENCY PROFESSIONAL' :
      item.category === 'rv' ? 'REGISTERED VALUER' : 'RESTRUCTURING ADVOCATE';

    return `
      <div class="professional-card ${isSelected ? 'selected' : ''}" 
           id="card-${item.id}" 
           data-id="${item.id}"
           onmouseenter="handleCardHover('${item.id}', true)"
           onmouseleave="handleCardHover('${item.id}', false)"
           onclick="focusProfessional('${item.id}')">
        
        <!-- Header line: Role Badge on left & Subtle Retain / Mandate button on right -->
        <div class="pro-card-top-row">
          <span class="pro-role-pill ${rolePillClass}">${roleLabel}</span>
          <button type="button" class="btn-pro-retain" onclick="event.stopPropagation(); window.openRetainModal('${item.id}');">
            <span>Retain / Mandate</span>
            <span style="color: #64748b;">➔</span>
          </button>
        </div>

        <!-- Practitioner Name -->
        <div class="pro-name-row" title="${escapeHtml(item.name)}">${escapeHtml(item.name)}</div>

        <!-- Subtitle: Firm • NCLT Bench -->
        <div class="pro-sub-row" title="${escapeHtml(item.firm)} • ${escapeHtml(item.bench || item.city)}">
          <span style="font-weight: 600; color: #334155;">${escapeHtml(item.firm)}</span>
          <span>•</span>
          <span style="display: inline-flex; align-items: center; gap: 3px;">
            <i class="fa-solid fa-location-dot" style="color: #64748b; font-size: 0.65rem;"></i>
            ${escapeHtml(item.bench || item.city)}
          </span>
        </div>

        <!-- Specialization Snippet -->
        <div class="pro-snippet-row" title="${escapeHtml(item.specialization || item.designation)}">
          ${escapeHtml(item.specialization || item.designation)}
        </div>
      </div>
    `;
  }).join('');
}

function renderMarkers(list) {
  if (!markersLayer) return;
  markersLayer.clearLayers();
  markersById.clear();

  list.forEach(item => {
    const isSelected = item.id === activeProfessionalId;

    let pinColor = "#0284c7"; // Blue IP
    let roleLabel = "INSOLVENCY PROFESSIONAL";

    if (item.category === "rv") {
      pinColor = "#d97706"; // Amber RV
      roleLabel = "REGISTERED VALUER";
    } else if (item.category === "counsel") {
      pinColor = "#10b981"; // Emerald Counsel
      roleLabel = "RESTRUCTURING ADVOCATE";
    }

    // High-clarity SVG Pin matching Resolution Bazaar
    const customIcon = L.divIcon({
      className: 'custom-deal-pin',
      iconSize: isSelected ? [36, 46] : [28, 38],
      iconAnchor: isSelected ? [18, 46] : [14, 38],
      popupAnchor: [0, -40],
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s;">
          ${isSelected ? `<div style="position: absolute; width: 44px; height: 44px; border-radius: 50%; background: ${pinColor}33; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>` : ''}
          <svg width="${isSelected ? 36 : 28}" height="${isSelected ? 46 : 38}" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37258 0 0 5.37258 0 12C0 19.5 12 32 12 32C12 32 24 19.5 24 12C24 5.37258 18.6274 0 12 0Z" fill="${pinColor}" stroke="#ffffff" stroke-width="1.5"/>
            <circle cx="12" cy="11" r="5" fill="#ffffff" />
            <circle cx="12" cy="11" r="2.5" fill="${pinColor}" />
          </svg>
        </div>
      `
    });

    // Decluttered Popup matching Resolution Bazaar DealMap
    const popupHtml = `
      <div style="font-family: inherit; min-width: 250px; max-width: 280px; padding: 2px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; gap: 8px;">
          <span style="font-size: 9px; font-family: monospace; font-weight: 700; color: #ffffff; background: ${pinColor}; padding: 2px 6px; border-radius: 4px;">
            ${roleLabel.split(' ')[0]}
          </span>
          <button
            type="button"
            onclick="window.openRetainModal('${item.id}');"
            style="font-family: monospace; font-size: 10px; font-weight: 600; padding: 2px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #f8fafc; color: #0f172a; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; line-height: 1.2;"
          >
            <span>Retain / Mandate</span>
            <span style="color: #64748b;">➔</span>
          </button>
        </div>
        <h4 style="font-size: 13px; font-weight: 800; color: #0f172a; margin: 0 0 4px 0; line-height: 1.3;">
          ${escapeHtml(item.name)}
        </h4>
        <p style="font-size: 11px; color: #64748b; margin: 0 0 6px 0; font-weight: 500;">
          ${escapeHtml(item.firm)} • ${escapeHtml(item.bench || item.city)}
        </p>
        <p style="font-size: 11px; color: #475569; line-height: 1.45; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
          ${escapeHtml(item.specialization || item.designation)}
        </p>
      </div>
    `;

    const marker = L.marker([item.lat, item.lng], { icon: customIcon })
      .bindPopup(popupHtml);

    marker.on('click', () => {
      selectProfessional(item.id, { fly: false, openPopup: false });
    });

    marker.on('mouseover', () => {
      handleMarkerHover(item.id, true);
    });

    marker.on('mouseout', () => {
      handleMarkerHover(item.id, false);
    });

    marker.professionalId = item.id;
    markersLayer.addLayer(marker);
    markersById.set(item.id, marker);
  });
}

function handleCardHover(id, isHover) {
  const marker = markersById.get(id);
  if (!marker) return;

  const pinEl = marker.getElement();
  if (!pinEl) return;

  if (isHover) {
    pinEl.style.transform = 'scale(1.15)';
    marker.setZIndexOffset(600);
  } else {
    pinEl.style.transform = 'scale(1)';
    if (activeProfessionalId !== id) {
      marker.setZIndexOffset(0);
    }
  }
}

function handleMarkerHover(id, isHover) {
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.classList.toggle('card-hovered', isHover);
  }
}

function focusProfessional(id, options = { fly: true, openPopup: true }) {
  activeProfessionalId = id;
  const item = professionalsCache.find(p => p.id === id);
  if (!item) return;

  document.querySelectorAll('.professional-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.id === id);
  });

  markersById.forEach((marker, markerId) => {
    if (markerId === id) {
      marker.setZIndexOffset(1000);
      if (options.openPopup) {
        marker.openPopup();
      }
    } else {
      marker.setZIndexOffset(0);
    }
  });

  if (mapInstance && options.fly) {
    mapInstance.flyTo([item.lat, item.lng], 12, {
      duration: 1.0,
      easeLinearity: 0.25
    });
  }
}

function selectProfessional(id, options = { fly: false, openPopup: false }) {
  activeProfessionalId = id;

  document.querySelectorAll('.professional-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.id === id);
  });

  const targetCard = document.getElementById(`card-${id}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    targetCard.classList.remove('card-pulse-highlight');
    void targetCard.offsetWidth;
    targetCard.classList.add('card-pulse-highlight');
    setTimeout(() => {
      targetCard.classList.remove('card-pulse-highlight');
    }, 1200);
  }

  markersById.forEach((marker, markerId) => {
    if (markerId === id) {
      marker.setZIndexOffset(1000);
      if (options.openPopup) {
        marker.openPopup();
      }
    } else {
      marker.setZIndexOffset(0);
    }
  });
}

function openRetainModal(id) {
  const item = professionalsCache.find(p => p.id === id);
  if (!item) return;
  if (typeof window.showProfessionalRetainModal === 'function') {
    window.showProfessionalRetainModal(item);
  } else {
    window.dispatchEvent(new CustomEvent('open-retain-modal', { detail: item }));
  }
}
