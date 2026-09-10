/**
 * AgenticProfessionals.Net - Professionals Registry Dataset & Client
 * Provides verified mock dataset across key Indian NCLT bench cities
 * with an async fetch fallback to PostgreSQL API when running locally.
 */

const SEED_PROFESSIONALS = [
  {
    id: "ip-001",
    name: "Rajesh K. Sharma",
    designation: "Insolvency Professional",
    category: "ip",
    reg_no: "IBBI/IPA-001/IP-P00214/2017-2018/10412",
    firm: "Apex Restructuring Advisors LLP",
    city: "New Delhi",
    state: "Delhi",
    bench: "NCLT Principal Bench (New Delhi)",
    lat: 28.6139,
    lng: 77.2090,
    email: "rk.sharma@apexinsolvency.in",
    phone: "+91 98110 44219",
    cases_handled: 18,
    specialization: "Manufacturing, Real Estate CIRP, Fast-track Liquidation"
  },
  {
    id: "ip-002",
    name: "Sunita Deshmukh",
    designation: "Insolvency Professional",
    category: "ip",
    reg_no: "IBBI/IPA-002/IP-N00108/2018-2019/10291",
    firm: "Deshmukh & Associates",
    city: "Mumbai",
    state: "Maharashtra",
    bench: "NCLT Mumbai Bench",
    lat: 18.9220,
    lng: 72.8347,
    email: "sunita@deshmukhresolution.com",
    phone: "+91 98201 88314",
    cases_handled: 24,
    specialization: "EPC Contractors, Financial Services, Cross-Border Insolvency"
  },
  {
    id: "rv-003",
    name: "Arunachalam Venkataraman",
    designation: "Registered Valuer (L&B, P&M)",
    category: "rv",
    reg_no: "IBBI/RV/02/2019/11842",
    firm: "Southern Valuation Partners",
    city: "Bengaluru",
    state: "Karnataka",
    bench: "NCLT Bengaluru Bench",
    lat: 12.9716,
    lng: 77.5946,
    email: "arun@southernvaluation.org",
    phone: "+91 94480 55123",
    cases_handled: 32,
    specialization: "Industrial Plant & Machinery, Technology Tech Parks"
  },
  {
    id: "counsel-004",
    name: "Adv. Vikramjit Singh Khurana",
    designation: "Senior Restructuring Counsel",
    category: "counsel",
    reg_no: "D/1248/2004",
    firm: "Khurana & Chambers",
    city: "Chandigarh",
    state: "Punjab & Haryana",
    bench: "NCLT Chandigarh Bench",
    lat: 30.7333,
    lng: 76.7794,
    email: "vikramjit@khuranachambers.com",
    phone: "+91 98722 33110",
    cases_handled: 45,
    specialization: "NCLAT Appeals, Section 7/9 Petitions, Personal Guarantor Insolvency"
  },
  {
    id: "ip-005",
    name: "Bhavin H. Patel",
    designation: "Insolvency Professional",
    category: "ip",
    reg_no: "IBBI/IPA-001/IP-P00582/2018-2019/11033",
    firm: "Gujarat Turnaround Advisory",
    city: "Ahmedabad",
    state: "Gujarat",
    bench: "NCLT Ahmedabad Bench",
    lat: 23.0225,
    lng: 72.5714,
    email: "bhavin@gujarat-turnaround.com",
    phone: "+91 98250 99421",
    cases_handled: 14,
    specialization: "Textiles, Chemicals, MSME Pre-Packaged Insolvency (PPIRP)"
  },
  {
    id: "rv-006",
    name: "Priyanka Roy Choudhury",
    designation: "Registered Valuer (SFA)",
    category: "rv",
    reg_no: "IBBI/RV/05/2020/13219",
    firm: "Eastern Financial Valuation Corp",
    city: "Kolkata",
    state: "West Bengal",
    bench: "NCLT Kolkata Bench",
    lat: 22.5726,
    lng: 88.3639,
    email: "priyanka.roy@easternval.com",
    phone: "+91 98310 77215",
    cases_handled: 28,
    specialization: "Securities & Financial Assets, Intangibles, DCF Valuation"
  },
  {
    id: "ip-007",
    name: "K. R. Narayanan",
    designation: "Insolvency Professional",
    category: "ip",
    reg_no: "IBBI/IPA-003/IP-N00219/2019-2020/11450",
    firm: "Coromandel Insolvency Group",
    city: "Chennai",
    state: "Tamil Nadu",
    bench: "NCLT Chennai Bench",
    lat: 13.0827,
    lng: 80.2707,
    email: "kr.narayanan@coromandelip.in",
    phone: "+91 94440 12890",
    cases_handled: 16,
    specialization: "Automotive, Ports & Logistics, Section 66 Fraudulent Trading"
  },
  {
    id: "counsel-008",
    name: "Adv. Srinivas Rao Goud",
    designation: "Insolvency Litigator",
    category: "counsel",
    reg_no: "TS/889/2008",
    firm: "Deccan Law Associates",
    city: "Hyderabad",
    state: "Telangana",
    bench: "NCLT Hyderabad Bench",
    lat: 17.3850,
    lng: 78.4867,
    email: "srinivas@deccanlaw.in",
    phone: "+91 98490 66321",
    cases_handled: 39,
    specialization: "Pharma Restructuring, Avoidance Applications (Sec 43, 45, 66)"
  }
];

/**
 * Fetch professionals either from PostgreSQL REST API or static fallback
 */
async function fetchProfessionals(filters = {}) {
  try {
    const queryParams = new URLSearchParams();
    if (filters.city && filters.city !== "all") queryParams.append("city", filters.city);
    if (filters.category && filters.category !== "all") queryParams.append("category", filters.category);
    if (filters.query) queryParams.append("query", filters.query);

    const url = `/api/professionals?${queryParams.toString()}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn("Backend API not reachable; using rich local registry dataset:", err);
  }

  // Client-side filtering over seed data
  let filtered = [...SEED_PROFESSIONALS];
  if (filters.city && filters.city !== "all") {
    filtered = filtered.filter(p => p.city.toLowerCase() === filters.city.toLowerCase());
  }
  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.firm.toLowerCase().includes(q) || 
      p.reg_no.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q)
    );
  }
  return filtered;
}
