# Footer Typography & Sovereign Cobalt Slate Modernization Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the site footer navigation headers to Google Font `Chakra Petch` lowercase (`knowledge`, `intelligence`, `co-counsels`, `professionals`) and transition the footer background from near-black midnight charcoal to rich **Sovereign Cobalt Slate** (`#0b1f3b`), achieving complete typographic and color synergy with the header brandmark.

**Architecture:**
- Update column header titles in `footer.html` and `js/footer.js` (`fallbackFooterHTML`) from uppercase (`KNOWLEDGE`, `INTELLIGENCE`, etc.) to lowercase (`knowledge`, `intelligence`, `co-counsels`, `professionals`).
- In `css/footer.css`, import `Chakra Petch` and style `.tree-root-name` with `font-family: 'Chakra Petch', sans-serif`, `text-transform: lowercase`, `font-size: 0.92rem`, `font-weight: 600`, and `letter-spacing: 0.02em`.
- Update `.compact-footer` background to Sovereign Cobalt Slate (`#0b1f3b`) with top border `#1a365d`.
- Recalibrate container cards (`.footer-col-sacred` and `.footer-col-nav-hub`) with elevated translucent borders (`rgba(255, 255, 255, 0.12)`) and background (`rgba(255, 255, 255, 0.045)`), preserving high-contrast glow for the sacred multi-armed Hayagriva emblem.
- Maintain link lists in `Inter` (`font-size: 0.85rem`) to guarantee effortless readability of legal matter descriptions.

**Tech Stack:** HTML5, CSS3, JavaScript (ES6), Google Font `Chakra Petch`, Google Font `Noto Serif Devanagari`, `Inter`.

**Spec:** User request:
- Implement Option 1 for footer font: Column headers in `Chakra Petch` lowercase (`knowledge`, `intelligence`, `co-counsels`, `professionals`), nested links in `Inter`.
- Implement Option 1 for footer colour: Sovereign Cobalt Slate background (`#0b1f3b`).
- Surgical plan first before modifying files.

## Global Constraints
- Maintain 0ms static footer render latency: `footer.html` and `js/footer.js` (`fallbackFooterHTML`) must remain identical in structure and copy.
- Preserve all existing links, event handlers (`openIdeDownloadModal()`, `openAddMeModal()`), and layout dimensions (`38% : 62%` grid inside `max-width: 1360px`).
- Sacred card integrity: The white Lord Hayagriva line-art emblem, Sanskrit Shloka (`Noto Serif Devanagari`), and English translation must maintain sharp contrast and optical balance.
- Mobile responsiveness: Grid wrap and padding behavior below 1024px and 768px must remain robust.

## Review Focus
1. Brand cohesion: Footer column headers in lowercase `Chakra Petch` must visually rhyme with the header navigation tabs (`knowledge`, `intelligence`, `co-counsels`, `professionals`).
2. Readability: Nested link items must remain in `Inter` with comfortable line height and clear hover contrast (`#38bdf8` or `#ffffff`).
3. Sacred contrast: The white Hayagriva emblem in `.footer-col-sacred` must render with high clarity against `#0b1f3b` without color clash.
4. Fallback parity: Static pages with `js/footer.js` must render the updated footer with 0ms delay and zero FOUT.
5. Cross-page consistency: Check footer appearance on `index.html` and `intelligence.html`.

---

### Task 1: Update Footer HTML Template and JS Fallback Markup

**Files:**
- Modify: `footer.html:28-83`
- Modify: `js/footer.js:84-141`

**Interfaces:**
- Consumes: Existing tree navigation links and modal click handlers.
- Produces: Lowercase column headers (`knowledge`, `intelligence`, `co-counsels`, `professionals`) in both primary and fallback templates.

- [ ] **Step 1: Update column titles in `footer.html`**
Change lines 31, 45, 59, 73 from uppercase to lowercase:
- `<span class="tree-root-name">knowledge</span>`
- `<span class="tree-root-name">intelligence</span>`
- `<span class="tree-root-name">co-counsels</span>`
- `<span class="tree-root-name">professionals</span>`

- [ ] **Step 2: Mirror exact column titles in `js/footer.js` (`fallbackFooterHTML`)**
Change lines 88, 102, 116, 130 in `js/footer.js` to match the lowercase titles.

- [ ] **Step 3: Verify parity between `footer.html` and `js/footer.js`**
Run automated check:
```bash
python3 -c '
with open("footer.html") as f1, open("js/footer.js") as f2:
    h = f1.read()
    j = f2.read()
    for col in [">knowledge<", ">intelligence<", ">co-counsels<", ">professionals<"]:
        assert col in h, f"Missing {col} in footer.html"
        assert col in j, f"Missing {col} in js/footer.js"
    assert "KNOWLEDGE" not in h.split("footer-tree-grid")[1]
print("Footer template parity PASSED")
'
```
Expected: `Footer template parity PASSED`.

---

### Task 2: Style Footer Background & Column Typography in `css/footer.css`

**Files:**
- Modify: `css/footer.css:1-16` (font import & `.compact-footer` background)
- Modify: `css/footer.css:31-42` (`.footer-col-sacred` border & background)
- Modify: `css/footer.css:212-224` (`.footer-col-nav-hub` border & background)
- Modify: `css/footer.css:281-286` (`.tree-root-name` Chakra Petch typography)
- Modify: `css/footer.css:332-348` (`.tree-item a` hover transition & color)

**Interfaces:**
- Consumes: Google Font `Chakra Petch`.
- Produces: Sovereign Cobalt Slate background (`#0b1f3b`) and lowercase geometric column titles.

- [ ] **Step 1: Update font import and `.compact-footer` in `css/footer.css`**
Update lines 1–15:
```css
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Noto+Serif+Devanagari:wght@400;500;700&display=swap');

/* ==========================================================================
   HAYAGRIVA Shared Sovereign Cobalt Slate Footer Stylesheet
   ========================================================================== */

.compact-footer {
  background-color: #0b1f3b;
  border-top: 1px solid #1a365d;
  padding: 26px 1.75rem 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0;
  margin-top: 0;
}
```

- [ ] **Step 2: Update container cards in `css/footer.css`**
In `.footer-col-sacred` (line 31) and `.footer-col-nav-hub` (line 212):
```css
.footer-col-sacred {
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 22px;
  height: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
}

.footer-col-nav-hub {
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 18px 24px 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
}
```

- [ ] **Step 3: Update `.tree-root-name` to Chakra Petch lowercase**
In `css/footer.css` lines 281–286:
```css
.tree-root-name {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: lowercase;
  color: #ffffff;
}
```

- [ ] **Step 4: Update link hover accent to cyan blue**
In `css/footer.css`:
```css
.tree-item a:hover {
  color: #38bdf8;
  transform: translateX(2px);
}
```

- [ ] **Step 5: Verify CSS syntax and brace balance**
Run automated check:
```bash
python3 -c '
with open("css/footer.css") as f:
    c = f.read()
assert c.count("{") == c.count("}"), "Brace mismatch in css/footer.css"
assert "#0b1f3b" in c, "Missing #0b1f3b in css/footer.css"
assert "Chakra Petch" in c, "Missing Chakra Petch in css/footer.css"
print("CSS verification PASSED")
'
```
Expected: `CSS verification PASSED`.

---

### Task 3: Visual Verification & Verification Suite

**Files:**
- Test across: `index.html`, `intelligence.html`

- [ ] **Step 1: Check HTTP routes**
Run:
```bash
for route in "" "intelligence.html"; do
  curl -s -o /dev/null -w "%{http_code} $route\n" "http://localhost:5050/$route"
done
```
Expected: `200` for both.

- [ ] **Step 2: Inspect rendered DOM and capture screenshot via browser subagent**
Check:
- Footer background is rich Sovereign Cobalt Slate `#0b1f3b`.
- The 4 column titles render as lowercase Chakra Petch: `knowledge`, `intelligence`, `co-counsels`, `professionals`.
- The sacred Hayagriva emblem and Sanskrit shloka render crisply with high contrast.
- Nested links remain clean, readable `Inter`.

- [ ] **Step 3: Git stage and commit**
```bash
git add footer.html js/footer.js css/footer.css docs/superpowers/plans/2026-10-25-footer-font-and-color-sovereign-blue.md
git commit -m "feat(footer): update background to Sovereign Cobalt Slate and column titles to Chakra Petch lowercase"
```
