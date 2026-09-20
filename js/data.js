/**
 * AgenticProfessionals.Net - Professionals Registry Dataset & Client
 * Dynamic registry with support for verified profiles.
 */

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
 * Fetch professionals: First loads from live professionals.json,
 * then falls back to SEED_PROFESSIONALS.
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
    // Graceful fallback to static seed list
    console.debug("Local professionals.json fetch deferred, using seed registry:", err);
  }

  // Client-side filtering
  let filtered = [...list];
  if (filters.city && filters.city !== "all") {
    filtered = filtered.filter(p => p.city && p.city.toLowerCase() === filters.city.toLowerCase());
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
