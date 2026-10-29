/**
 * AgenticProfessionals.Net - Professionals Registry Dataset & Client
 * Connects to live shared Neon 3 Commons via Resolution Bazaar API,
 * with deterministic offline fallback and bench coordinates mapping.
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

const RBZ_API_CANDIDATES = [
  "http://localhost:3000",
  "https://resolutionbazaar.com",
  "https://app-apnet-net.onrender.com"
];

let activeRbzApiBase = null;

async function resolveRbzApiBase() {
  if (activeRbzApiBase) return activeRbzApiBase;
  for (const base of RBZ_API_CANDIDATES) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);
      const res = await fetch(`${base}/api/public/professionals?limit=1`, {
        signal: controller.signal,
        cache: "no-store"
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        activeRbzApiBase = base;
        return activeRbzApiBase;
      }
    } catch (e) {
      // try next candidate
    }
  }
  return null;
}

const SEED_PROFESSIONALS = [
  {
    id: "ip-1",
    slug: "atul-grover-ip",
    name: "IP Atul Grover",
    designation: "Insolvency Professional & Advocate",
    category: "ip",
    reg_no: "IBBI/IPA-002/IP-N00128/2018-19/10342",
    firm: "Resolution Bazaar",
    bench: "Chandigarh Bench",
    city: "Chandigarh",
    address: "Sector 18, Chandigarh",
    state: "Punjab & Haryana",
    lat: 30.7398,
    lng: 76.7827,
    email: "resolutionbazaar@gmail.com",
    phone: "+91 98722 33110",
    initials: "AG",
    specialization: "Corporate Insolvency Resolution (CIRP), MSME Pre-packs (PPIRP), Section 29A Audits",
    active_mandates: 3,
    tags: ["CIRP", "PPIRP", "Sec 29A", "Chandigarh Bench"]
  },
  {
    id: "ip-2",
    slug: "sanjay-gupta-ip",
    name: "Sanjay Kumar Gupta",
    designation: "Insolvency Professional",
    category: "ip",
    reg_no: "IBBI/IPA-001/IP-P00124/2017-2018/10266",
    firm: "Deloitte Restructuring Services",
    bench: "Ahmedabad Bench",
    city: "Ahmedabad",
    address: "Makarba, SG Highway, Ahmedabad",
    state: "Gujarat",
    lat: 23.0071,
    lng: 72.5029,
    email: "cirp.essarpower@deloitte.com",
    phone: "+91 98250 11223",
    initials: "SG",
    specialization: "Heavy Manufacturing, Thermal Power & Infrastructure Turnaround",
    active_mandates: 2,
    tags: ["CIRP", "Power", "NCLT Ahmedabad"]
  },
  {
    id: "ip-3",
    slug: "anuj-jain-ip",
    name: "Anuj Jain",
    designation: "Insolvency Professional",
    category: "ip",
    reg_no: "IBBI/IPA-001/IP-P00088/2017-2018/10185",
    firm: "PwC Business Recovery",
    bench: "NCLT Delhi (Court-V)",
    city: "Noida / New Delhi",
    address: "Yamuna Expressway Corridor, Sector 128, Noida",
    state: "Uttar Pradesh",
    lat: 28.5355,
    lng: 77.391,
    email: "ip.jaypeeinfratech@pwc.com",
    phone: "+91 98110 44556",
    initials: "AJ",
    specialization: "Mega Real Estate Townships & Toll Concessions (CIRP)",
    active_mandates: 1,
    tags: ["Real Estate", "CIRP", "NCLT Delhi"]
  },
  {
    id: "rv-4",
    slug: "priya-verma-rv",
    name: "CA Priya Verma",
    designation: "Registered Valuer (Securities / Financial Assets)",
    category: "rv",
    reg_no: "IBBI/RV/06/2019/11244",
    firm: "Verma & Associates Financial Valuers",
    bench: "Mumbai Bench",
    city: "Mumbai",
    address: "Bandra Kurla Complex (BKC), Mumbai",
    state: "Maharashtra",
    lat: 19.0665,
    lng: 72.868,
    email: "priya.verma@verma-valuers.com",
    phone: "+91 98200 77889",
    initials: "PV",
    specialization: "Liquidation Value & Fair Market Value (CIRP Reg 35), Complex Corporate Debt Restructuring",
    active_mandates: 1,
    tags: ["RV-SFA", "Reg 35 Valuation", "NCLT Mumbai"]
  },
  {
    id: "counsel-5",
    slug: "rajesh-sharma-adv",
    name: "Adv. Rajesh Sharma",
    designation: "Restructuring & Insolvency Advocate",
    category: "counsel",
    reg_no: "D/1420/2005",
    firm: "Sharma Legal Chambers",
    bench: "New Delhi (Principal Bench)",
    city: "New Delhi",
    address: "Barakhamba Road, Connaught Place, New Delhi",
    state: "Delhi",
    lat: 28.6289,
    lng: 77.2285,
    email: "rajesh.sharma@sharmachambers.in",
    phone: "+91 98100 22334",
    initials: "RS",
    specialization: "NCLAT Appeals, CoC Rights Litigation, Section 29A Disqualification Challenges",
    active_mandates: 1,
    tags: ["Advocate", "NCLAT", "CoC Counsel", "Principal Bench"]
  }
];

/**
 * Fetch professionals:
 * 1. Probes live shared Neon 3 API on Resolution Bazaar (http://localhost:3000/api/public/professionals).
 * 2. Falls back to local professionals.json / SEED_PROFESSIONALS if offline.
 * 3. Injects authenticated active session profile if marked for directory listing.
 * 4. Applies client-side filters (query, city/bench, category/role).
 */
async function fetchProfessionals(filters = {}) {
  let list = [];

  const apiBase = await resolveRbzApiBase();

  if (apiBase) {
    try {
      const params = new URLSearchParams();
      if (filters.query) params.append("query", filters.query);
      if (filters.city && filters.city !== "all") params.append("bench", filters.city);
      if (filters.category && filters.category !== "all") params.append("role", filters.category);

      const url = `${apiBase}/api/public/professionals?${params.toString()}`;
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          list = json.data.map(p => ({
            id: p.id || `pro-${p.slug}`,
            slug: p.slug,
            name: p.name,
            designation: p.designation,
            category: p.role ? p.role.toLowerCase() : "ip",
            reg_no: p.reg_no,
            firm: p.firm,
            bench: p.bench,
            city: p.city,
            address: p.address,
            state: p.state,
            lat: p.lat,
            lng: p.lng,
            email: p.email,
            phone: p.phone,
            initials: p.initials,
            specialization: p.specialization,
            active_mandates: p.active_mandates,
            tags: p.tags || []
          }));
        }
      }
    } catch (err) {
      console.warn("Live professionals fetch from Resolution Bazaar API deferred:", err);
    }
  }

  // Fallback to local professionals.json if live API was unreachable
  if (list.length === 0) {
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

    if (list.length === 0) {
      list = [...SEED_PROFESSIONALS];
    }
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
        bench: (currentUser.city || "New Delhi") + " Bench",
        city: currentUser.city || "New Delhi",
        address: currentUser.address || (currentUser.city ? currentUser.city + " Bench" : "New Delhi Bench"),
        lat: coords.lat,
        lng: coords.lng,
        email: currentUser.email || "",
        phone: "+91 98722 33110",
        specialization: "Corporate Insolvency Resolution (CIRP), Pre-packs, Section 29A Advisory",
        active_mandates: 1,
        tags: ["Community Member"],
        isSelf: true
      };

      if (!list.some(p => p.id === userItem.id || (p.email && p.email === userItem.email))) {
        list.unshift(userItem);
      }
    }
  } catch (e) {
    console.debug("Current user merge deferred:", e);
  }

  // Client-side filtering verification
  let filtered = [...list];
  if (filters.city && filters.city !== "all") {
    const cityFilter = filters.city.toLowerCase();
    filtered = filtered.filter(p => 
      (p.city && p.city.toLowerCase().includes(cityFilter)) ||
      (p.bench && p.bench.toLowerCase().includes(cityFilter))
    );
  }
  if (filters.category && filters.category !== "all") {
    const roleFilter = filters.category.toLowerCase();
    filtered = filtered.filter(p => p.category && p.category.toLowerCase() === roleFilter);
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter(p => 
      (p.name && p.name.toLowerCase().includes(q)) || 
      (p.firm && p.firm.toLowerCase().includes(q)) || 
      (p.reg_no && p.reg_no.toLowerCase().includes(q)) ||
      (p.city && p.city.toLowerCase().includes(q)) ||
      (p.bench && p.bench.toLowerCase().includes(q)) ||
      (p.address && p.address.toLowerCase().includes(q)) ||
      (p.specialization && p.specialization.toLowerCase().includes(q))
    );
  }

  return filtered;
}

window.fetchProfessionals = fetchProfessionals;
window.getBenchCoordinates = getBenchCoordinates;
window.resolveRbzApiBase = resolveRbzApiBase;
