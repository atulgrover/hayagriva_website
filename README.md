# AgenticProfessionals.Net

> **Institutional Insolvency & Corporate Restructuring Operating System**  
> Air-gapped AES-256 local execution, statutory knowledge graphs, autonomous CIRP copilots, and accredited practitioner registries.

---

## 🏛️ Platform Architecture

`AgenticProfessionals.Net` provides an integrated operating environment for **Insolvency Professionals (IPs)**, **Registered Valuers (RVs)**, and **Corporate Restructuring Advocates**. The platform is designed around private, local-first execution to guarantee zero data exfiltration during sensitive Corporate Insolvency Resolution Processes (CIRP).

```
agentic_professionals_net/
│
├── index.html                   # Primary Single Page Application (SPA)
│                                # (Home, ChatIBC, Harness, Agents, Directories, Login)
│
├── vaults.html                  # Master Legal Vaults Catalog
│                                # (Modular production vaults, comprehensive statutory sections)
│
├── css/                         # Clean Corporate Light Theme (No Dark Mode)
│   ├── main.css                 # Core CSS variables, typography, layout containers
│   ├── components.css           # Navigation, multi-dropdowns, account modal, cards, footer
│   └── leaflet-custom.css       # Custom styling for Leaflet.js interactive maps
│
├── js/                          # Client-Side Application Logic
│   ├── app.js                   # SPA router, multi-dropdown controller, agent filters, modal
│   ├── data.js                  # Preloaded accredited professionals data & NCLT benches
│   └── directory.js             # Leaflet.js interactive map & search filtering
│
├── docs/                        # Benchmark Compliance Dossiers & Sample Reports
│   ├── FINAL_29A_COMPLIANCE_REPORT_APOGEE_ENTERPRISES.pdf
│   ├── FINAL_29A_COMPLIANCE_REPORT_APOGEE_ENTERPRISES.html
│   └── sample_reports/          # 11 Section 29A multi-bureau screening reports
│
├── scripts/                     # Developer Utilities & API Server
│   ├── server.py                # FastAPI + Uvicorn development server & static file host
│   └── setup_professionals_db.py# PostgreSQL / SQLite schema and seeder script
│
├── render.yaml                  # Infrastructure-as-Code for Render cloud deployment
├── DEPLOYMENT_INFRASTRUCTURE.md # Deployment specifications and DNS configuration
└── README.md                    # Platform documentation
```

---

## 🧭 Navigation & Core Modules

### 1. Header Navigation Tabs
- **Home** (`#home`): Institutional manifesto, sovereign air-gapped architecture, and platform overview.
- **ChatIBC** (`#chats`): Embedded LightRAG knowledge graph assistant for real-time legal queries.
- **Harness ^** (Dropdown):
  - **Haya Engine** (`#engine`): Hayagriva deterministic execution engine with local ONNX embedding inference and zero cloud telemetry.
  - **Haya Vaults** ([`vaults.html`](vaults.html)): Master catalog of 15 encrypted vector packages and statutory provision indices.
  - **Haya Models** (`#models`): Hybrid model orchestration combining frontier models with private local SLMs.
- **Agents ^** (Dropdown):
  - **Process Agents** (`#agents?type=process`): Section 29A Eligibility Screener, Avoidance & PUFE Auditor, CIRP Statutory Timelines Watcher.
  - **Reporting Agents** (`#agents?type=reporting`): NCLT Form H Assembler, Information Memorandum (IM) Generator, CoC Voting & Progress Reporter.
- **Directories ^** (Dropdown):
  - **Insolvency Professionals** (`#listing?category=ip`): Accredited IPs across all 15 NCLT benches.
  - **Registered Valuers** (`#listing?category=rv`): RVs across Land & Building, Plant & Machinery, and SFA asset classes.
  - **Corporate Lawyers** (`#listing?category=counsel`): Verified insolvency advocates and restructuring counsels.
- **Login ^** (Dropdown & Account Pill):
  - **Licenses**: Active enterprise seats, Hayagriva local IDE keys, and air-gapped vault decryption tokens.
  - **Payments**: Institutional billing tiers, payment methods, and GST tax invoices.
  - **Profile**: Verified practitioner profile, IBBI registration credentials, enrolled IPA, and DSC status.

### 2. Shared Footer Component (`footer.html` / `js/footer.js`)
- **Forums - apnet.co.in** (`https://apnet.co.in`): Community discussion forum for insolvency jurisprudence and valuation benchmarks.
- **MSME-Sahyog** (`https://hayagriva.app`): Corporate distress rescue, Pre-Pack Insolvency (PIRP), and MSME restructuring portal.
- **WhatsApp** (`https://wa.me/...`): Direct communication channel for practitioner support and peer collaboration.

---

## ⚡ Key Technical Capabilities

1. **Air-Gapped Sovereign Security**:
   - Vault data tables are encrypted with **AES-256-GCM** at rest.
   - Vector search runs on local hardware via `InLegal-SBERT` ONNX quantized models with sub-12ms latency.
   - Client case records, financial books, and Resolution Plans never touch external cloud servers.

2. **Monaco Editor Drafting Autocomplete**:
   - Direct integration into Hayagriva Desktop IDE with contextual prefix triggers:
     - `@@ibc/sec14` ➔ Inserts IBC Moratorium provision
     - `@@mca/sec230` ➔ Inserts Scheme of Arrangement statutory rules
     - `@@case/moratorium` ➔ Filters landmark judicial headnotes
     - `@@form/cirp-form-a` ➔ Inserts Public Announcement drafting template

3. **Multi-Bureau Section 29A Audit**:
   - Cross-references promoters and resolution applicants against CIBIL suit-filed records, SEBI debarments, MCA director disqualifications, and eCourts live records.

---

## 🚀 Local Development

### Option 1: Lightweight HTTP Server
```bash
# Start server in background (runs serve.py on port 8000)
./start.sh

# Stop server
./stop.sh
```
Open [http://localhost:8000/](http://localhost:8000/) in your browser.

### Option 2: Full API Server with PostgreSQL Directory
```bash
# Optional: Setup database credentials in environment
export POSTGRES_HOST=localhost
export POSTGRES_PORT=5432
export POSTGRES_USER=db
export POSTGRES_PASSWORD=your_password
export POSTGRES_DB=ibclaw_db

# Seed sample directory roster
python3 scripts/setup_professionals_db.py

# Launch FastAPI application server
python3 scripts/server.py
# Open http://localhost:8080/
```

---

## 🌐 Production Deployment

The project includes a ready-to-deploy [`render.yaml`](render.yaml) specification:

1. Push your code to your Git repository:
   ```bash
   git add .
   git commit -m "feat: configure AgenticProfessionals.Net static site"
   git push origin main
   ```
2. In the [Render Dashboard](https://dashboard.render.com), choose **New +** ➔ **Blueprint**.
3. Select this repository. Render automatically deploys the static site with SSL, custom routing, and HTTP security headers.
4. Detailed DNS instructions can be found in [`DEPLOYMENT_INFRASTRUCTURE.md`](DEPLOYMENT_INFRASTRUCTURE.md).

---

## 📄 License & Compliance

© 2026 AgenticProfessionals.Net. All rights reserved.  
Compliant with Insolvency & Bankruptcy Board of India (IBBI) guidelines and NCLT procedural rules.
