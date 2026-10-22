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

### A. Tri-System Brandmark Harmonization (The Hayagriva Knight)
- **Brandmark Symbolism:** The **Segmented Sovereign Knight** (the avatar of Lord Hayagriva — horse-headed embodiment of knowledge, wisdom, and obstacle-bypassing speed; combined with the tactical foresight of the chess knight and modular agentic mane slices).
- **Assets Imported:** `hayagriva_knight_light.png` (dark navy silhouette for light backgrounds) and `hayagriva_knight_dark.png` (white silhouette for dark backgrounds).
- **HAYAGRIVA WEBSITE:**
  - Placed before `AGENTIC PROFESSIONALS` in the sticky global header (`header.html` and `js/header.js`).
  - Sized cleanly at `36px × 36px` in `css/components.css` with smooth hover micro-interaction.
- **HAYAGRIVA PORTAL:**
  - Updated both `AdminSidebar` (`src/components/admin/sidebar.tsx`) and `ClientSidebar` (`src/components/client/sidebar.tsx`) to render the Hayagriva Knight mark on the top left.
  - Both light and dark theme switching enabled.
- **HAYAGRIVA HARNESS:** Already natively uses this brandmark in `HayagrivaLogo/index.jsx`.
- **Outcome:** Unified visual identity across Harness, Website, and Portal.

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

## 3. Architecture & 5-Pillar Endpoints (Updated 2026-10-22)

The website navigation and information architecture was streamlined into 5 foundational pillars with centered heroes, minimalist typographic cards (`.card-minimal`), and a top-right `LOGIN` CTA to the portal (`https://app-apnet-net.onrender.com/login`):

| # | Pillar | Subtitle | Destination Page | Primary Hero CTA / Target |
|---|---|---|---|---|
| 1 | **CONTEXT** | Confidential Data | `context.html` | Ingestion Portal (`https://app-apnet-net.onrender.com/login`) |
| 2 | **KNOWLEDGE** | Legal Vaults | `knowledge.html` | Legal Graph Search (`https://app-apnet-net.onrender.com/login`) |
| 3 | **INTELLIGENCE** | Sovereign AI | `intelligence.html` | Download Controller modal (`openIdeDownloadModal()`) & Inference Portal |
| 4 | **AGENTS** | Custom Agents | `agents.html` | Agent Studio (`https://app-apnet-net.onrender.com/login`) |
| 5 | **COMMUNITY** | Agentic Professionals | `community.html` | Full-screen interactive Leaflet bench map & directory roster |

### Design Decision: Option B (Minimalist / Cards Only)
- **Typographic Cards:** All pastel colored icon boxes removed in favor of high-contrast, clean minimalist cards (`01`, `02`, `03` step badge + category tag + title + description + key attributes).
- **Proof-of-Image UI Mockups:** Per user instruction, large UI preview mockup boxes under the cards are omitted for now (Option B). They will be added later when explicitly instructed.
- **Decommissioned Pages:** `collective.html`, `chatroom.html`, and `harness_haya_ingest.html` removed; consultations and chats rerouted directly to portal login.

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
