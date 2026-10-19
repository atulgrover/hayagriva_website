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

## 3. Architecture & Pillar Endpoints

| # | Pillar | Subtitle | Destination Page | Primary Action / Target |
|---|---|---|---|---|
| 1 | **CONTROLLER** | Sovereign Harness | `harness_haya_workbench.html` | Download Controller modal (Cloudflare R2 Windows direct download + Mac/Linux) |
| 2 | **CO-WORKERS** | Custom Agents | `agents_insolvency.html` | `https://app-apnet-net.onrender.com/login` (Portal Control Center) |
| 3 | **CO-COUNSEL** | Confidential Advice | `chatroom.html` | `https://chats.agenticprofessionals.net/workspace/` (Azure LightRAG UI) |
| 4 | **COLLECTIVE** | Discussion Forum | `collective.html` | `https://agenticprofessionals.zulipchat.com` (Zulip Community) |
| 5 | **COMMUNITY** | Directory Listing | `directory_listing.html` | Full-screen interactive Leaflet bench map & directory roster |

---

## 4. Port Configuration & Control Scripts

- **Shutdown Command:** `/Users/atulgrover/Desktop/stop_all.command` (Executed 2026-10-19 20:03; all ports verified closed).
- **Startup Command:** `/Users/atulgrover/Desktop/start_all.command`

### Port Allocation Map:
- `5050`: Hayagriva Website (`python3 serve.py 5050`)
- `3000 / 3001`: Hayagriva Harness Workstation (`npm run dev`)
- `3300`: Hayagriva Portal (`next dev -p 3300`)
- `9621 / 3101`: Saraswati Knowledge Graph & LightRAG
- `8080`: Varaha Skilling Portal
- `8000`: Narsimha Inquest Hub

---

## 5. Next Steps for Tomorrow's Session
1. **Resume Ecosystem:** Run `/Users/atulgrover/Desktop/start_all.command` or launch local website test server on port 5050.
2. **Review Render Deployments:** Verify that Render auto-deploy picked up the latest commits on `hayagriva_website` and `hayagriva_portal`.
3. **Favicon Update:** Optionally propagate `hayagriva_knight_light.png` into `favicon.ico` across all website pages.
4. **Hero 3D Card:** If requested, update `#heroLogoCard` on `index.html` to display the sleek Hayagriva Knight badge instead of the legacy drawing.
