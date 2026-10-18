# Project Memory — Hayagriva Website (AgenticProfessionals.Net)

Last Updated: 2026-10-19T01:03:00+05:30
Repository: https://github.com/atulgrover/hayagriva_website
Active Branch: main (fully committed & pushed)

---

## 1. Core Architecture: The Five Sovereign Pillars

The platform is structured into 5 clean pillars with direct header links (no dropdown menus) and unified landing pages:

| # | Pillar | Subtitle | Destination Page | Primary CTA & Link |
|---|---|---|---|---|
| 1 | **CONTROLLER** | Sovereign Harness | `harness_haya_workbench.html` | **Download Controller** ➔ Triggers `#hayagriva-ide-modal` (Cloudflare R2 Windows direct download + Mac/Linux options) |
| 2 | **CO-WORKERS** | Custom Agents | `agents_insolvency.html` | **Goto Agents Portal ↗** ➔ `https://app-apnet-net.onrender.com/login` (Verified 200 OK) |
| 3 | **CO-COUNSEL** | Confidential Advice | `chatroom.html` | **Chat Now ↗** ➔ `http://20.198.0.59:9621/workspace` (Azure LightRAG UI) |
| 4 | **COLLECTIVE** | Discussion Forum | `collective.html` | **Discuss Now ↗** ➔ `https://agenticprofessionals.zulipchat.com` (Zulip Community) |
| 5 | **COMMUNITY** | Directory Listing | `directory_listing.html` | **Join Now** ➔ Triggers `#directory-add-me-modal` (`openAddMeModal()`) |

---

## 2. Page & Design System Anatomy
- **No Dropdowns in Header:** Each pillar title is a clean, direct navigation item.
- **No Standalone Download Icon:** Item 6 eliminated; downloads consolidated under **CONTROLLER**.
- **Standardized Top Banner & 4 Teaser Cards on each pillar page:**
  - Standardized `.pillar-hero-banner` (Title, Subtitle, Immediate CTA).
  - 4 Teaser Cards (`.pillar-teaser-card`) with simple explanations pointing to user manuals.
  - Interactive workspace preserved underneath (Leaflet map on Community, embedded iframe on Co-Counsel, Stream directory on Collective).
- **CSS Source:** `.pillar-hero-*` and `.pillar-teaser-*` styled in `css/components.css`.
- **Header Files:** `header.html` and `js/header.js` (with synchronized fallback HTML and active nav detection).
- **Footer Files:** `footer.html` and `js/footer.js` (aligned to 5 responsive columns).

---

## 3. External Services & Credentials
- **LightRAG Knowledge Graph (Azure VM 20.198.0.59):**
  - UI: `http://20.198.0.59:9621/workspace` (and `/webui`)
  - Admin User: `admin` | Password: `@Guruji46` | API Key: `20b8aa6253d9e09e9c70417d4938f8c7`
- **Agents Portal:** `https://app-apnet-net.onrender.com/login`
- **Zulip Forum:** `https://agenticprofessionals.zulipchat.com`
- **Cloudflare R2 Controller Setup Download:**
  - URL: `https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva-Setup-1.17.0.exe`

---

## 4. Git & Hosting State
- **GitHub Origin:** `https://github.com/atulgrover/hayagriva_website.git` (Private)
- **GitHub Upstream:** `https://github.com/Samir1145/apnet_website.git` (Preserved)
- **Render Production Service:**
  - Name: `agentic_professionals` (Service ID: `srv-dahcnk6k1f9s73fb56v0`)
  - Domain: `apnet.co.in`
  - Action pending: Authorize Render on `atulgrover` or switch repository visibility to link `atulgrover/hayagriva_website`.
