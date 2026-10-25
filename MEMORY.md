# Project Memory — Hayagriva Ecosystem (AgenticProfessionals.Net)

Last Updated: 2026-10-19T20:05:00+05:30
Active Workspace: `/Users/atulgrover/Desktop/HAYAGRIVA WEBSITE`

---

## 1. Multi-Repo Synchronization State

All three repositories are fully committed, clean, and pushed to origin:

| Repository | Path | Active Branch | Latest Commit | Remote URL |
|---|---|---|---|---|
| **Hayagriva Website** | `/Users/atulgrover/Desktop/HAYAGRIVA WEBSITE` | `main` | `89dce8d` | `https://github.com/atulgrover/hayagriva_website.git` |
| **Hayagriva Portal** | `/Users/atulgrover/Desktop/HAYAGRIVA PORTAL` | `main` | `5179e1c` | `https://github.com/atulgrover/hayagriva_portal.git` |
| **Hayagriva Harness** | `/Users/atulgrover/Desktop/HAYAGRIVA HARNESS` | `hayagriva-master` | `1ee727fa` | `https://github.com/atulgrover/hayagriva_harness.git` |

---

## 2. Completed Milestones (2026-10-19 Session)

### A. Brandmark & Typography Harmonization (Unicorn Emblem & Chakra Petch)
- **Brandmark Symbolism:** The **Circular Unicorn Emblem** representing sovereign intelligence, paired with lowercase **`agentic professionals`** in Google Font **`Chakra Petch`**.
- **Header Navigation Architecture:**
  - Modernized to single-line lowercase tabs in `Chakra Petch`: `knowledge`, `intelligence`, `co-counsels`, `professionals`, and `login`.
  - Redundant `#nav-home` icon removed; the top-left clickable brand logo serves as the single canonical home target (`index.html#home`).
  - Active routes highlighted with subtle `#0284c7` color and `#f1f5f9` pill backgrounds.
- **Footer Navigation & Color Architecture:**
  - Modernized column titles to `Chakra Petch` lowercase: `knowledge`, `intelligence`, `co-counsels`, `professionals`, perfectly mirroring the top header tabs.
  - Sub-links remain in clean `Inter` (`Legal Vaults`, `BharatGen SLMs`, `National Bench Map`) to preserve effortless readability.
  - Background upgraded from near-black midnight charcoal (`#0F172A`) to rich **Sovereign Cobalt Slate (`#0b1f3b`)** with top border `#1a365d` and translucent card containers (`rgba(255, 255, 255, 0.045)` / border `rgba(255, 255, 255, 0.12)`).
  - Preserves 100% luminous contrast for the white Lord Hayagriva sacred emblem and Sanskrit shloka.
- **3-Tier Typography Architecture:**
  - **Tier 1 (Brand, Tech Accents & Navigation Pillars):** `Chakra Petch` — header brand wordmark, navbar tabs, login CTA, and footer column headers.
  - **Tier 2 (Interface & Editorial Prose):** `Inter` — hero titles, pillar body prose, card descriptions, sub-links, and legal statutes to maintain readability and institutional authority.
  - **Tier 3 (Verification & Data):** `JetBrains Mono` — statutory sections, avoidance transaction hashes, terminal outputs.
- **HAYAGRIVA WEBSITE:**
  - Header & footer components synchronously updated in `header.html`, `js/header.js`, `footer.html`, `js/footer.js`.
  - Hero section updated to the **Hayagriva Cosmic Unicorn** emblem in `index.html`.
- **Outcome:** Razor-sharp modern tech identity with zero vertical bloat and complete optical harmony between header and footer.

### B. Community Directory & Map Overhaul (`directory_listing.html`)
- **Map Vector Tiles:** Upgraded to **Esri World Light Gray Canvas** (`Canvas/World_Light_Gray_Base` + `Canvas/World_Light_Gray_Reference`), completely free, zero watermarks, high contrast monochrome with English labels.
- **Two-Way Interaction (P1 + P2):**
  - Card hover highlights map pin (`.pin-hovered`).
  - Card click zooms/flies to marker, opens custom popup, and pulses active halo (`.active-pin`).
  - Pin hover highlights sidebar card (`.card-hovered`).
  - Pin click scrolls card smoothly into view and pulses card border (`.card-pulse-highlight`).
  - Role-specific color accents (Insolvency Professionals, Registered Valuers, Corporate Restructuring Advocates).
- **Collapsible / Expandable Sidebar:**
  - Smooth 300ms transition with Leaflet `map.invalidateSize()` synchronization.
  - Single circular edge toggle button (`<`) centered on the sidebar-map boundary seam.
  - Floating pill button (`Show Directory • 2 Members >`) to restore the sidebar when collapsed.
  - Removed duplicate header collapse icon.
  - Removed all "Verified" badges and language; member counts now formatted cleanly as `2 Members`.

### C. Standardized Hero Layouts
- Hero titles, subtitles, and CTA buttons centered and stacked across all 5 pillar landing pages (Controller, Coworkers, Cocounsel, Collective, Community) and Home.

---

## 3. Architecture & 4-Pillar Endpoints (Updated 2026-10-22)

The website navigation and information architecture is organized into 4 sovereign pillars with Home (`index.html`) serving as the central Sovereign Context Foundation:

| # | Pillar / Section | Subtitle | Destination Page | Primary Hero CTA / Target |
|---|---|---|---|---|
| 0 | **HOME / CONTEXT** | Sovereign Context Foundation | `index.html#home` | Ingestion Pipeline (`https://app-apnet-net.onrender.com/login`) |
| 1 | **KNOWLEDGE** | Legal Vaults | `knowledge.html` | Legal Graph Search (`https://app-apnet-net.onrender.com/login`) |
| 2 | **INTELLIGENCE** | Sovereign AI | `intelligence.html` | Download Controller modal (`openIdeDownloadModal()`) & Inference Portal |
| 3 | **CO-COUNSELS** | Chamber Agents | `counsels.html` | Co-Counsel Studio (`https://app-apnet-net.onrender.com/login`) |
| 4 | **PROFESSIONALS** | Directory Listing | `professionals.html` | Full-screen interactive Leaflet bench map & directory roster |

### Design Decisions:
- **Home as Context Foundation:** Context creation, air-gapped ingestion, SHA-256 evidence vaults, and role enclaves merged into `index.html` alongside the statutory liability reality (DPDP ₹250 Cr, IBBI Reg 40A, Sec 66 fraud, and evidence spoliation).
- **Option B (Minimalist Cards):** Clean typographic cards (`.pillar-teaser-card`) without colored icon boxes, top eyebrow badges, or bottom attribute rows.
- **Decommissioned Pages:** `context.html` merged into home; `collective.html`, `chatroom.html`, and `harness_haya_ingest.html` removed. Consultations and chats route directly to portal login.

---

## 4. Port Configuration & Control Scripts

- **Shutdown Command:** `/Users/atulgrover/Desktop/stop_all.command`
- **Startup Command:** `/Users/atulgrover/Desktop/start_all.command`

### Port Allocation Map:
- `5050`: Hayagriva Website (`python3 serve.py 5050`)
- `3000 / 3001`: Hayagriva Harness Workstation (`npm run dev`)
- `3300`: Hayagriva Portal (`next dev -p 3300`)
- `9621 / 3101`: Saraswati Knowledge Graph & LightRAG
- `8080`: Varaha Skilling Portal
- `8000`: Narsimha Inquest Hub
