# AgenticProfessionals.Net — Deployment & Infrastructure Blueprint

> **Repository Root:** `/Users/atulgrover/Desktop/agentic_professionals_net/`  
> **Deployment Platform:** Render (render.com) or any static web host (Cloudflare Pages / Vercel / Netlify / AWS S3 + CloudFront)  
> **Architecture:** Single Page Application (SPA) + Static Master Catalog + Documentation  
> **Target Domains:** `agenticprofessionals.net` (Primary) | `agenticprofessionals.com` | `agenticprofessionals.in`

---

## 1. Production Architecture Overview

```
                         GITHUB REPOSITORY
               (e.g., github.com/atulgrover/agentic_professionals_net)
                                     │
                                     ▼
                          RENDER STATIC SERVICE
                     Name: agentic-professionals
                     Root Directory: .
                     Publish Directory: .
                     Build Command: (None required)
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
CORE APPLICATION              MASTER CATALOG                BENCHMARK DOSSIERS
/index.html                   /vaults.html                  /docs/
- Home                        - 15 AES-256 Vaults           - Section 29A Dossiers
- ChatIBC (LightRAG)          - 38,500+ Provisions          - Multi-Bureau PDFs
- Haya Engine / Models        - Monaco IDE Triggers         - Apogee Compliance
- CIRP Agents (Process/Rep)   - JSON Metadata Export
- Accredited Directories
- Licensing / Account Modal
                                     │
                                     ▼
                            AUTO SSL & CDN EDGE
                      (Global Anycast CDN + Let's Encrypt)
                                     │
                                     ▼
                            CUSTOM DOMAIN
                      https://agenticprofessionals.net
```

---

## 2. Infrastructure as Code (`render.yaml`)

The repository includes a root `render.yaml` defining security headers and routes:

```yaml
services:
  - type: web
    name: agentic-professionals
    env: static
    rootDir: .
    buildCommand: ""
    staticPublishPath: .
    routes:
      - type: rewrite
        source: /vaults
        destination: /vaults.html
      - type: rewrite
        source: /docs/*
        destination: /docs/*
    headers:
      - path: /*
        name: X-Frame-Options
        value: SAMEORIGIN
      - path: /*
        name: X-Content-Type-Options
        value: nosniff
      - path: /*
        name: Strict-Transport-Security
        value: max-age=31536000; includeSubDomains
      - path: /*
        name: Referrer-Policy
        value: strict-origin-when-cross-origin
```

---

## 3. Deployment Step-by-Step

### Step A: Initialize or Update Git Repository
Inside `/Users/atulgrover/Desktop/agentic_professionals_net/`:

```bash
git init
git add .
git commit -m "feat: complete AgenticProfessionals.Net application structure"
git branch -M main
git remote add origin https://github.com/<your-org>/agentic_professionals_net.git
git push -u origin main
```

### Step B: Connect to Render
1. Log in to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** ➔ **Blueprint**.
3. Connect your `agentic_professionals_net` repository.
4. Render detects `render.yaml` and sets up the `agentic-professionals` service.
5. Click **Apply**.

---

## 4. Custom Domain & DNS Configuration

In your DNS registrar (GoDaddy, Cloudflare, Namecheap, Google Domains):

| Record Type | Host / Name | Value / Destination | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `agentic-professionals.onrender.com` | Automatic / 300 |
| **ANAME / ALIAS / A** | `@` (apex) | `216.24.57.1` (or Render provided IP) | Automatic / 300 |

Render automatically provisions a dedicated **Let's Encrypt SSL/TLS Certificate** for both `agenticprofessionals.net` and `www.agenticprofessionals.net`.

---

## 5. Security & Air-Gapped Guarantees

- **Statutory Vault Data**: Vault JSON and vector indices are static assets downloaded to the practitioner's browser or local Hayagriva Desktop IDE installation. No user search terms or CIRP matters are logged or sent to external servers.
- **Client-Side Routing**: The application router (`js/app.js`) handles deep-linking without sending routing state to a server.
- **Strict Headers**: HSTS, nosniff, and SAMEORIGIN prevent cross-site framing and protocol downgrade attacks.
