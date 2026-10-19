/**
 * AgenticProfessionals.Net - Interactive Directory & Leaflet Map Controller
 * Implements P1 (Executive CartoDB Positron Vector Tiles) + P2 (Two-Way Interactive Card ↔ Pin Sync)
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

  // Center on India with zoom control neatly at top-right
  mapInstance = L.map('leaflet-map', {
    zoomControl: false,
    scrollWheelZoom: true,
    attributionControl: true
  }).setView([22.5, 78.9], 5);

  L.control.zoom({ position: 'topright' }).addTo(mapInstance);

  // P1: Executive Light Gray Canvas Basemap (Zero watermark, high-contrast monochrome land with clean English labels)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
  }).addTo(mapInstance);

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16
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
      mapInstance.fitBounds(group.getBounds().pad(0.18), { maxZoom: 12, animate: true });
    }
  } else if (mapInstance && professionals.length === 1) {
    mapInstance.setView([professionals[0].lat, professionals[0].lng], 11);
  }
}

/**
 * Extracts compact 2-letter initials from name, stripping honorifics
 */
function getInitials(name) {
  if (!name) return 'AP';
  const clean = name.replace(/^(IP|Adv\.|Advocate|Dr\.|CA|CS)\s+/i, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return clean.substring(0, 2).toUpperCase() || 'AP';
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
    const designationClass = 
      item.category === 'ip' ? 'designation-ip' :
      item.category === 'rv' ? 'designation-rv' : 'designation-counsel';
    const avatarClass =
      item.category === 'ip' ? 'avatar-ip' :
      item.category === 'rv' ? 'avatar-rv' : 'avatar-counsel';
    const isSelected = item.id === activeProfessionalId;

    return `
      <div class="professional-card ${isSelected ? 'selected' : ''}" 
           id="card-${item.id}" 
           data-id="${item.id}"
           onmouseenter="handleCardHover('${item.id}', true)"
           onmouseleave="handleCardHover('${item.id}', false)"
           onclick="focusProfessional('${item.id}')">
        <div class="card-inner-flex">
          <div class="professional-avatar ${avatarClass}" title="${item.name}">
            <span>${getInitials(item.name)}</span>
          </div>
          <div class="professional-content">
            <div class="professional-card-header">
              <div class="professional-name" title="${item.name}">${item.name}</div>
              <span class="professional-designation ${designationClass}">${item.designation.split('(')[0].trim()}</span>
            </div>
            <div class="professional-reg" title="${item.reg_no}">${item.reg_no}</div>
            <div class="professional-firm" title="${item.firm}">
              <i class="fa-solid fa-briefcase" style="color: #64748b; font-size: 0.72rem;"></i>
              <span>${item.firm}</span>
            </div>
            <div class="professional-location" title="${item.address || item.city}">
              <i class="fa-solid fa-location-dot" style="color: #0284c7; font-size: 0.72rem;"></i>
              <span>${item.address || item.city}</span>
            </div>
          </div>
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
    const pinClass = 
      item.category === 'ip' ? 'pin-ip' :
      item.category === 'rv' ? 'pin-rv' : 'pin-counsel';

    const categoryIcon = 
      item.category === 'ip' ? 'fa-scale-balanced' :
      item.category === 'rv' ? 'fa-chart-line' : 'fa-landmark';

    const categoryBadgeClass =
      item.category === 'ip' ? 'ip' :
      item.category === 'rv' ? 'rv' : 'counsel';

    const categoryLabel =
      item.category === 'ip' ? 'Insolvency Professional' :
      item.category === 'rv' ? 'Registered Valuer' : 'Restructuring Advocate';

    const iconHtml = `
      <div class="custom-marker-pin ${pinClass}" id="pin-${item.id}">
        <i class="fa-solid ${categoryIcon}"></i>
      </div>
    `;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: 'custom-div-icon',
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -32]
    });

    const popupHtml = `
      <div>
        <div class="popup-header-strip">
          <span style="font-size: 0.7rem; font-weight: 700; color: #94a3b8; letter-spacing: 0.04em;">COMMUNITY MEMBER</span>
          <span class="popup-role-badge ${categoryBadgeClass}">${categoryLabel}</span>
        </div>
        <div class="popup-body">
          <div class="popup-title">${item.name}</div>
          <div class="popup-reg">${item.reg_no}</div>
          <div class="popup-meta">
            <div class="popup-meta-row">
              <i class="fa-solid fa-building"></i>
              <span><strong>Firm:</strong> ${item.firm}</span>
            </div>
            <div class="popup-meta-row">
              <i class="fa-solid fa-location-dot"></i>
              <span>${item.address || item.city}</span>
            </div>
            ${item.phone ? `
            <div class="popup-meta-row">
              <i class="fa-solid fa-phone"></i>
              <span>${item.phone}</span>
            </div>` : ''}
          </div>
          <div class="popup-actions">
            <a href="mailto:${item.email}" class="popup-cta">
              <i class="fa-regular fa-envelope"></i> Contact
            </a>
            ${item.phone ? `
            <a href="tel:${item.phone.replace(/[^0-9+]/g, '')}" class="popup-cta-secondary" title="Call">
              <i class="fa-solid fa-phone"></i>
            </a>` : ''}
          </div>
        </div>
      </div>
    `;

    const marker = L.marker([item.lat, item.lng], { icon: customIcon })
      .bindPopup(popupHtml);

    // P2: Marker Click -> Select and Pulse Card in Sidebar
    marker.on('click', () => {
      selectProfessional(item.id, { fly: false, openPopup: false });
    });

    // P2: Marker Hover -> Highlight Card in Sidebar
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

/**
 * P2: Hover handler on Card -> highlights Pin on Map
 */
function handleCardHover(id, isHover) {
  const marker = markersById.get(id);
  if (!marker) return;

  const pinEl = document.getElementById(`pin-${id}`) || marker.getElement()?.querySelector('.custom-marker-pin');
  if (!pinEl) return;

  if (isHover) {
    pinEl.classList.add('pin-hovered');
    marker.setZIndexOffset(600);
  } else {
    pinEl.classList.remove('pin-hovered');
    if (activeProfessionalId !== id) {
      marker.setZIndexOffset(0);
    }
  }
}

/**
 * P2: Hover handler on Pin -> highlights Card in Sidebar
 */
function handleMarkerHover(id, isHover) {
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.classList.toggle('card-hovered', isHover);
  }
  const marker = markersById.get(id);
  const pinEl = document.getElementById(`pin-${id}`) || marker?.getElement()?.querySelector('.custom-marker-pin');
  if (pinEl) {
    pinEl.classList.toggle('pin-hovered', isHover);
  }
}

/**
 * P2: Card Click -> Focus Pin on Map, fly to position, open popup
 */
function focusProfessional(id, options = { fly: true, openPopup: true }) {
  activeProfessionalId = id;
  const item = professionalsCache.find(p => p.id === id);
  if (!item) return;

  // 1. Update Card selection UI
  document.querySelectorAll('.professional-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.id === id);
  });

  // 2. Update Marker Pins: set active halo on selected pin, reset others
  markersById.forEach((marker, markerId) => {
    const pinEl = document.getElementById(`pin-${markerId}`) || marker.getElement()?.querySelector('.custom-marker-pin');
    if (markerId === id) {
      pinEl?.classList.add('active-pin');
      marker.setZIndexOffset(1000);
      if (options.openPopup) {
        marker.openPopup();
      }
    } else {
      pinEl?.classList.remove('active-pin');
      marker.setZIndexOffset(0);
    }
  });

  // 3. Smooth flyTo map navigation
  if (mapInstance && options.fly) {
    mapInstance.flyTo([item.lat, item.lng], 12, {
      duration: 1.0,
      easeLinearity: 0.25
    });
  }
}

/**
 * P2: Marker Click -> Highlight and scroll to Card in Sidebar
 */
function selectProfessional(id, options = { fly: false, openPopup: false }) {
  activeProfessionalId = id;

  // 1. Highlight and scroll to card in sidebar
  document.querySelectorAll('.professional-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.id === id);
  });

  const targetCard = document.getElementById(`card-${id}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    targetCard.classList.remove('card-pulse-highlight');
    // Force reflow for re-triggering animation
    void targetCard.offsetWidth;
    targetCard.classList.add('card-pulse-highlight');
    setTimeout(() => {
      targetCard.classList.remove('card-pulse-highlight');
    }, 1200);
  }

  // 2. Highlight Pin on map
  markersById.forEach((marker, markerId) => {
    const pinEl = document.getElementById(`pin-${markerId}`) || marker.getElement()?.querySelector('.custom-marker-pin');
    if (markerId === id) {
      pinEl?.classList.add('active-pin');
      marker.setZIndexOffset(1000);
      if (options.openPopup) {
        marker.openPopup();
      }
    } else {
      pinEl?.classList.remove('active-pin');
      marker.setZIndexOffset(0);
    }
  });
}
