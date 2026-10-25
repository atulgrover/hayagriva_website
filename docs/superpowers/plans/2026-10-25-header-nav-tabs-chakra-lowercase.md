# Header Navigation Tabs Chakra Petch Lowercase Modernization Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert header navigation tabs to single-line lowercase titles rendered in Google Font `Chakra Petch`, remove the redundant `#nav-home` icon (relying on the clickable brand logo), and align the login CTA for a clean, unified visual hierarchy.

**Architecture:**
- Simplify nav menu items in `header.html` and `js/header.js` (`fallbackHTML`) to single-line lowercase spans (`knowledge`, `intelligence`, `co-counsels`, `professionals`, and `login`), removing vertical 2-line subtitle clutter.
- Remove `#nav-home` icon entirely from the nav items list in `header.html` and `js/header.js` (`fallbackHTML`), allowing the brand logo (`#header-brand-logo`) to serve as the single home anchor.
- Update CSS rules in `css/components.css` to render `.nav-link-wireframe .nav-title-row` in `font-family: 'Chakra Petch', sans-serif`, `text-transform: lowercase`, `font-size: 0.95rem`, and `font-weight: 500`.
- Modernize `#nav-portal-login` to use `Chakra Petch` lowercase `login` for complete typographic cohesion across the entire header bar.
- Update `updateActiveNav()` in `js/header.js` to gracefully handle the removal of `#nav-home` without throwing errors.

**Tech Stack:** HTML5, CSS3, JavaScript (ES6), Google Font `Chakra Petch`.

**Spec:** User requests:
- Implement Option A: Single-line navigation tabs.
- Set all header navigation tab titles to lowercase (`knowledge`, `intelligence`, `co-counsels`, `professionals`, `login`).
- Use Google Font `Chakra Petch` for navigation typography to harmonize with the top-left `agentic professionals` logo.
- Option 1 for Home: Remove the home icon completely; the top-left brand mark (`agentic professionals` + circular unicorn emblem) already links to `index.html#home`.

## Global Constraints
- Preserve navigation anchor IDs (`#header-brand-logo`, `#nav-knowledge`, `#nav-intelligence`, `#nav-agents`, `#nav-community`, `#nav-portal-login`) and their exact `href` paths to guarantee `updateActiveNav()` and routing work without regression.
- Maintain 0ms static header render latency: changes in `header.html` must be synchronously mirrored in `js/header.js` (`fallbackHTML`).
- Maintain header vertical height parity: single-line tabs must vertically center within the 65px header container.
- Preserve mobile responsive drawer and break-point behavior.

## Review Focus
1. Typographic harmony: Chakra Petch lowercase tabs must match the geometric weight and baseline of the top-left `agentic professionals` logo without font jitter.
2. Active state rendering: Visiting `/knowledge.html`, `/intelligence.html`, `/counsels.html`, or `/professionals.html` must highlight the corresponding lowercase tab with proper contrast (`color: #0284c7` and subtle background tint `#f1f5f9`).
3. Home navigation parity: Clicking the brand logo on the top-left navigates to `index.html#home`, and no redundant home icon clutter remains in the tab bar.
4. Fallback HTML synchronization: Hard refresh and instant page transitions must not flicker or revert to legacy uppercase 2-line tabs.
5. Error-free JS: `updateActiveNav()` must not throw any null reference errors when `#nav-home` is no longer in the DOM.

---

### Task 1: Update Header HTML Template & JS Fallback Markup (Remove Home Icon, Single-Line Lowercase Tabs)

**Files:**
- Modify: `header.html:21-73`
- Modify: `js/header.js:31-83`
- Modify: `js/header.js:205-255` (`updateActiveNav()`)

**Interfaces:**
- Consumes: Existing navigation link anchors and IDs (`#nav-knowledge`, `#nav-intelligence`, `#nav-agents`, `#nav-community`, `#nav-portal-login`).
- Produces: Clean single-line lowercase markup in both primary and fallback header templates without `#nav-home`.

- [ ] **Step 1: Update navigation items in `header.html`**
Remove `#nav-home` `<li>` element.
Update lines 31–71 in `header.html`:
```html
    <!-- Primary Navigation Menu -->
    <ul class="nav-menu" id="header-nav-menu">

      <!-- 1. knowledge -->
      <li class="nav-item">
        <a href="knowledge.html" class="nav-link nav-link-wireframe" id="nav-knowledge">
          <span class="nav-title-row">knowledge</span>
        </a>
      </li>

      <!-- 2. intelligence -->
      <li class="nav-item">
        <a href="intelligence.html" class="nav-link nav-link-wireframe" id="nav-intelligence">
          <span class="nav-title-row">intelligence</span>
        </a>
      </li>

      <!-- 3. co-counsels -->
      <li class="nav-item">
        <a href="counsels.html" class="nav-link nav-link-wireframe" id="nav-agents">
          <span class="nav-title-row">co-counsels</span>
        </a>
      </li>

      <!-- 4. professionals -->
      <li class="nav-item">
        <a href="professionals.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">professionals</span>
        </a>
      </li>

      <!-- 5. Portal Login CTA -->
      <li class="nav-item">
        <a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="portal-cta-main" id="nav-portal-login">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          <span>login</span>
        </a>
      </li>

    </ul>
```

- [ ] **Step 2: Mirror exact navigation items in `js/header.js` (`fallbackHTML`)**
Update lines 31–83 in `js/header.js` to match the single-line lowercase tabs and login CTA without `#nav-home`.

- [ ] **Step 3: Update `updateActiveNav()` in `js/header.js` to handle home route cleanly**
Ensure `setActive('nav-home')` safely checks if element exists (already guarded in `setActive`: `const navEl = document.getElementById(navId); if (navEl) navEl.classList.add('active');`).

- [ ] **Step 4: Verify HTML parity between template and fallback**
Run automated check:
```bash
python3 -c '
with open("header.html") as f1, open("js/header.js") as f2:
    h = f1.read()
    j = f2.read()
    assert "nav-home" not in h, "nav-home still in header.html"
    assert "nav-home" not in j.split("fallbackHTML")[1].split("</header>")[0], "nav-home still in fallbackHTML"
    for term in ["knowledge", "intelligence", "co-counsels", "professionals", "<span>login</span>"]:
        assert term in h, f"Missing {term} in header.html"
        assert term in j, f"Missing {term} in js/header.js"
print("Parity check PASSED")
'
```
Expected: `Parity check PASSED`.

---

### Task 2: Style Nav Links and Modernize Login CTA in CSS

**Files:**
- Modify: `css/components.css:1738-1789` (nav link wireframe styles)
- Modify: `css/components.css:3832-3863` (`.portal-cta-main` styling)

**Interfaces:**
- Consumes: Google Font `'Chakra Petch'` (imported at top of `components.css`).
- Produces: Polished single-line typography and harmonious login CTA.

- [ ] **Step 1: Style `.nav-link-wireframe` and `.nav-title-row` for Chakra Petch single-line lowercase**
In `css/components.css`:
```css
/* Single-Line Nav Links in Chakra Petch */
.nav-link-wireframe {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0.42rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  line-height: 1;
  gap: 0;
  transition: all 0.15s ease;
  font-family: 'Chakra Petch', sans-serif;
}

.nav-link-wireframe .nav-title-row {
  display: inline-flex;
  align-items: center;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #334155;
  letter-spacing: 0.01em;
  line-height: 1;
  text-transform: lowercase;
  transition: color 0.15s ease;
}

.nav-link-wireframe:hover,
.nav-link-wireframe.active {
  background-color: #f1f5f9;
}

.nav-link-wireframe:hover .nav-title-row,
.nav-link-wireframe.active .nav-title-row {
  color: #0284c7;
  font-weight: 600;
}
```

- [ ] **Step 2: Update `.portal-cta-main` typography to Chakra Petch lowercase**
In `css/components.css`:
```css
.portal-cta-main {
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  text-transform: lowercase;
  background: #0f172a !important;
  color: #ffffff !important;
  height: var(--btn-h-md, 36px);
  min-height: var(--btn-h-md, 36px);
  max-height: var(--btn-h-md, 36px);
  padding: 0 var(--btn-px-md, 16px);
  border-radius: var(--btn-radius, 6px);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  transition: all 0.15s ease;
  border: 1px solid #0f172a;
  margin-left: 0.5rem;
  white-space: nowrap;
  box-sizing: border-box;
  line-height: 1;
}
```

- [ ] **Step 3: Verify CSS syntax and rules**
Check that no selectors are malformed or missing brackets.

---

### Task 3: Visual Verification & Verification Suite

**Files:**
- Test across: `index.html`, `knowledge.html`, `intelligence.html`, `counsels.html`, `professionals.html`

- [ ] **Step 1: Test server response and HTTP status across main routes**
Run:
```bash
for route in "" "knowledge.html" "intelligence.html" "counsels.html" "professionals.html"; do
  curl -s -o /dev/null -w "%{http_code} $route\n" "http://localhost:5050/$route"
done
```
Expected: `200` for all routes.

- [ ] **Step 2: Inspect rendered DOM and capture screenshot via browser subagent**
Check:
- `agentic professionals` brand logo on left.
- No `#nav-home` icon in the navigation bar.
- Clean single-line lowercase tabs (`knowledge`, `intelligence`, `co-counsels`, `professionals`, `login`).
- Proper active state highlight on `/intelligence.html`.

- [ ] **Step 3: Git stage and commit**
```bash
git add header.html js/header.js css/components.css docs/superpowers/plans/2026-10-25-header-nav-tabs-chakra-lowercase.md
git commit -m "feat(header): modernize nav tabs to Chakra Petch lowercase and remove redundant home icon"
```
