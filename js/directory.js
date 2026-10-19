/**
 * AgenticProfessionals.Net - Interactive Directory & Leaflet Map Controller
 */

let mapInstance = null;
let markersLayer = null;
let professionalsCache = [];

function initDirectory() {
  if (mapInstance) return; // already initialized

  const mapContainer = document.getElementById('leaflet-map');
  if (!mapContainer) return;

  // Center on India
  mapInstance = L.map('leaflet-map', {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([21.7679, 78.8718], 5);

  // Clean OpenStreetMap tiles without API key watermark
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
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

  // Initial Load
  reloadDirectoryData();

  setTimeout(() => {
    if (mapInstance) mapInstance.invalidateSize();
  }, 100);
  setTimeout(() => {
    if (mapInstance) mapInstance.invalidateSize();
  }, 500);
  setTimeout(() => {
    if (mapInstance) mapInstance.invalidateSize();
  }, 1200);

  window.addEventListener('resize', () => {
    if (mapInstance) mapInstance.invalidateSize();
  });
}

window.reloadDirectoryData = reloadDirectoryData;
window.initDirectory = initDirectory;

async function reloadDirectoryData(filters = {}) {
  const professionals = await fetchProfessionals(filters);
  professionalsCache = professionals;
  renderCards(professionals);
  renderMarkers(professionals);

  const countBadge = document.getElementById('results-count-badge');
  if (countBadge) {
    countBadge.textContent = `${professionals.length} Verified`;
  }

  if (mapInstance && professionals.length === 1) {
    mapInstance.setView([professionals[0].lat, professionals[0].lng], 9);
  }
}

function renderCards(list) {
  const container = document.getElementById('directory-results-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="padding: 2.5rem 1rem; text-align: center; color: #64748b;">
        <i class="fa-solid fa-user-slash" style="font-size: 2rem; margin-bottom: 0.75rem; color: #cbd5e1;"></i>
        <p style="font-size: 0.9375rem; font-weight: 500;">No accredited professionals found</p>
        <p style="font-size: 0.8125rem;">Try adjusting your city or category filter</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const designationClass = 
      item.category === 'ip' ? 'designation-ip' :
      item.category === 'rv' ? 'designation-rv' : 'designation-counsel';

    return `
      <div class="professional-card" id="card-${item.id}" onclick="focusProfessional('${item.id}')">
        <div class="professional-card-header">
          <div class="professional-name">${item.name}</div>
          <span class="professional-designation ${designationClass}">${item.designation.split('(')[0].trim()}</span>
        </div>
        <div class="professional-reg">${item.reg_no}</div>
        <div style="font-size: 0.8125rem; color: #334155; margin-bottom: 0.4rem;">
          <strong>${item.firm}</strong>
        </div>
        <div class="professional-location">
          <i class="fa-solid fa-location-dot" style="color: #94a3b8; font-size: 0.75rem;"></i>
          <span>${item.address || item.city}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderMarkers(list) {
  if (!markersLayer) return;
  markersLayer.clearLayers();

  list.forEach(item => {
    const pinClass = 
      item.category === 'ip' ? 'pin-ip' :
      item.category === 'rv' ? 'pin-rv' : 'pin-counsel';

    const iconHtml = `
      <div class="custom-marker-pin ${pinClass}">
        <i class="fa-solid fa-gavel"></i>
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
        <div class="popup-title">${item.name}</div>
        <div class="popup-reg">${item.reg_no}</div>
        <div class="popup-meta">
          <div><strong>Firm:</strong> ${item.firm}</div>
          <div><strong>Phone:</strong> ${item.phone || "+91 98722 33110"}</div>
          <div><strong>Email:</strong> ${item.email}</div>
        </div>
        <a href="mailto:${item.email}" class="popup-cta">
          <i class="fa-regular fa-envelope"></i> Contact Professional
        </a>
      </div>
    `;

    const marker = L.marker([item.lat, item.lng], { icon: customIcon })
      .bindPopup(popupHtml);

    marker.on('click', () => {
      highlightCard(item.id);
    });

    marker.professionalId = item.id;
    markersLayer.addLayer(marker);
  });
}

function focusProfessional(id) {
  const item = professionalsCache.find(p => p.id === id);
  if (!item || !mapInstance) return;

  mapInstance.flyTo([item.lat, item.lng], 12, { duration: 1.2 });
  highlightCard(id);

  // Open corresponding marker popup
  markersLayer.eachLayer(layer => {
    if (layer.professionalId === id) {
      layer.openPopup();
    }
  });
}

function highlightCard(id) {
  document.querySelectorAll('.professional-card').forEach(card => {
    card.classList.remove('selected');
  });
  const target = document.getElementById(`card-${id}`);
  if (target) {
    target.classList.add('selected');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
