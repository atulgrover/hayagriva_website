# Header Logo Replacement & Chakra Petch Typography Integration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the legacy knight header logo and stacked uppercase title with the new circular unicorn emblem and live lowercase **"agentic professionals"** brand typography using Google Font **Chakra Petch**, establishing a clean 3-tier typography system.

**Architecture:**
- Isolate the circular unicorn emblem with transparency as `branding/unicorn_emblem.png` and full cropped logo as `branding/agentic_professionals_logo.png`.
- Import Google Font **Chakra Petch** (`weights 500, 600, 700`) in `css/components.css` and `header.html`.
- Update the brand identity anchor in `header.html` and `js/header.js` (`fallbackHTML`) to render the emblem icon alongside `<span class="brand-chakra-title">agentic professionals</span>`.
- Style the brand wordmark in `css/components.css` for pixel-accurate vertical centering, responsive scaling, and subtle hover interaction.
- Record the typography system in `MEMORY.md`.

**Tech Stack:** HTML5, CSS3, Google Fonts (`Chakra Petch`, `Inter`, `JetBrains Mono`), Python PIL (for lossless alpha extraction).

**Spec:** User request:
- Replace previous header top-left logo (knight + `AGENTIC PROFESSIONALS / SOVEREIGN INTELLIGENCE (AIR-GAPPED)`) with the new circular unicorn emblem + `agentic professionals` wordmark.
- Use `Chakra Petch` font for the logo wordmark.
- Preserve `Inter` for general prose/content legibility and `JetBrains Mono` for code/data hashes per the agreed brainstorming consensus.

## Global Constraints
- Preserve brand link anchor ID (`id="header-brand-logo"`) and route destination (`href="index.html#home"`).
- Maintain 0ms render latency: updates must be reflected in both `header.html` and `js/header.js` (`fallbackHTML`).
- The brand text must align with the nav items vertically within the 65px header height without overflowing or wrapping.
- Header layout on mobile screens (< 768px) must maintain clean spacing without collision.

## Review Focus
1. Brand mark visual fidelity: Circular unicorn emblem must render crisply at 34x34px alongside lowercase `agentic professionals` in Chakra Petch.
2. Google Font loading: `Chakra Petch` must load smoothly without layout shift or FOIT/FOUT.
3. Fallback parity: Both `fallbackHTML` in `js/header.js` and `header.html` must match identically.
4. Typography hierarchy preservation: Body copy, pillar cards, and nav items must continue using `Inter`, and monospace data must continue using `JetBrains Mono`.
5. Mobile responsiveness: Brand block must scale gracefully on smaller viewports.

---

### Task 1: Extract and Process Brand Assets

**Files:**
- Create: `branding/unicorn_emblem.png` (transparent circular emblem)
- Create: `branding/agentic_professionals_logo.png` (full cropped logo)

**Interfaces:**
- Consumes: User-uploaded asset `/Users/atulgrover/.gemini/antigravity-ide/brain/23e7a3ed-9b5f-4069-be22-b891568ea192/.user_uploaded/media_1792911124068.png`.
- Produces: Transparent high-resolution PNG assets for the header emblem and full wordmark.

- [ ] **Step 1: Extract circular unicorn emblem with transparent background**
Run Python script to crop the circular emblem (coordinates `[37, 35, 134, 142]`) from `media_1792911124068.png`, convert white pixels to transparent alpha, and save as `branding/unicorn_emblem.png` (with 2x density, padded for clean circular render).

- [ ] **Step 2: Crop full logo with transparent background**
Run Python script to crop the full logo bounding box `[37, 35, 976, 142]`, convert white background to transparent alpha, and save as `branding/agentic_professionals_logo.png`.

- [ ] **Step 3: Verify asset dimensions and transparency**
Verify both files exist in `branding/` with RGBA mode and non-empty alpha channels:
`file branding/unicorn_emblem.png branding/agentic_professionals_logo.png`

---

### Task 2: Import Chakra Petch and Update Component Styles

**Files:**
- Modify: `css/components.css:1640-1700`

**Interfaces:**
- Consumes: Google Fonts API for `Chakra Petch`.
- Produces: `.brand-chakra-title` and updated `.brand-block-wireframe` styles.

- [ ] **Step 1: Add Google Font import to `css/components.css`**
Add `@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&display=swap');` at the top of the header brand section in `css/components.css`.

- [ ] **Step 2: Define `.brand-chakra-title` styles**
Add styles:
```css
.brand-chakra-title {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.01em;
  text-transform: lowercase;
  display: inline-block;
  line-height: 1;
  transition: color 0.15s ease;
}

.brand-block-wireframe:hover .brand-chakra-title {
  color: #0284c7;
}
```

- [ ] **Step 3: Update `.brand-block-wireframe` container alignment**
Ensure `.brand-block-wireframe` aligns items center with clean horizontal gap (`0.65rem`), and `.brand-logo-img` renders at `34px` width/height.

---

### Task 3: Update Header Markup & Dynamic Loader

**Files:**
- Modify: `header.html:16-22`
- Modify: `js/header.js:25-33`

**Interfaces:**
- Consumes: Brand identity anchor `#header-brand-logo`.
- Produces: Single-line brand identity with unicorn emblem and live Chakra Petch typography.

- [ ] **Step 1: Update `header.html` brand identity block**
Change:
```html
    <!-- Brand Identity -->
    <a href="index.html#home" class="brand-block-wireframe" id="header-brand-logo" aria-label="Agentic Professionals Home">
      <img src="branding/hayagriva_knight_light.png" alt="Hayagriva Knight Logo" class="brand-logo-img" width="36" height="36" loading="eager" decoding="sync" />
      <div class="brand-text-block">
        <span class="brand-main-title">AGENTIC PROFESSIONALS</span>
        <span class="brand-sub-url">SOVEREIGN INTELLIGENCE (AIR-GAPPED)</span>
      </div>
    </a>
```
To:
```html
    <!-- Brand Identity -->
    <a href="index.html#home" class="brand-block-wireframe" id="header-brand-logo" aria-label="agentic professionals Home">
      <img src="branding/unicorn_emblem.png" alt="agentic professionals emblem" class="brand-logo-img" width="34" height="34" loading="eager" decoding="sync" />
      <span class="brand-chakra-title">agentic professionals</span>
    </a>
```

- [ ] **Step 2: Update `fallbackHTML` in `js/header.js`**
Make the identical replacement inside `fallbackHTML` in `js/header.js`.

- [ ] **Step 3: Verify header markup consistency**
Verify both `header.html` and `js/header.js` match using grep:
`grep -n -C 2 "brand-chakra-title" header.html js/header.js`

---

### Task 4: Documentation, Verification & Git Commit

**Files:**
- Modify: `MEMORY.md:25-30`
- Test: Local dev server `http://localhost:5050/`

- [ ] **Step 1: Update `MEMORY.md` with typography and branding decision**
Document the 3-tier typography system (`Chakra Petch` for brand wordmark / tech accents, `Inter` for UI & editorial, `JetBrains Mono` for code & hashes) and the new header logo in `MEMORY.md`.

- [ ] **Step 2: Verify live server rendering via curl & browser check**
Verify `http://localhost:5050/header.html` returns HTTP 200 with `brand-chakra-title` and `unicorn_emblem.png`.
Verify `http://localhost:5050/branding/unicorn_emblem.png` returns HTTP 200 with image/png content.

- [ ] **Step 3: Stage and commit all changes**
Run:
```bash
git add branding/ css/components.css header.html js/header.js MEMORY.md docs/superpowers/plans/2026-10-25-header-logo-chakra-petch-update.md
git commit -m "feat(branding): update header top-left logo to unicorn emblem with Chakra Petch typography"
```
