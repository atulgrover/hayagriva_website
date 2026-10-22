# Central Heroes, Typographic Cards & 5-Pillar Taxonomy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the website into the clean 5-pillar taxonomy (`context.html`, `knowledge.html`, `intelligence.html`, `agents.html`, `community.html`), implement unified Central Heroes (Title + Subtitle + Centered CTA, with no eyebrow badge), replace pastel card icon boxes with a 3-card minimal typographic system across all pages, establish a top-right Portal `LOGIN` CTA, and remove obsolete gateway files (`collective.html`, `chatroom.html`, `harness_haya_ingest.html`).

**Architecture:** Shared CSS design tokens in `css/components.css` define `.pillar-central-hero`, `.btn-pillar-cta-center`, and `.pillar-teaser-card.card-minimal`. Global navigation in `header.html` and `js/header.js` routes across the 5 pillars with active-route resolution and a dedicated Portal `LOGIN` button (`https://app-apnet-net.onrender.com/login`). Each pillar page implements the standardized central hero and 3-card typographic grid.

**Tech Stack:** Vanilla HTML5, Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid), Vanilla JavaScript (ES6 Modules/IIFE), Leaflet GIS (Network Directory Map).

**Spec:** User direction on 2026-10-22:
1. Re-taxonomize the 5 tabs to:
   - `CONTEXT` (`context.html` with subtitle `Confidential Data`)
   - `KNOWLEDGE` (`knowledge.html` with subtitle `Legal Vaults`)
   - `INTELLIGENCE` (`intelligence.html` with subtitle `Sovereign AI`)
   - `AGENTS` (`agents.html` with subtitle `Custom Agents`)
   - `COMMUNITY` (`community.html` with subtitle `Agentic Professionals`)
2. Add a prominent top-right Header CTA button for **LOGIN** (`<a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="portal-cta-main">LOGIN</a>`).
3. Combine the split first and second header lines on each page into a unified **Central Header** with centered Title, Subtitle, and Centered CTA (no eyebrow badge).
4. Remove the colored square icon boxes on cards across all pages in favor of a clean, typography-driven executive presentation (`.card-minimal` with numbered tags `01`–`03` and category headers).
5. All pillar page CTAs (where available) must point directly to the authenticated portal login (`https://app-apnet-net.onrender.com/login`) or the offline Controller installer modal.
6. Delete deprecated public gateway pages: `collective.html`, `chatroom.html`, and `harness_haya_ingest.html`.

---

## Global Constraints

- Retain vanilla CSS and HTML structure; no external build tools or runtime dependencies.
- Single source of truth for global navigation: `header.html` (with dynamic hydration via `js/header.js`).
- Single source of truth for global footer: `footer.html` (with dynamic hydration via `js/footer.js`).
- Absolute zero telemetry / air-gapped positioning for local-first features.
- Zero broken internal links: all cross-references across pages, headers, and footers must use the new 5-pillar routes (`context.html`, `knowledge.html`, `intelligence.html`, `agents.html`, `community.html`).

---

## Review Focus

1. **Mobile & Tablet Responsiveness:** Centered heroes must collapse cleanly on `<768px` viewports without text clipping or overflowing CTA buttons.
2. **Active Navigation Highlighting:** When visiting each page, `js/header.js` must illuminate the corresponding pillar tab in the header.
3. **Card Grid Alignment:** 3-card grids must maintain equal height with flexible description bodies and bottom-anchored footers across all viewports.
4. **Contrast & Readability:** Removing colored icon boxes must not reduce visual hierarchy; card titles, numbered eyebrows, and category tags must be sharp and legible.
5. **Portal Boundary Integrity:** All links to LightRAG, Zulip forum streams, and Agent Studio must route directly to the authenticated Portal (`https://app-apnet-net.onrender.com/login`). There are no direct public links remaining for LightRAG or Zulip.

---

## File Structure & Responsibilities

| File Path | Action | Role / Responsibility |
|---|---|---|
| `css/components.css` | Modify | Styles for `.pillar-central-hero`, `.btn-pillar-cta-center`, `.pillar-teaser-card.card-minimal`, `.card-step-num`, `.card-category-tag`, and `.portal-cta-main`. Deprecates `.pillar-card-icon-box`. Updates `.pillar-teaser-grid` to 3 columns. |
| `header.html` | Modify | The HTML source of truth for the site header with the 5 new pillars and top-right `LOGIN` CTA. |
| `js/header.js` | Modify | Embedded fallback template and active route detection matching the new 5-pillar structure. |
| `footer.html` | Modify | Updated 5-column footer tree aligning with the 5 pillars + Portal access. |
| `js/footer.js` | Modify | Fallback footer template matching `footer.html`. |
| `context.html` | Create | Pillar 1 (CONTEXT) landing page: Centered hero + 3 typographic cards + Ingestion/Vault CTA. |
| `knowledge.html` | Create | Pillar 2 (KNOWLEDGE) landing page: Centered hero + 3 typographic cards + Precedent search CTA. |
| `intelligence.html` | Create | Pillar 3 (INTELLIGENCE) landing page: Centered hero + 3 typographic cards + Controller download modal. |
| `agents.html` | Create | Pillar 4 (AGENTS) landing page: Centered hero + 3 typographic cards + Agent Studio CTA. |
| `community.html` | Create | Pillar 5 (COMMUNITY) landing page: Interactive Leaflet bench map and directory. |
| `collective.html` | Delete | Removed per spec (Zulip forums consolidated into portal). |
| `chatroom.html` | Delete | Removed per spec (LightRAG co-counsel consolidated into portal). |
| `harness_haya_ingest.html` | Delete | Removed per spec (Replaced by `context.html`). |
| `index.html` | Modify | Homepage: 4 icon-free statutory defense cards. |
| `MEMORY.md` | Modify | Workspace architecture and pillar roadmap state. |

---

## Task Decomposition

### Task 1: CSS Design Tokens & Layout System for Central Heroes & Typographic Cards

**Files:**
- Modify: `css/components.css:3705-3950`

**Interfaces:**
- Produces:
  - `.pillar-central-hero`: Full-width or container-bound centered banner with background gradient, subtle border, and responsive padding.
  - `.pillar-hero-center-container`: `max-width: 860px`, `margin: 0 auto`, `text-align: center`.
  - `.pillar-center-title`: 1.85rem–2.25rem bold heading, slate-900.
  - `.pillar-center-subtitle`: 0.95rem–1.05rem neutral slate-600, `max-width: 720px`, centered margin.
  - `.pillar-center-cta-wrap`: Centered action wrapper containing `.btn-pillar-cta-center`.
  - `.btn-pillar-cta-center`: Elevated button with hover lift, shadow, and icon styling.
  - `.pillar-teaser-grid`: Updated to `grid-template-columns: repeat(3, 1fr);` (collapses to 1 column on mobile).
  - `.pillar-teaser-card.card-minimal`: Clean card without icon box, featuring `.card-step-num`, `.card-category-tag`.
  - `.portal-cta-main`: Header top-right login button styling (`background: #0f172a; color: #ffffff; padding: 0.45rem 1.1rem; border-radius: 6px; font-weight: 700; text-decoration: none;`).

- [x] **Step 1: Define CSS rules for `.pillar-central-hero` and child elements in `css/components.css`**
- [x] **Step 2: Define CSS rules for `.card-minimal`, `.card-step-num`, `.card-category-tag` and 3-column `.pillar-teaser-grid`**
- [x] **Step 3: Define CSS rules for `.portal-cta-main` in the header navbar**
- [x] **Step 4: Verify syntax and layout rules via browser test on `http://localhost:5050`**
- [x] **Step 5: Commit CSS changes**

```bash
git add css/components.css
git commit -m "style: add central hero, 3-card typographic grid, and portal login cta styles"
```

---

### Task 2: Global Header & Navigation Update (5 Pillars + Portal Login CTA)

**Files:**
- Modify: `header.html:1-85`
- Modify: `js/header.js:1-90, 200-260`

**Interfaces:**
- Consumes: `.portal-cta-main` styles from `css/components.css`.
- Produces: 5-pillar navigation links:
  - Tab 0: Home (`index.html#home`)
  - Tab 1: `CONTEXT` (`context.html` with subtitle `Confidential Data`)
  - Tab 2: `KNOWLEDGE` (`knowledge.html` with subtitle `Legal Vaults`)
  - Tab 3: `INTELLIGENCE` (`intelligence.html` with subtitle `Sovereign AI`)
  - Tab 4: `AGENTS` (`agents.html` with subtitle `Custom Agents`)
  - Tab 5: `COMMUNITY` (`community.html` with subtitle `Agentic Professionals`)
  - Top-Right CTA: `<a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="portal-cta-main">LOGIN</a>`

- [x] **Step 1: Update `header.html` navigation items to the 5 new pillar routes and `LOGIN` button**
- [x] **Step 2: Update `js/header.js` fallback template to mirror `header.html` exactly**
- [x] **Step 3: Update `updateActiveNav()` in `js/header.js` to match `context.html`, `knowledge.html`, `intelligence.html`, `agents.html`, `community.html`**
- [x] **Step 4: Verify active tab styling and dropdown functionality on `http://localhost:5050`**
- [x] **Step 5: Commit global header changes**

```bash
git add header.html js/header.js
git commit -m "feat(nav): implement 5-pillar menu and top-right portal login CTA"
```

---

### Task 3: Pillar 1 (CONTEXT) — `context.html`

**Files:**
- Create: `context.html`

**Content Requirements:**
- **Central Header (No Eyebrow):**
  - Title: `CONTEXT: Confidential Case Data`
  - Subtitle: *Air-gapped debtor ledger parsing, claims normalization, and cryptographic evidence vaults with DPDP Act immunity.*
  - Centered CTA: `[ Launch Ingestion Pipeline ↗ ]` (`https://app-apnet-net.onrender.com/login`)
- **3 Cards (No colored icons):**
  1. `01 DATA ISOLATION` — **Air-Gapped Debtor Ingest**  
     *Parse multi-gigabyte debtor ledgers, Tally backups, and bank statements 100% locally on your hardware. Zero data bytes ever transmitted to third-party cloud servers.*  
     *Footer: DPDP Act 2023 & Sec 72A Safe Harbor*
  2. `02 EVIDENTIARY RIGOR` — **SHA-256 Evidence Vaults**  
     *Every debtor record, bank voucher, and committee minutes document is cryptographically hashed with an immutable timestamp for court admissibility.*  
     *Footer: NCLT / Court-Ready Admissibility*
  3. `03 CONFIDENTIALITY` — **Confidentiality Enclaves**  
     *Cryptographically partition different corporate debtor engagements so co-counsel, valuer teams, and forensic staff only access assigned claims.*  
     *Footer: Strict Role-Based Access Enclaves*

- [x] **Step 1: Create `context.html` with `.pillar-central-hero` and 3 `.card-minimal` cards**
- [x] **Step 2: Include document ingestion and private vault preview section**
- [x] **Step 3: Verify page render on `http://localhost:5050/context.html`**
- [x] **Step 4: Commit changes**

```bash
git add context.html
git commit -m "feat(context): create context.html with central hero and icon-free cards"
```

---

### Task 4: Pillar 2 (KNOWLEDGE) — `knowledge.html`

**Files:**
- Create: `knowledge.html`

**Content Requirements:**
- **Central Header (No Eyebrow):**
  - Title: `KNOWLEDGE: Legal Vaults`
  - Subtitle: *Sanitized full-text statutory acts, IBBI circulars, and Supreme Court / NCLAT precedent knowledge graphs for instantaneous citation verification.*
  - Centered CTA: `[ Search Legal Vaults in Portal ↗ ]` (`https://app-apnet-net.onrender.com/login`)
- **3 Cards (No colored icons):**
  1. `01 STATUTORY CODE` — **Codified IBC & Allied Acts**  
     *Full-text, continuously annotated statutory vaults covering IBC 2016, Companies Act 2013, SARFAESI, and Indian Contract Act.*  
     *Footer: Up to Date with 2026 Amendments*
  2. `02 JURISPRUDENCE` — **Ratio Decidendi Knowledge Graph**  
     *Dual-level entity graphs mapping landmark rulings from Swiss Ribbons and Essar Steel to contemporary avoidance and resolution decisions.*  
     *Footer: Entity-Linked Case Headnotes*
  3. `03 REGULATORY SOP` — **IBBI Regulations & Circulars**  
     *Indexed regulatory rulebooks including CIRP Regulations, Liquidation Process, and Disciplinary Committee orders for procedural defense.*  
     *Footer: Standard Operating Procedures*

- [x] **Step 1: Create `knowledge.html` with `.pillar-central-hero` and 3 `.card-minimal` cards**
- [x] **Step 2: Add statutory vaults catalog and precedent graph preview components**
- [x] **Step 3: Verify page render on `http://localhost:5050/knowledge.html`**
- [x] **Step 4: Commit changes**

```bash
git add knowledge.html
git commit -m "feat(knowledge): create knowledge.html with central hero and icon-free cards"
```

---

### Task 5: Pillar 3 (INTELLIGENCE) — `intelligence.html`

**Files:**
- Create: `intelligence.html`

**Content Requirements:**
- **Central Header (No Eyebrow):**
  - Title: `INTELLIGENCE: Sovereign AI`
  - Subtitle: *On-premise BharatGen finetuned SLMs and deterministic reasoning engines executing complex corporate insolvency analysis with zero telemetry.*
  - Centered CTA: `[ Download Controller IDE ]` (`onclick="openIdeDownloadModal();"`)
- **3 Cards (No colored icons):**
  1. `01 RUNTIME` — **Air-Gapped Desktop Harness**  
     *30-day offline cryptographic lease allowing complete drafting and analysis without an active internet connection. Zero telemetry, zero cloud exposure.*  
     *Footer: Available for Windows, macOS & Linux*
  2. `02 MODELS` — **BharatGen Finetuned SLMs**  
     *Domain-specialized small language models fine-tuned on Indian commercial statutes, delivering high-precision legal synthesis with minimal memory footprint.*  
     *Footer: Quantized 4-bit / 8-bit Local Weights*
  3. `03 AUDIT ENGINE` — **Deterministic Rule Validation**  
     *Combines neural language comprehension with symbolic statutory validation, guaranteeing calculations and statutory checklists never hallucinate.*  
     *Footer: Audit-Grade Reproducible Logic*

- [x] **Step 1: Create `intelligence.html` with `.pillar-central-hero` and 3 `.card-minimal` cards**
- [x] **Step 2: Ensure Controller download modal trigger `#cta-download-controller` functions cleanly**
- [x] **Step 3: Verify page render on `http://localhost:5050/intelligence.html`**
- [x] **Step 4: Commit changes**

```bash
git add intelligence.html
git commit -m "feat(intelligence): create intelligence.html with central hero and icon-free cards"
```

---

### Task 6: Pillar 4 (AGENTS) — `agents.html`

**Files:**
- Create: `agents.html`

**Content Requirements:**
- **Central Header (No Eyebrow):**
  - Title: `AGENTS: Custom Agents`
  - Subtitle: *Specialized agentic personas executing mechanical CIRP compliance, avoidance transaction audits, and statutory timeline watchdogs.*
  - Centered CTA: `[ Open Agent Studio ↗ ]` (`https://app-apnet-net.onrender.com/login`)
- **3 Cards (No colored icons):**
  1. `01 FORENSICS` — **Sec 29A & PUFE Screener**  
     *Deep forensic auditor scanning debtor ledgers to detect connected parties, preferential transfers, undervalued transactions, and fraudulent trading.*  
     *Footer: Automated Sec 43/45/50/66 Dossiers*
  2. `02 VERIFICATION` — **Claims Reconciler & Matrix**  
     *Automated verification of Form B, C, D, and E submissions against bank proofs; instant calculation of CoC voting shares and claim lists.*  
     *Footer: Regulation 13 Compliance*
  3. `03 DRAFTING` — **Form H Compliance Assembler**  
     *Automatic compilation of Regulation 39(4) compliance certificates, complete with CoC voting certifications and feasibility confirmations for NCLT.*  
     *Footer: Court-Ready Pleading Formats*

- [x] **Step 1: Create `agents.html` with `.pillar-central-hero` and 3 `.card-minimal` cards**
- [x] **Step 2: Embed Agent Foundry visual showcase with direct CTA to portal login**
- [x] **Step 3: Verify page render on `http://localhost:5050/agents.html`**
- [x] **Step 4: Commit changes**

```bash
git add agents.html
git commit -m "feat(agents): create agents.html with central hero and icon-free cards"
```

---

### Task 7: Pillar 5 (COMMUNITY) — `community.html`

**Files:**
- Create: `community.html`

**Content Requirements:**
- **Integrated Directory Layout:**
  - Full-screen interactive Leaflet bench map and practitioner directory sidebar.
  - Retain two-way card-pin interactions, search input `#dir-search-input`, and bench city filter.
  - Navigation header cleanly active on `COMMUNITY` (`community.html`).

- [x] **Step 1: Create `community.html` with Leaflet bench map and directory integration**
- [x] **Step 2: Ensure map vector tiles, sidebar collapse, and directory scripts bind to `community.html`**
- [x] **Step 3: Verify page render and map search on `http://localhost:5050/community.html`**
- [x] **Step 4: Commit changes**

```bash
git add community.html
git commit -m "feat(community): create community.html with full-screen bench map and directory"
```

---

### Task 8: Cleanup Deprecated Pages & Legacy Route Redirects

**Files:**
- Delete: `collective.html`
- Delete: `chatroom.html`
- Delete: `harness_haya_ingest.html`

**Requirements:**
- Delete the retired files as requested.
- Grep codebase for broken links to deleted files and replace with the new 5-pillar routes (`context.html`, `knowledge.html`, `intelligence.html`, `agents.html`, `community.html`).

- [x] **Step 1: Remove `collective.html`, `chatroom.html`, `harness_haya_ingest.html`**
- [x] **Step 2: Grep codebase for broken links to deleted files and replace with new routes**
- [x] **Step 3: Verify zero 404 links on local server**
- [x] **Step 4: Commit deletions**

```bash
git rm collective.html chatroom.html harness_haya_ingest.html
git commit -m "chore: remove deprecated collective, chatroom, and ingest pages"
```

---

### Task 9: Homepage Refinement (`index.html`) & Shared Footer Synchronization

**Files:**
- Modify: `index.html:200-268`
- Modify: `footer.html:25-95`
- Modify: `js/footer.js:1-120`
- Modify: `MEMORY.md`

**Content Requirements:**
- **Homepage (`index.html`):** Update the 4 Statutory Reality cards to remove colored icon boxes and adopt `.card-minimal` styling (`01 DATA BREACH IMMUNITY`, `02 AFA & SHOW-CAUSE DEFENSE`, `03 FRAUD & SECTION 66 DEFENSE`, `04 PRACTICE MULTIPLIER`).
- **Footer (`footer.html` & `js/footer.js`):** Harmonize columns to the 5 pillars:
  1. `CONTEXT` (`context.html`)
  2. `KNOWLEDGE` (`knowledge.html`)
  3. `INTELLIGENCE` (`intelligence.html`)
  4. `AGENTS` (`agents.html`)
  5. `COMMUNITY` (`community.html`)
  Plus a distinct `LOGIN` button leading to `https://app-apnet-net.onrender.com/login`.
- **Documentation (`MEMORY.md`):** Update architecture map and pillar URLs.

- [x] **Step 1: Update `index.html` 4 cards to icon-free `.card-minimal`**
- [x] **Step 2: Align `footer.html` and `js/footer.js` columns with the new 5-pillar taxonomy**
- [x] **Step 3: Update `MEMORY.md` with synchronization notes**
- [x] **Step 4: Comprehensive end-to-end verification across all 5 pages and homepage on `http://localhost:5050`**
- [x] **Step 5: Commit changes**

```bash
git add index.html footer.html js/footer.js MEMORY.md
git commit -m "feat(footer,home): synchronize footer columns, home cards, and memory docs"
```
