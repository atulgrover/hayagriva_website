/**
 * AgenticProfessionals.Net - Professionals Registry Dataset & Client
 * Option D: NCLT Bench Centroid Registry + Micro-Jitter + Geocoding Resolution
 */

const NCLT_BENCH_COORDINATES = {
  "chandigarh": { lat: 30.7398, lng: 76.7827, name: "Chandigarh Bench" },
  "new delhi": { lat: 28.6139, lng: 77.2090, name: "New Delhi (Principal Bench)" },
  "delhi": { lat: 28.6139, lng: 77.2090, name: "New Delhi (Principal Bench)" },
  "mumbai": { lat: 19.0760, lng: 72.8777, name: "Mumbai Bench" },
  "bengaluru": { lat: 12.9716, lng: 77.5946, name: "Bengaluru Bench" },
  "ahmedabad": { lat: 23.0225, lng: 72.5714, name: "Ahmedabad Bench" },
  "kolkata": { lat: 22.5726, lng: 88.3639, name: "Kolkata Bench" },
  "chennai": { lat: 13.0827, lng: 80.2707, name: "Chennai Bench" },
  "hyderabad": { lat: 17.3850, lng: 78.4867, name: "Hyderabad Bench" },
  "cuttack": { lat: 20.4625, lng: 85.8828, name: "Cuttack Bench" },
  "jaipur": { lat: 26.9124, lng: 75.7873, name: "Jaipur Bench" },
  "kochi": { lat: 9.9312, lng: 76.2673, name: "Kochi Bench" },
  "indore": { lat: 22.7196, lng: 75.8577, name: "Indore Bench" },
  "guwahati": { lat: 26.1445, lng: 91.7362, name: "Guwahati Bench" },
  "allahabad": { lat: 25.4358, lng: 81.8463, name: "Allahabad Bench" }
};

/**
 * Option D Coordinate Resolver:
 * Resolves coordinates based on NCLT Bench with deterministic micro-jitter,
 * preventing overlapping markers for multiple practitioners in the same city.
 */
function getBenchCoordinates(city, identifier = "") {
  const cleanCity = (city || "new delhi").trim().toLowerCase();
  const bench = NCLT_BENCH_COORDINATES[cleanCity] || NCLT_BENCH_COORDINATES["new delhi"];
  
  let hash = 0;
  for (let i = 0; i < identifier.length; i++) {
    hash = ((hash << 5) - hash) + identifier.charCodeAt(i);
    hash |= 0;
  }
  const jitterLat = ((Math.abs(hash) % 100) - 50) * 0.00035;
  const jitterLng = ((Math.abs(hash >> 2) % 100) - 50) * 0.00035;

  return {
    lat: bench.lat + jitterLat,
    lng: bench.lng + jitterLng,
    benchName: bench.name
  };
}

const SEED_PROFESSIONALS = [
  {
    id: "ip-001",
    name: "IP Atul Grover",
    designation: "Insolvency Professional",
    category: "ip",
    reg_no: "IBBI/IPA-002/IP-N00128/2018-19/10342",
    firm: "Resolution Bazaar",
    city: "Chandigarh",
    address: "Sector 18, Chandigarh",
    state: "Chandigarh (UT)",
    lat: 30.7398,
    lng: 76.7827,
    email: "resolutionbazaar@gmail.com",
    phone: "+91 98722 33110",
    specialization: "Corporate Insolvency Resolution (CIRP), MSME Pre-packs (PPIRP), Section 29A Audits"
  }
];

/**
 * Fetch professionals:
 * 1. Loads base list from professionals.json (or SEED_PROFESSIONALS).
 * 2. Injects authenticated active session profile if marked for directory listing.
 * 3. Applies client-side filters (query, city, category).
 */
async function fetchProfessionals(filters = {}) {
  let list = [...SEED_PROFESSIONALS];

  try {
    const response = await fetch("js/professionals.json?t=" + Date.now());
    if (response.ok) {
      const jsonList = await response.json();
      if (Array.isArray(jsonList) && jsonList.length > 0) {
        list = jsonList;
      }
    }
  } catch (err) {
    console.debug("Local professionals.json fetch deferred, using seed registry:", err);
  }

  // Merge current logged-in practitioner if accredited
  try {
    const currentUser = window.HayagrivaAuth ? window.HayagrivaAuth.getUser() : null;
    if (currentUser && (currentUser.is_directory_listed || currentUser.reg_no)) {
      const coords = getBenchCoordinates(currentUser.city || "New Delhi", currentUser.email || currentUser.name);
      const userItem = {
        id: "usr-" + (currentUser.email ? currentUser.email.replace(/[^a-zA-Z0-9]/g, '_') : 'self'),
        name: currentUser.name || "Accredited Practitioner",
        designation: currentUser.role === 'rv' ? "Registered Valuer" : (currentUser.role === 'advocate' ? "Restructuring Advocate" : "Insolvency Professional"),
        category: currentUser.role || "ip",
        reg_no: currentUser.reg_no || "IBBI Accredited Practitioner",
        firm: currentUser.firm || (currentUser.name + " Chambers"),
        city: currentUser.city || "New Delhi",
        address: currentUser.address || (currentUser.city ? currentUser.city + " Bench" : "New Delhi Bench"),
        lat: coords.lat,
        lng: coords.lng,
        email: currentUser.email || "",
        phone: "+91 98722 33110",
        specialization: "Corporate Insolvency Resolution (CIRP), Pre-packs, Section 29A Advisory",
        isSelf: true
      };

      if (!list.some(p => p.id === userItem.id || (p.email && p.email === userItem.email))) {
        list.unshift(userItem);
      }
    }
  } catch (e) {
    console.debug("Current user merge deferred:", e);
  }

  // Client-side filtering
  let filtered = [...list];
  if (filters.city && filters.city !== "all") {
    filtered = filtered.filter(p => p.city && p.city.toLowerCase().includes(filters.city.toLowerCase()));
  }
  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter(p => p.category && p.category.toLowerCase() === filters.category.toLowerCase());
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter(p => 
      (p.name && p.name.toLowerCase().includes(q)) || 
      (p.firm && p.firm.toLowerCase().includes(q)) || 
      (p.reg_no && p.reg_no.toLowerCase().includes(q)) ||
      (p.city && p.city.toLowerCase().includes(q)) ||
      (p.address && p.address.toLowerCase().includes(q)) ||
      (p.specialization && p.specialization.toLowerCase().includes(q))
    );
  }
  return filtered;
}
