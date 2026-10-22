# Merge Context into Home & 4-Pillar Taxonomy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove `context.html`, merge the core Context matter directly into `index.html` (framing Home around what Context is, how it is sovereignly created/managed in Hayagriva, and how mismanaging context triggers dire legal liability under DPDP, IBBI Reg 40A, and Section 66), and streamline the site navigation to 4 pillars (`knowledge.html`, `intelligence.html`, `agents.html`, `community.html`) plus top-right Portal `LOGIN`.

**Architecture:** 
- `index.html` becomes the flagship Sovereign Context Foundation page containing: (1) Hayagriva 3D emblem hero with central title & subtitle defining Context; (2) "How Context is Created & Managed" (3 minimal cards: Air-Gapped Debtor Ingest, SHA-256 Evidence Vaults, Confidentiality Enclaves); (3) "The Statutory Reality / Fear Factor" (4 minimal cards: DPDP Act & IT Act Shield, IBBI Reg 40A Immunity, ED/SFIO & Avoidance Defense, Evidence Admissibility); and (4) Practice Multiplier callout with Portal Ingestion CTA.
- Global navigation in `header.html` and `js/header.js` updates from 5 tabs down to 4 pillars (`KNOWLEDGE`, `INTELLIGENCE`, `AGENTS`, `COMMUNITY`) with Home (`index.html`) serving as the Context foundation.
- `footer.html` and `js/footer.js` synchronize to 4 pillar columns + Home Context references.
- `context.html` is deleted via `git rm`, and route rewrites in `render.yaml` redirect `/context` to `/`.

**Tech Stack:** Vanilla HTML5, Vanilla CSS3 (Custom Properties, CSS Grid, Flexbox), Vanilla JavaScript (ES6 Modules/IIFE).

**Spec:** User direction on 2026-10-22:
1. Remove `context.html`.
2. Merge the context matter into the home content (`index.html`).
3. Home page narrative focuses on:
   - What is context in legal/insolvency practice?
   - How is context created and managed in Hayagriva (air-gapped, SHA-256 hashed, role-partitioned enclaves)?
   - How mismanagement of context causes legal liability across various laws (the "fear factor": DPDP Act ₹250 Cr penalties, IBBI Reg 40A AFA cancellation, ED/SFIO Section 66 scrutiny, and evidence spoliation).
4. Update navigation, footers, routing, and documentation to reflect the streamlined 4-pillar taxonomy (`knowledge.html`, `intelligence.html`, `agents.html`, `community.html`).

---

## Global Constraints

- Retain vanilla CSS and HTML structure; zero runtime dependencies or external build step.
- Uphold Option B minimalist typographic styling: zero pastel icon boxes, clean cards with no top step badges or bottom attribute lines (`.pillar-teaser-card`).
- Single source of truth for global navigation: `header.html` (with dynamic fallback hydration in `js/header.js`).
- Single source of truth for global footer: `footer.html` (with dynamic fallback hydration in `js/footer.js`).
- Zero broken links: all former links to `context.html` must now route to `index.html` or direct portal login (`https://app-apnet-net.onrender.com/login`).

---

## Review Focus

1. **Homepage Narrative Flow:** Clear visual progression from "What is Context" -> "How Hayagriva Manages Context" -> "Statutory Liabilities of Mismanagement" -> "Practice Multiplier CTA".
2. **Card Visual Elegance:** Ensure both card groups (3 Context Management cards and 4 Statutory Reality cards) maintain equal height, clean typography, and responsive grid wrapping without visual clutter.
3. **Active Navigation State:** Verify that `js/header.js` illuminates Home when on `index.html` and accurately highlights the 4 pillar tabs on their respective pages.
4. **Zero 404 Links:** Verify that internal links, footer links, and `render.yaml` correctly point `/context` to the homepage.
5. **Mobile Viewport Responsiveness:** Ensure both card grids wrap cleanly on `<768px` viewports without horizontal scrollbars.

---

## File Structure & Responsibilities

| File Path | Action | Role / Responsibility |
|---|---|---|
| `index.html` | Modify | Transform Home into the Sovereign Context Foundation page: Hero + 3 Context Management Cards + 4 Statutory Reality / Liability Cards + CTA. |
| `context.html` | Delete | Removed per user request; content merged into `index.html`. |
| `header.html` | Modify | Update navigation items to 4 pillars: `KNOWLEDGE`, `INTELLIGENCE`, `AGENTS`, `COMMUNITY` + Home + `LOGIN`. |
| `js/header.js` | Modify | Update fallback HTML template and `updateActiveNav()` logic for 4-pillar structure. |
| `footer.html` | Modify | Align footer tree columns to 4 pillars with Context links anchored to Home. |
| `js/footer.js` | Modify | Update fallback footer template to match `footer.html`. |
| `render.yaml` | Modify | Route `/context` rewrite to `/index.html` or `/`. |
| `harness_haya_wiki.html` | Modify | Update any remaining links pointing to `context.html` to point to `index.html`. |
| `MEMORY.md` | Modify | Update taxonomy documentation and endpoint mappings. |

---

## Task Decomposition

### Task 1: Re-architect Homepage (`index.html`) with Sovereign Context Narrative & Liability Cards

**Files:**
- Modify: `index.html:190-280`

**Content Requirements:**
- **Hero Framing:**
  - Retain `#heroLogoCard` emblem with 3D parallax.
  - Central title: `CONTEXT: The Sovereign Bedrock of Commercial Law & CIRP`
  - Subtitle: *In high-stakes corporate insolvency and litigation, Context is your debtor's entire confidential universe—multi-gigabyte ledgers, bank statements, promoter transactions, and claim records.*
  - Centered Action CTA: `<a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="btn-pillar-cta-center"><i class="fa-solid fa-cloud-arrow-up"></i><span>Launch Ingestion Pipeline ↗</span></a>`
- **Section 1: How Context is Created & Sovereignly Managed (3 Minimal Cards):**
  - Section heading: `SOVEREIGN CONTEXT MANAGEMENT`
  - Card 1: `Air-Gapped Debtor Ingest` — *Parse debtor ledgers, Tally backups, and bank statements 100% locally with zero cloud transmission.*
  - Card 2: `SHA-256 Evidence Vaults` — *Cryptographically timestamp debtor records and vouchers for tamper-evident court admissibility.*
  - Card 3: `Confidentiality Enclaves` — *Role-based enclaves partition debtor engagements so teams only access assigned matter files.*
- **Section 2: The Statutory Fear Factor: Why Mismanaging Context Carries Dire Liability (4 Minimal Cards):**
  - Section heading: `THE STATUTORY REALITY: LIABILITIES OF CONTEXT MISMANAGEMENT`
  - Card 1: `DPDP & IT Act Shield` — *Zero cloud leakage. 100% on-device processing guarantees complete DPDP Act 2023 and Sec 72A immunity for debtor records.*
  - Card 2: `IBBI Reg 40A Immunity` — *Automated timeline watchdogs audit every 330-day CIRP milestone to eliminate show-cause risks and protect your AFA.*
  - Card 3: `ED, SFIO & Avoidance Defense` — *Scan millions of ledger entries to assemble tamper-evident Sec 43, 45, 50, and 66 avoidance filings in hours.*
  - Card 4: `10x Scale with Lean Teams` — *Automate 80% of claims collation, checklist verification, and drafting to manage 10x more appointments with lean chambers.*

- [x] **Step 1: Update `index.html` hero container with Context title, subtitle, and Ingestion CTA**
- [x] **Step 2: Add 3-card grid for "Sovereign Context Management"**
- [x] **Step 3: Refine 4-card grid for "Statutory Liabilities & Practice Scale"**
- [x] **Step 4: Verify layout on `http://localhost:5050/`**
- [x] **Step 5: Commit changes**

```bash
git add index.html
git commit -m "feat(home): merge context architecture and statutory liability narrative into index.html"
```

---

### Task 2: Update Global Navigation (`header.html` & `js/header.js`) to 4 Pillars + Login

**Files:**
- Modify: `header.html:30-65`
- Modify: `js/header.js:35-80, 220-250`

**Requirements:**
- Remove the separate `CONTEXT` tab from the navigation.
- The 4 Pillar Tabs become:
  1. `KNOWLEDGE` (`knowledge.html`, Legal Vaults)
  2. `INTELLIGENCE` (`intelligence.html`, Sovereign AI)
  3. `AGENTS` (`agents.html`, Custom Agents)
  4. `COMMUNITY` (`community.html`, Agentic Professionals)
- Brand/Home icon (`index.html`) links to Home (Context Foundation).
- Top-right CTA remains `<a href="https://app-apnet-net.onrender.com/login" ... class="portal-cta-main">LOGIN</a>`.
- Update `updateActiveNav()` in `js/header.js` to remove `context.html` branch and highlight Home on `/` or `index.html`.

- [x] **Step 1: Update `header.html` navigation to 4 pillars**
- [x] **Step 2: Update `js/header.js` fallback HTML template to match `header.html`**
- [x] **Step 3: Update `updateActiveNav()` in `js/header.js`**
- [x] **Step 4: Verify navigation links and active highlights on `http://localhost:5050`**
- [x] **Step 5: Commit changes**

```bash
git add header.html js/header.js
git commit -m "feat(nav): update global navigation to 4 pillars and remove context tab"
```

---

### Task 3: Synchronize Shared Footer (`footer.html` & `js/footer.js`)

**Files:**
- Modify: `footer.html:25-96`
- Modify: `js/footer.js:80-155`

**Requirements:**
- Update the footer navigation grid to 4 pillars (`KNOWLEDGE`, `INTELLIGENCE`, `AGENTS`, `COMMUNITY`).
- Under KNOWLEDGE or in a dedicated section, reference "Context & Ingest" pointing to `index.html`.
- Keep the sacred Shloka card and Lord Hayagriva multi-armed icon intact.
- Keep the Member Login CTA intact.

- [x] **Step 1: Update `footer.html` to 4 pillar columns**
- [x] **Step 2: Update `js/footer.js` fallback template to mirror `footer.html`**
- [x] **Step 3: Verify footer appearance across all pages**
- [x] **Step 4: Commit changes**

```bash
git add footer.html js/footer.js
git commit -m "feat(footer): synchronize shared footer with 4-pillar taxonomy"
```

---

### Task 4: Remove `context.html` & Update Rewrites / Secondary Links

**Files:**
- Delete: `context.html`
- Modify: `render.yaml:12-25`
- Modify: `harness_haya_wiki.html:65-75`
- Modify: `MEMORY.md:50-80`

**Requirements:**
- Delete `context.html` via `git rm`.
- In `render.yaml`, change `/context` rewrite destination to `/index.html`.
- In `harness_haya_wiki.html`, update any link pointing to `context.html` to `index.html`.
- In `MEMORY.md`, record the new 4-pillar taxonomy (`KNOWLEDGE`, `INTELLIGENCE`, `AGENTS`, `COMMUNITY`) with Home as the Context foundation.

- [x] **Step 1: Delete `context.html` using `git rm`**
- [x] **Step 2: Update `/context` rewrite in `render.yaml`**
- [x] **Step 3: Update links in `harness_haya_wiki.html`**
- [x] **Step 4: Update `MEMORY.md` documentation**
- [x] **Step 5: Commit deletions and link updates**

```bash
git rm context.html
git add render.yaml harness_haya_wiki.html MEMORY.md
git commit -m "chore: remove context.html, update render rewrites and memory docs"
```

---

### Task 5: End-to-End Verification

**Steps:**
- [x] **Step 1: Verify all routes return HTTP 200 OK (`http://localhost:5050/`, `/knowledge.html`, `/intelligence.html`, `/agents.html`, `/community.html`)**
- [x] **Step 2: Verify `http://localhost:5050/context.html` cleanly redirects or is not linked anywhere**
- [x] **Step 3: Visually verify `index.html` narrative flow and card formatting via browser inspection**
- [x] **Step 4: Verify navigation active states when navigating across pages**
- [x] **Step 5: Review git diff and ensure pristine working tree**
