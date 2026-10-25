# Project Memory — Hayagriva Ecosystem (AgenticProfessionals.Net)

Last Updated: 2026-10-25T20:20:00+05:30
Active Workspace: `/Users/atulgrover/Desktop/HAYAGRIVA WEBSITE`

---

## 1. Multi-Repo Synchronization State

All three repositories are fully committed, clean, and pushed to origin:

| Repository | Path | Active Branch | Latest Commit | Remote URL | Status |
|---|---|---|---|---|---|
| **Hayagriva Website** | `/Users/atulgrover/Desktop/HAYAGRIVA WEBSITE` | `main` | `0980223` | `https://github.com/atulgrover/hayagriva_website.git` | Clean, Up-to-date |
| **Hayagriva Portal** | `/Users/atulgrover/Desktop/HAYAGRIVA PORTAL` | `main` | `2a216d9` | `https://github.com/atulgrover/hayagriva_portal.git` | Clean, Up-to-date |
| **Hayagriva Harness** | `/Users/atulgrover/Desktop/HAYAGRIVA HARNESS` | `hayagriva-master` | `24994f86` | `https://github.com/atulgrover/hayagriva_harness.git` | Clean, Up-to-date |

---

## 2. Completed Milestones (2026-10-25 Session)

### A. Home Hero Box Removal & Hero Layout Standardization
- **Removal of Misplaced Hero Box:** Removed the `.hero-logo-card` container, image, 3D tilt/parallax mouse listeners, and obsolete `@keyframes heroPulseIn` from [index.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/index.html).
- **Harmonized Central Hero Layout:** Standardized Home to `.pillar-central-hero` with `id="hero-context"` using `.pillar-hero-center-container`, `.pillar-center-title`, `.pillar-center-subtitle`, and `.btn-pillar-cta-center`, perfectly matching the layout across all 4 other pillar pages (`knowledge.html`, `intelligence.html`, `counsels.html`, `professionals.html`).
- **Optimal Above-the-Fold Balance:** `CONTEXT: The Sovereign Bedrock of Commercial Law & CIRP` and the CTA button `Launch Ingestion Pipeline ↗` now display cleanly without visual clutter.

### B. Footer Sacred Shloka & Typography Refinement
- **Sovereign Cobalt Slate Footer:** Background styled in `#0b1f3b` with top border `#1a365d` and column titles in lowercase `Chakra Petch`.
- **Sacred Card Content:**
  - Sanskrit Shloka: *ज्ञानानन्दमयं देवं निर्मलस्फटिकाकृतिम् । आधारं सर्वविद्यानां हयग्रीवमुपास्महे ॥*
  - English Description: *“We bow to Lord Hayagriva, whose form shines clear as pure crystal, the sacred source of all intellect, wisdom, and learning.”*
  - Typography: Sanskrit shloka and English translation set in `Chakra Petch` (translation in italic) for brand consistency.
- **Synchronized Across Codebase:** Updated synchronously in `footer.html` and `js/footer.js`.

### C. Professionals Sidebar Simplification (`professionals.html` & `directory_listing.html`)
- **Header Icon Removed:** Removed `<i class="fa-solid fa-address-book"></i>`.
- **Title Renamed:** From `BENCH DIRECTORY` &rarr; **`AGENTIC PROFESSIONALS`** (`font-weight: 800; letter-spacing: 0.02em; color: #0f172a;`).
- **Dynamic Count:** Maintained `Directory Listing • 2 Members` bound to `#results-count-badge`.
- **Search & Filters:** Kept clean `Search by name, firm, reg no...` input and dual dropdowns `All NCLT Benches | All Roles`.
- **CTA Button Simplified:** Changed from `+ Add My Chamber to Map` &rarr; **`+ Join Us`** (`onclick="openAddMeModal();"` preserved).

### D. Multi-Repo Synchronization & Deployment State
- **HAYAGRIVA HARNESS:** Pushed 12 pending commits up to `24994f86` to `origin/hayagriva-master`.
- **HAYAGRIVA WEBSITE:** Pushed commits up to `0980223` to `origin/main`.
- **Local Portal Endpoints:**
  - Frontend: `http://localhost:3000` (Vite, PID 2476)
  - Backend API: `http://localhost:3001` (Node, PID 2526)
  - Cloud Portal: `https://app-apnet-net.onrender.com/login` (linked by default in header login tab)
- **Server Shutdown:** Dev server on port 5050 gracefully stopped via `./stop.sh`.

---

## 3. Architecture & 4-Pillar Endpoints

The website navigation and information architecture is organized into 4 sovereign pillars with Home (`index.html`) serving as the central Sovereign Context Foundation:

| # | Pillar / Section | Subtitle | Destination Page | Primary Hero CTA / Target |
|---|---|---|---|---|
| 0 | **HOME / CONTEXT** | Sovereign Context Foundation | `index.html#home` | Ingestion Pipeline (`https://app-apnet-net.onrender.com/login`) |
| 1 | **KNOWLEDGE** | Legal Vaults | `knowledge.html` | Legal Graph Search (`https://app-apnet-net.onrender.com/login`) |
| 2 | **INTELLIGENCE** | Sovereign AI | `intelligence.html` | Download Controller modal (`openIdeDownloadModal()`) & Inference Portal |
| 3 | **CO-COUNSELS** | Chamber Agents | `counsels.html` | Co-Counsel Studio (`https://app-apnet-net.onrender.com/login`) |
| 4 | **PROFESSIONALS** | Directory Listing | `professionals.html` | Full-screen interactive Leaflet bench map & directory roster |

---

## 4. Port Configuration & Control Scripts

- **Global Shutdown Command:** `/Users/atulgrover/Desktop/stop_all.command`
- **Global Startup Command:** `/Users/atulgrover/Desktop/start_all.command`
- **Website Local Shutdown:** `./stop.sh` (stops port 5050)
- **Website Local Startup:** `./start.sh` (launches port 5050)

### Port Allocation Map:
- `5050`: Hayagriva Website (`python3 serve.py 5050`)
- `3000 / 3001`: Hayagriva Harness Workstation (`npm run dev`)
- `3300`: Hayagriva Portal (`next dev -p 3300`)
- `9621 / 3101`: Saraswati Knowledge Graph & LightRAG
- `8080`: Varaha Skilling Portal
- `8000`: Narsimha Inquest Hub
