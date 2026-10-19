# Unified Authentication, Single Sign-On (SSO) & Harness Direct JWT Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unify the fragmented forms on the AgenticProfessionals website into a single practitioner account entry point, replace manual license key copying with direct Harness desktop login to fetch and cache a signed JWT, and enable zero-friction SSO across the Website, LightRAG Chat, and Admin-Portal.

---

## 1. System Architecture Overview

```
                               ┌──────────────────────────────────────────────┐
                               │           ADMIN-PORTAL NEON DB               │
                               │        (app-apnet-net.onrender.com)          │
                               │ ──────────────────────────────────────────── │
                               │ • users (id, email, password_hash, role)     │
                               │ • profiles (name, firm, city, ibbi_reg_no)   │
                               │ • subscriptions & active seat entitlements   │
                               └──────────────────────┬───────────────────────┘
                                                      │
                                           Issues Signed Auth JWT
                                 (Claims: user_id, email, role, tier, exp)
                                                      │
                  ┌───────────────────────────────────┼───────────────────────────────────┐
                  ▼                                   ▼                                   ▼
    ┌───────────────────────────┐       ┌───────────────────────────┐       ┌───────────────────────────┐
    │     HAYAGRIVA WEBSITE     │       │   LIGHTRAG (CHATS SUBDOM) │       │     HAYAGRIVA HARNESS     │
    │   (agenticprofessionals)  │       │(chats.agenticprofessionals│       │       (Desktop App)       │
    │ ───────────────────────── │       │ ───────────────────────── │       │ ───────────────────────── │
    │ • 1 Unified Auth Modal    │       │ • Live HTTPS Workspace    │       │ • Direct Harness login to │
    │   (Login / Register)      │       │ • Auto-authenticated via  │       │   Admin-Portal            │
    │ • Unlocks Controller DL   │       │   LIGHTRAG-API-TOKEN      │       │ • Caches signed JWT for   │
    │ • Community auto-member   │       │ • Shared parent domain SSO│       │   100% offline air-gap    │
    └───────────────────────────┘       └───────────────────────────┘       └───────────────────────────┘
```

---

## 2. File Structure & Responsibilities

### Existing Files Modified:
- [header.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/header.html):
  - Consolidate `#login-account-modal`, `#hayagriva-ide-modal` (Download Controller), and `#directory-add-me-modal` into a clean, unified modal component (`#unified-auth-modal`).
  - Wire all primary CTAs ("Download Controller", "Join Now", "Chamber Login") into this unified auth gate.
  - Remove legacy license-copying snippets.
- [js/header.js](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/js/header.js):
  - Add unified auth state management (`getStoredAuth()`, `setStoredAuth(token, user)`, `clearStoredAuth()`).
  - Keep header UI in sync with login status (showing practitioner name and avatar when logged in).
- [chatroom.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/chatroom.html):
  - Connect "Chat Now" CTA to automatically forward or inject `LIGHTRAG-API-TOKEN` so users never see an unauthenticated screen.
- [harness_haya_workbench.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/harness_haya_workbench.html):
  - Update workbench UI representation to illustrate the direct "Sign In to Activate" and JWT-cached air-gapped status instead of legacy 32-character license keys.
- [directory_listing.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/directory_listing.html):
  - Connect "Join Now" button to the unified registration gate, automatically pre-filling user data if already signed in.

### New / Helper Files Created:
- `js/auth.js`:
  - Core clientside SSO & Auth SDK handling login, registration, token refresh, localStorage persistence, and dispatching `auth:state-change` events.
- `docs/HARNESS_JWT_SPEC.md`:
  - Technical specification for the desktop Electron/Tauri Harness client outlining the exact JWT payload structure, public key verification algorithm for offline use, and storage recommendations (OS Keychain).

---

## 3. Tasks Breakdown

### Task 1: Design & Implement Unified Auth State Management (`js/auth.js`)
- [ ] Create `js/auth.js` with standard session management functions:
  - `auth.login(email, password)`
  - `auth.register(userData)`
  - `auth.logout()`
  - `auth.getToken()`
  - `auth.getUser()`
  - `auth.isAuthenticated()`
- [ ] Implement seamless sync between `localStorage.getItem('auth_token')` and `localStorage.getItem('LIGHTRAG-API-TOKEN')`.
- [ ] Include mock/fallback support for local development if the remote Render API is temporarily sleeping or unreachable.
- [ ] Test auth state toggling in browser console to verify tokens and user state persist across page reloads.

### Task 2: Consolidate Website Modals in `header.html`
- [ ] Remove the redundant form duplication between `#hayagriva-ide-modal`, `#directory-add-me-modal`, and `#login-account-modal`.
- [ ] Build a sleek, modern `#unified-auth-modal` with two clean tabs:
  - **Tab 1: Sign In** (Email + Password ➔ Instant unlock).
  - **Tab 2: Quick Register** (Full Name, Category [IP/Valuer/Advocate], Professional Email, Password).
- [ ] Configure context-aware modal titles & actions:
  - When opened via **"Download Controller"**: Subtitle reads *"Sign in or register to unlock instant Mac, Windows & Linux downloads."* On success, reveals OS download cards immediately.
  - When opened via **"Join Community"**: Subtitle reads *"Create your accredited practitioner profile."*
  - When opened via **"Chamber Login"**: Subtitle reads *"Access your unified chamber & workspace."*
- [ ] Update `js/header.js` to ensure the shared header initializes the unified modal listeners properly on all pages.

### Task 3: Bridge Single Sign-On to LightRAG Chat (`chatroom.html`)
- [ ] In `chatroom.html`, update the "Chat Now" CTA handler:
  - Check if the user is authenticated via `auth.isAuthenticated()`.
  - If authenticated: Ensure `LIGHTRAG-API-TOKEN` is active in `localStorage` and launch the LightRAG workspace directly.
  - If unauthenticated: Open the `#unified-auth-modal` with a contextual prompt: *"Sign in to consult Co-Counsel & access precedent knowledge graphs."*
- [ ] Upon successful sign-in, seamlessly redirect the user to the chat workspace without requiring an additional click or credentials.

### Task 4: Harness Direct JWT Activation Specification (`docs/HARNESS_JWT_SPEC.md`)
- [ ] Document the exact handshake protocol between Hayagriva Harness and Admin-Portal:
  1. **Online Handshake:** Harness calls `POST /api/auth/login` to obtain the signed JWT.
  2. **Claims Structure:** `user_id`, `name`, `email`, `role`, `tier`, `features`, `iat`, `exp` (30-day lease: `iat + 30 days`).
  3. **Silent Lease Extension:** When internet connectivity is detected, Harness silently pings `POST /api/auth/refresh` to roll the 30-day window forward.
  4. **Local Secure Storage:** Harness persists the JWT securely in OS Keychain / encrypted SQLite storage.
  5. **100% Offline Air-Gap Verification:** Harness embeds the RS256/Ed25519 public key to verify token signature and expiry offline. Runs without network calls in courtrooms.
  6. **Directory Status Flag:** Downloader records default to `is_directory_listed: false` until IBBI registration number and City are added to earn the accredited map badge.
- [ ] Update `harness_haya_workbench.html` and modal documentation to reflect this modern JWT flow rather than legacy license keys.

### Task 5: End-to-End Verification Across All Pages
- [ ] Verify homepage [index.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/index.html): Clicking "Download Controller" opens the unified modal; entering details unlocks the download links and saves user credentials.
- [ ] Verify [harness_haya_workbench.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/harness_haya_workbench.html): Confirm consistent download triggers and responsive layout.
- [ ] Verify [directory_listing.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/directory_listing.html): Confirm "Join Now" leverages the unified profile.
- [ ] Verify [chatroom.html](file:///Users/atulgrover/Desktop/HAYAGRIVA%20WEBSITE/chatroom.html): Confirm seamless LightRAG token handoff.
- [ ] Run visual and functional checks using the browser tool.
