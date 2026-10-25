# Rename Pages (`community.html` -> `directory.html`, `agents.html` -> `counsels.html`) and Update Header Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename `community.html` to `directory.html` and `agents.html` to `counsels.html`, update the global navigation header item from "DIRECTORY / Agentic Professionals" to "PROFESSIONALS / Directory Listing" linking to `directory.html`, update the CO-COUNSEL link to `counsels.html`, and update all footers, dynamic scripts, routing configs, and documentation.

**Architecture:**
- Rename/migrate files using `git mv` (`community.html` -> `directory.html`, `agents.html` -> `counsels.html`) while creating zero-dependency meta-refresh/JS redirect shim pages at `community.html` and `agents.html` for backward compatibility.
- Update global navigation components (`header.html`, `js/header.js`) with the new page targets (`counsels.html`, `directory.html`) and labels (`PROFESSIONALS` / `Directory Listing`).
- Update footer components (`footer.html`, `js/footer.js`) with the updated URLs and column taxonomy.
- Update route rewriting in `render.yaml` and active-route detection in `js/header.js`.
- Update page metadata, headings, and project index in `MEMORY.md`.

**Tech Stack:** HTML5, Vanilla JavaScript (ES6+), CSS3, YAML (Render deployment configuration).

**Spec:** User instructions:
1. Rename page `community.html` to `directory.html`.
2. Rename page `agents.html` to `counsels.html`.
3. Rename "DIRECTORY / Agentic Professionals" to "PROFESSIONALS / Directory Listing" in the header and other relevant places.

## Global Constraints
- All navigation links must resolve with HTTP 200 OK without broken links.
- Legacy URLs (`/community.html`, `/agents.html`) must redirect gracefully to their new counterparts (`/directory.html`, `/counsels.html`) to prevent any 404s for bookmarks, crawlers, or direct visits.
- Active navigation highlighting in `js/header.js` must activate the correct tab when visiting `/counsels.html` and `/directory.html`.
- Preserve the brand logo title `AGENTIC PROFESSIONALS` and footer copyright; only rename the pillar 4 navigation and directory references.

## Review Focus
1. Link integrity: Both `header.html` and `js/header.js` must link to `counsels.html` and `directory.html`.
2. Header visual labels: Nav item 4 must display `CO-COUNSEL` / `Chamber Personas` pointing to `counsels.html`; Nav item 5 must display `PROFESSIONALS` / `Directory Listing` pointing to `directory.html`.
3. Backward compatibility: Requesting `http://localhost:5050/community.html` and `http://localhost:5050/agents.html` must instantly forward to `directory.html` and `counsels.html`.
4. Route highlighting: Active indicator (`.active`) must attach to `#nav-agents` on `/counsels.html` and `#nav-community` on `/directory.html`.
5. Footer links: Footer Column 3 and Column 4 must point to `counsels.html` and `directory.html`.

---

### Task 1: Migrate Files & Create Backward Compatibility Redirect Shims

**Files:**
- Create/Rename: `directory.html` (from `community.html`)
- Create/Rename: `counsels.html` (from `agents.html`)
- Create: `community.html` (Redirect shim to `directory.html`)
- Create: `agents.html` (Redirect shim to `counsels.html`)

**Interfaces:**
- Consumes: Existing contents of `community.html` and `agents.html`.
- Produces: `directory.html` and `counsels.html` as the primary page sources, plus seamless redirect shims.

- [ ] **Step 1: Copy `community.html` to `directory.html` and `agents.html` to `counsels.html`**
Run:
```bash
cp community.html directory.html
cp agents.html counsels.html
```

- [ ] **Step 2: Create redirect shim in `community.html`**
Replace `community.html` content with an immediate redirect shim:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=directory.html">
  <title>Redirecting to Directory Listing...</title>
  <link rel="canonical" href="directory.html">
  <script>window.location.replace("directory.html");</script>
</head>
<body style="font-family: sans-serif; padding: 2rem; text-align: center; color: #475569;">
  <p>Redirecting to <a href="directory.html">Directory Listing</a>...</p>
</body>
</html>
```

- [ ] **Step 3: Create redirect shim in `agents.html`**
Replace `agents.html` content with an immediate redirect shim:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=counsels.html">
  <title>Redirecting to Co-Counsel Personas...</title>
  <link rel="canonical" href="counsels.html">
  <script>window.location.replace("counsels.html");</script>
</head>
<body style="font-family: sans-serif; padding: 2rem; text-align: center; color: #475569;">
  <p>Redirecting to <a href="counsels.html">Co-Counsel Personas</a>...</p>
</body>
</html>
```

- [ ] **Step 4: Update titles and labels inside `directory.html` and `counsels.html`**
In `directory.html`:
- Line 7: Change `<title>` to:
  `<title>PROFESSIONALS: Directory Listing | AgenticProfessionals.Net</title>`
- Line 51: Change subtitle to:
  `Directory Listing &bull; <span id="results-count-badge" style="color: #0f172a; font-weight: 600;">Loading...</span>`

In `counsels.html`:
- Verify title: `<title>CO-COUNSEL: Chamber Personas — AgenticProfessionals.Net</title>`
- Verify hero and cards are aligned with Co-Counsel Personas.

---

### Task 2: Update Header Component and Dynamic Header Loader

**Files:**
- Modify: `header.html:51-66`
- Modify: `js/header.js:61-76, 226-240`

**Interfaces:**
- Consumes: Navigation menu list items `#nav-agents` and `#nav-community`.
- Produces: Updated navigation items pointing to `counsels.html` and `directory.html`, with labels `CO-COUNSEL / Chamber Personas` and `PROFESSIONALS / Directory Listing`.

- [ ] **Step 1: Update `header.html` navigation links and labels**
In `header.html`, update items 4 and 5:
```html
      <!-- 4. CO-COUNSEL (Chamber Personas) -->
      <li class="nav-item">
        <a href="counsels.html" class="nav-link nav-link-wireframe" id="nav-agents">
          <span class="nav-title-row">CO-COUNSEL</span>
          <span class="nav-subtitle-row">Chamber Personas</span>
        </a>
      </li>

      <!-- 5. PROFESSIONALS (Directory Listing) -->
      <li class="nav-item">
        <a href="directory.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">PROFESSIONALS</span>
          <span class="nav-subtitle-row">Directory Listing</span>
        </a>
      </li>
```

- [ ] **Step 2: Update `fallbackHTML` in `js/header.js`**
In `js/header.js`, update items 4 and 5 inside `fallbackHTML` identically:
```html
      <!-- 4. CO-COUNSEL (Chamber Personas) -->
      <li class="nav-item">
        <a href="counsels.html" class="nav-link nav-link-wireframe" id="nav-agents">
          <span class="nav-title-row">CO-COUNSEL</span>
          <span class="nav-subtitle-row">Chamber Personas</span>
        </a>
      </li>

      <!-- 5. PROFESSIONALS (Directory Listing) -->
      <li class="nav-item">
        <a href="directory.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">PROFESSIONALS</span>
          <span class="nav-subtitle-row">Directory Listing</span>
        </a>
      </li>
```

- [ ] **Step 3: Update `updateActiveNav()` in `js/header.js`**
Update route matching in `js/header.js`:
```javascript
    } else if (path === 'counsels.html' || path === 'agents.html' || path === 'cocounsel.html' || path === 'co-counsel.html' || path.startsWith('agents_') || path.startsWith('marketplace_reporting_') || path.includes('telephone_cables')) {
      setActive('nav-agents');
    } else if (path === 'directory.html' || path === 'community.html' || path.startsWith('directories_') || path === 'directory_listing.html' || path === 'resolutionbazaar.html' || path === 'pipie_assets.html' || path.includes('FINAL_29A')) {
      setActive('nav-community');
    }
```
Also update hash check:
```javascript
    } else if (hash.startsWith('#counsels') || hash.startsWith('#cocounsel') || hash.startsWith('#co-counsel') || hash.startsWith('#agents') || hash.startsWith('#coworkers') || hash.startsWith('#actions')) {
      setActive('nav-agents');
    } else if (hash.startsWith('#professionals') || hash.startsWith('#directory') || hash.startsWith('#directories') || hash.startsWith('#community') || hash.startsWith('#network')) {
      setActive('nav-community');
    }
```

---

### Task 3: Update Footers, Route Configs, and Project Documentation

**Files:**
- Modify: `footer.html:60-81`
- Modify: `js/footer.js:115-138`
- Modify: `render.yaml:24-44`
- Modify: `MEMORY.md:63-64`

**Interfaces:**
- Consumes: Footer columns 3 & 4, Render rewrite mapping, and memory taxonomy index.
- Produces: Consistent site taxonomy across all deployment and documentation surfaces.

- [ ] **Step 1: Update `footer.html`**
In `footer.html`:
- Column 3 link:
  Change `<li class="tree-item"><a href="agents.html">Chamber Personas</a></li>`
  To `<li class="tree-item"><a href="counsels.html">Chamber Personas</a></li>`
- Column 4:
  Change header from `DIRECTORY` to `PROFESSIONALS`:
  `<span class="tree-root-name">PROFESSIONALS</span>`
  Change first link from `Agentic Professionals` to `Directory Listing`:
  `<li class="tree-item"><a href="directory.html">Directory Listing</a></li>`
  Change second link:
  `<li class="tree-item"><a href="directory.html">National Bench Map</a></li>`

- [ ] **Step 2: Update `js/footer.js`**
In `js/footer.js`, make identical updates inside `footerHTML`:
- Column 3: `<a href="counsels.html">Chamber Personas</a>`
- Column 4: Root name `PROFESSIONALS`, links to `directory.html` (`Directory Listing`, `National Bench Map`).

- [ ] **Step 3: Update `render.yaml`**
In `render.yaml`, update routes:
```yaml
      - type: rewrite
        source: /counsels
        destination: /counsels.html
      - type: rewrite
        source: /agents
        destination: /counsels.html
      - type: rewrite
        source: /cocounsel
        destination: /counsels.html
      - type: rewrite
        source: /co-counsel
        destination: /counsels.html
      - type: rewrite
        source: /directory
        destination: /directory.html
      - type: rewrite
        source: /community
        destination: /directory.html
      - type: rewrite
        source: /directories
        destination: /directory.html
```

- [ ] **Step 4: Update `MEMORY.md`**
In `MEMORY.md`, update table rows 3 & 4:
```markdown
| 3 | **CO-COUNSEL** | Chamber Personas | `counsels.html` | Co-Counsel Studio (`https://app-apnet-net.onrender.com/login`) |
| 4 | **PROFESSIONALS** | Directory Listing | `directory.html` | Full-screen interactive Leaflet bench map & directory roster |
```

---

### Task 4: End-to-End Verification

**Files:**
- Test all local server endpoints: `counsels.html`, `directory.html`, `community.html`, `agents.html`, `header.html`, `footer.html`.

- [ ] **Step 1: Test HTTP status codes on dev server (Port 5050)**
Run:
```bash
curl -I http://localhost:5050/counsels.html
curl -I http://localhost:5050/directory.html
curl -I http://localhost:5050/agents.html
curl -I http://localhost:5050/community.html
```
Expected: All return HTTP 200 OK.

- [ ] **Step 2: Verify header text and links rendered**
Run:
```bash
curl -s http://localhost:5050/header.html | grep -E "counsels.html|directory.html|PROFESSIONALS|Directory Listing"
```
Expected: Contains links to `counsels.html` and `directory.html`, with labels `PROFESSIONALS` and `Directory Listing`.

- [ ] **Step 3: Verify git status and commit**
Run:
```bash
git add directory.html counsels.html community.html agents.html header.html js/header.js footer.html js/footer.js render.yaml MEMORY.md docs/superpowers/plans/2026-10-25-rename-pages-and-professionals-navigation.md
git status
```
