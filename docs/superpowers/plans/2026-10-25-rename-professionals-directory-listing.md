# Rename "DIRECTORY / Agentic Professionals" to "PROFESSIONALS / Directory Listing" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the global navigation header and corresponding footer and community page touchpoints from "DIRECTORY / Agentic Professionals" to "PROFESSIONALS / Directory Listing".

**Architecture:** Update both the primary template sources (`header.html`, `footer.html`) and their zero-latency dynamic JavaScript loaders (`js/header.js`, `js/footer.js`), plus page metadata and labels in `community.html`, `directory_listing.html`, and `MEMORY.md`.

**Tech Stack:** Semantic HTML5, Vanilla JavaScript (ES6+), CSS3.

**Spec:** User request to rename "DIRECTORY / Agentic Professionals" with "PROFESSIONALS / Directory Listing" in the header and other relevant places.

## Global Constraints
- Preserve navigation link IDs (`nav-community`) and routes (`community.html`) so routing logic in `js/header.js` (`updateActiveNav()`) and deep links remain 100% intact.
- Maintain consistency between static component HTML files and dynamic JS template strings (`header.html` <-> `js/header.js`, `footer.html` <-> `js/footer.js`).
- Preserve the brand title `AGENTIC PROFESSIONALS` in the header logo block and footer copyright; only rename the pillar 4 / directory section references.

## Review Focus
1. Header navigation item visual rendering: Title row must show `PROFESSIONALS` and subtitle row must show `Directory Listing`.
2. Dynamic header loader fallback and fetch: Both `fallbackHTML` and `header.html` must match to avoid layout shift or stale labels.
3. Footer tree hierarchy: Column 4 tree root badge/name must show `PROFESSIONALS` and first list item link must show `Directory Listing`.
4. Page title and bench directory banner on `community.html`: Title tag must show `PROFESSIONALS: Directory Listing | AgenticProfessionals.Net` and subtitle must reflect `Directory Listing`.
5. Active nav highlighting: When navigating to `/community.html`, the `PROFESSIONALS` nav tab must continue to receive the `.active` styling.

---

### Task 1: Update Global Header Template and Dynamic Loader

**Files:**
- Modify: `header.html:59-65`
- Modify: `js/header.js:69-76`

**Interfaces:**
- Consumes: Existing `.nav-item` structure with `.nav-title-row` and `.nav-subtitle-row`.
- Produces: Updated navigation tab with title `PROFESSIONALS` and subtitle `Directory Listing`.

- [ ] **Step 1: Update `header.html` navigation item**
In `header.html`, update the comment and spans under `#nav-community`:
Change:
```html
      <!-- 5. DIRECTORY (Agentic Professionals) -->
      <li class="nav-item">
        <a href="community.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">DIRECTORY</span>
          <span class="nav-subtitle-row">Agentic Professionals</span>
        </a>
      </li>
```
To:
```html
      <!-- 5. PROFESSIONALS (Directory Listing) -->
      <li class="nav-item">
        <a href="community.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">PROFESSIONALS</span>
          <span class="nav-subtitle-row">Directory Listing</span>
        </a>
      </li>
```

- [ ] **Step 2: Update `js/header.js` fallback HTML navigation item**
In `js/header.js`, update the identical comment and markup inside `fallbackHTML`:
Change:
```html
      <!-- 5. DIRECTORY (Agentic Professionals) -->
      <li class="nav-item">
        <a href="community.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">DIRECTORY</span>
          <span class="nav-subtitle-row">Agentic Professionals</span>
        </a>
      </li>
```
To:
```html
      <!-- 5. PROFESSIONALS (Directory Listing) -->
      <li class="nav-item">
        <a href="community.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">PROFESSIONALS</span>
          <span class="nav-subtitle-row">Directory Listing</span>
        </a>
      </li>
```

- [ ] **Step 3: Verify header markup consistency**
Run grep to verify both files have the new text and no old `DIRECTORY` / `Agentic Professionals` remains in `nav-title-row` or `nav-subtitle-row`:
`grep -n -C 2 "nav-community" header.html js/header.js`

---

### Task 2: Update Footer Template and Dynamic Loader

**Files:**
- Modify: `footer.html:69-81`
- Modify: `js/footer.js:126-138`

**Interfaces:**
- Consumes: Footer Column 4 tree column markup.
- Produces: Column 4 titled `PROFESSIONALS` with first link labeled `Directory Listing`.

- [ ] **Step 1: Update `footer.html` Column 4**
In `footer.html`, update Column 4:
Change:
```html
        <!-- Column 4: DIRECTORY -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-network"><i class="fa-solid fa-address-book"></i></span>
            <span class="tree-root-name">DIRECTORY</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="community.html">Agentic Professionals</a></li>
            <li class="tree-item"><a href="community.html">National Bench Map</a></li>
```
To:
```html
        <!-- Column 4: PROFESSIONALS -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-network"><i class="fa-solid fa-address-book"></i></span>
            <span class="tree-root-name">PROFESSIONALS</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="community.html">Directory Listing</a></li>
            <li class="tree-item"><a href="community.html">National Bench Map</a></li>
```

- [ ] **Step 2: Update `js/footer.js` Column 4 template**
In `js/footer.js`, update the Column 4 markup inside the `footerHTML` template string to match `footer.html`:
Change `DIRECTORY` to `PROFESSIONALS` and `Agentic Professionals` link text to `Directory Listing`.

- [ ] **Step 3: Verify footer markup consistency**
Run grep to verify `footer.html` and `js/footer.js` match:
`grep -n -C 3 "tree-root-badge badge-network" footer.html js/footer.js`

---

### Task 3: Update Page Metadata, Titles, and Documentation

**Files:**
- Modify: `community.html:7,51`
- Modify: `directory_listing.html:7`
- Modify: `MEMORY.md:64`

**Interfaces:**
- Consumes: Page title tags, sidebar roster badge subtitle, and project memory table.
- Produces: Harmonized `PROFESSIONALS: Directory Listing` branding across pages and documentation.

- [ ] **Step 1: Update `community.html` title and sidebar subtitle**
In `community.html`:
Line 7: Update `<title>` from `DIRECTORY: Agentic Professionals | AgenticProfessionals.Net` to `PROFESSIONALS: Directory Listing | AgenticProfessionals.Net`.
Line 51: Update subtitle under `BENCH DIRECTORY` from `Agentic Professionals &bull;` to `Directory Listing &bull;`.

- [ ] **Step 2: Update `directory_listing.html` title**
In `directory_listing.html`:
Line 7: Update `<title>` from `Community Directory | Agentic Professionals Network` to `Directory Listing | Professionals | Agentic Professionals Network`.

- [ ] **Step 3: Update `MEMORY.md` navigation table**
In `MEMORY.md`:
Update table row 4:
`| 4 | **PROFESSIONALS** | Directory Listing | \`community.html\` | Full-screen interactive Leaflet bench map & directory roster |`

---

### Task 4: Verification and Visual Validation

**Files:**
- Test: All web routes via curl & dev server

- [ ] **Step 1: Verify dev server responses**
Run curl commands to verify `http://localhost:5050/`, `http://localhost:5050/header.html`, `http://localhost:5050/community.html`, and `http://localhost:5050/footer.html` return HTTP 200 with the new strings:
`curl -s http://localhost:5050/header.html | grep -C 2 "nav-community"`
`curl -s http://localhost:5050/community.html | grep "<title>"`

- [ ] **Step 2: Verify active navigation state on `/community.html`**
Verify `updateActiveNav()` in `js/header.js` continues to target `#nav-community` for `community.html`.

- [ ] **Step 3: Commit changes**
Stage and commit changes:
`git add header.html js/header.js footer.html js/footer.js community.html directory_listing.html MEMORY.md`
`git commit -m "feat(nav): rename DIRECTORY / Agentic Professionals to PROFESSIONALS / Directory Listing"`
