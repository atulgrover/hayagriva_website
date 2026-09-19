/**
 * AgenticProfessionals.Net - Shared Site Header Component
 * Dynamically loads header.html as the SINGLE SOURCE OF TRUTH across all pages.
 * Handles active route detection and dropdown interactivity.
 */

(function () {
  const fallbackHTML = `<!-- ======================================================================
     AgenticProfessionals.Net - Shared Site Header Component
     Brand: Agentic Professionals Network
            www.agenticprofessionals.net | www.apnet.co.in
     Tabs:
       0. Home
       1. Workbench (pipie) - Sovereign AI Workbench (Download Modal & Web Harnesses)
       2. AI Assets (lexai) - Models & Vaults (2-col mega menu)
       3. Agents - Global & Local Workers (2-col mega menu)
       4. Directories - Agentic Professionals (directory_listing.html)
       V. More - APNET Forums & MSME Sahyog
     ====================================================================== -->
<!-- ======================================================================
     Global Announcement Bar: Clean Single Line with IDE Download & Free Promo
     ====================================================================== -->
<div class="site-announcement-bar" id="site-announcement-bar">
  <div class="announcement-single-row">
    <span class="announcement-badge" style="background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);"><i
        class="fa-solid fa-gift"></i> SOVEREIGN FREEDOM</span>
    <span class="announcement-msg" style="color:#e2e8f0; font-size:0.82rem;">
      <strong>Tier 1 Sovereign IDE is 100% FREE</strong> • Fortnightly Knowledge Vault Delta Sync • Related Parties
      Report Free till 31 Dec 2026
    </span>
    <a href="#" onclick="openIdeDownloadModal(); return false;" class="announcement-cta" style="background:rgba(255,255,255,0.2); color:#fff; border:1px solid rgba(255,255,255,0.3); padding:4px 14px; border-radius:6px; font-weight:700; font-size:0.75rem; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
      📥 Download Free IDE v1.2 (150 MB) <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</div>
<header class="site-header" id="site-header">
  <div class="nav-container">

    <!-- Brand Identity (Wireframe exact match) -->
    <div class="brand-block-wireframe" id="header-brand-logo">
      <a href="index.html#home" class="brand-main-title">AGENTIC PROFESSIONALS NETWORK</a>
      <div class="brand-sub-url">
        Sovereign AI Workbench for Professionals
      </div>
    </div>

    <!-- Primary Navigation Menu -->
    <ul class="nav-menu" id="header-nav-menu">

      <!-- 0. Home Icon Link -->
      <li class="nav-item">
        <a href="index.html#home" class="nav-icon-wireframe" id="nav-home" aria-label="Home" title="Home">
          <i class="fa-solid fa-house nav-home-icon"></i>
        </a>
      </li>

      <!-- 1. Chamber Workbench - Single Column Menu (Case Management / Drafting Studio / Execution Engine) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-harness-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-workspace" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>Workbench</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">PIPIE Harness</span>
        </button>
        <div class="dropdown-menu mega-menu-1col" id="harness-dropdown-menu" style="min-width: 320px;">
          <div class="mega-grid-1col">
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-links">
                <a href="harness_haya_workbench.html" class="mega-item-wireframe" id="nav-item-harness-workbench">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-folder-open"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Case Management</span>
                    <span class="mega-item-wireframe-desc">Trial record ingestion, evidence timeline &amp; fact wiki</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="harness_haya_studio.html" class="mega-item-wireframe" id="nav-item-harness-studio">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-pen-nib"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Drafting Studio</span>
                    <span class="mega-item-wireframe-desc">Court pleadings, SC/NCLT skeletons &amp; citation checks</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="harness_haya_engine.html" class="mega-item-wireframe" id="nav-item-harness-engine">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-microchip"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Execution Engine</span>
                    <span class="mega-item-wireframe-desc">Offline legal &amp; forensic cores, local ONNX runtimes</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>

      <!-- 2. Legal Intelligence - Single Column Menu (Legal Libraries) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-lexai-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-lexai" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>Intelligence</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Legal Libraries</span>
        </button>
        <div class="dropdown-menu mega-menu-1col" id="lexai-dropdown-menu" style="min-width: 320px;">
          <div class="mega-grid-1col">
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-links">
                <a href="vaults_law.html" class="mega-item-wireframe" id="nav-item-vault-law">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Statutory Law</span>
                    <span class="mega-item-wireframe-desc">IBC, Companies Act, RERA &amp; Rules</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_precedence.html" class="mega-item-wireframe" id="nav-item-vault-precedence">
                  <div class="mega-item-icon-box icon-sky">
                    <i class="fa-solid fa-gavel"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Judicial Precedents</span>
                    <span class="mega-item-wireframe-desc">Landmark SC, NCLAT &amp; High Court rulings</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_formats.html" class="mega-item-wireframe" id="nav-item-vault-formats">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-file-invoice"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Verified Formats</span>
                    <span class="mega-item-wireframe-desc">Court forms, pleadings &amp; conveyancing</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_suites.html" class="mega-item-wireframe" id="nav-item-vault-suites">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-boxes-packing"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Practice Playbooks</span>
                    <span class="mega-item-wireframe-desc">CIRP, Liquidation &amp; PG workflows</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_contracts.html" class="mega-item-wireframe" id="nav-item-vault-contracts">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-file-shield"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Commercial Contracts</span>
                    <span class="mega-item-wireframe-desc">Clause risk analysis &amp; market benchmarks</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>

      <!-- 3. Autonomous Co-Counsel - 2-Column Mega Menu -->
      <li class="nav-item nav-item-dropdown" id="dropdown-agents-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-agents" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>Co-Counsel</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Autonomous Agents</span>
        </button>
        <div class="dropdown-menu mega-menu-2col" id="agents-dropdown-menu">
          <div class="mega-grid-2col">

            <!-- Column 1: WORKFLOW CO-COUNSEL -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-emerald"><i class="fa-solid fa-robot"></i></span>
                  <span class="mega-col-wireframe-title">WORKFLOW CO-COUNSEL</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="agents_insolvency.html" class="mega-item-wireframe" id="nav-item-agent-insolvency">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Insolvency Co-Counsel</span>
                    <span class="mega-item-wireframe-desc">CIRP timeline, §29A &amp; Form H assembly</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_legal.html" class="mega-item-wireframe" id="nav-item-agent-legal">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Litigation Co-Counsel</span>
                    <span class="mega-item-wireframe-desc">Court petitions, precedent checks &amp; strategy</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_financial.html" class="mega-item-wireframe" id="nav-item-agent-financial">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-coins"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Financial Co-Counsel</span>
                    <span class="mega-item-wireframe-desc">Suspicious transaction review &amp; valuations</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_claims.html" class="mega-item-wireframe" id="nav-item-agent-claims">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Claims Co-Counsel</span>
                    <span class="mega-item-wireframe-desc">Creditor claims audit &amp; voting shares</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_governance.html" class="mega-item-wireframe" id="nav-item-agent-governance">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-network-wired"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Governance Co-Counsel</span>
                    <span class="mega-item-wireframe-desc">MCA filings, corporate entity trees &amp; compliance</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: FORENSIC INVESTIGATORS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-blue"><i class="fa-solid fa-file-shield"></i></span>
                  <span class="mega-col-wireframe-title">FORENSIC INVESTIGATORS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="marketplace_reporting_assignment_forensics.html" class="mega-item-wireframe"
                  id="nav-item-rep-assignment">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-clipboard-check"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Assignment Forensics</span>
                    <span class="mega-item-wireframe-desc">Pre-admission audit, §65 inquest &amp; fee defense</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="marketplace_reporting_resolution_compliance.html" class="mega-item-wireframe"
                  id="nav-item-rep-resolution">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Resolution Compliance</span>
                    <span class="mega-item-wireframe-desc">Sec 29A master screening &amp; cartel detection</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="marketplace_reporting_liability_shields.html" class="mega-item-wireframe"
                  id="nav-item-rep-shields">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Liability Shields</span>
                    <span class="mega-item-wireframe-desc">Sec 32A clean slate immunity &amp; asset tracing</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 4. APNet Members - Dropdown Menu -->
      <li class="nav-item nav-item-dropdown" id="dropdown-members-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-directories" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>Community</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">IBC Ecosystem</span>
        </button>
        <div class="dropdown-menu mega-menu-1col dropdown-menu-end" id="members-dropdown-menu"
          style="right: 0; left: auto; min-width: 320px;">
          <div class="mega-grid-1col">
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-links">
                <a href="directory_listing.html" class="mega-item-wireframe" id="nav-item-dir-listing">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-address-book"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Directory Listing</span>
                    <span class="mega-item-wireframe-desc">Agentic Professionals</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="https://forums.agenticprofessionals.net" target="_blank" rel="noopener noreferrer"
                  class="mega-item-wireframe" id="nav-item-dir-forums">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-comments"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Discussion Forums</span>
                    <span class="mega-item-wireframe-desc">Practical Insights</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow"
                    style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
                <a href="https://hayagriva.app" target="_blank" rel="noopener noreferrer" class="mega-item-wireframe"
                  id="nav-item-dir-sahyog">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-handshake-angle"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Enterprise Skills</span>
                    <span class="mega-item-wireframe-desc">MSME Sahyog</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow"
                    style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>


    </ul>
  </div>
</header>
<!-- ======================================================================
     Universal Hayagriva IDE Download Modal (Mac · Windows · Linux)
     ====================================================================== -->
<div class="hayagriva-modal-backdrop" id="hayagriva-ide-modal" style="display: none;">
  <div class="hayagriva-modal-dialog">

    <!-- Modal Header -->
    <div class="hayagriva-modal-header">
      <div class="hayagriva-modal-title-group">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span class="modal-badge-promo"><i class="fa-solid fa-gift"></i> FREE PROMOTION</span>
          <span class="modal-badge-beta">BETA V1.75</span>
        </div>
        <h3 class="hayagriva-modal-title">Download Hayagriva IDE (Beta)</h3>
        <p class="hayagriva-modal-subtitle">
          Sovereign Chamber OS for Insolvency Professionals · 100% Air-Gapped &amp; Local First
        </p>
      </div>
      <button type="button" class="hayagriva-modal-close" onclick="closeIdeDownloadModal();" aria-label="Close modal">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- Step 1: Lightweight Registration Form -->
    <div id="ide-step-register" class="hayagriva-modal-body">
      <div class="modal-promo-callout">
        <div style="font-weight: 700; color: #065f46; font-size: 0.85rem; margin-bottom: 2px;">
          <i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> AS-18 Related Parties Report Included Free
        </div>
        <div style="font-size: 0.78rem; color: #047857;">
          Register once to unlock sovereign installer binaries and your complimentary Section 5(24) connected-party
          voucher valid through 31st December 2026.
        </div>
      </div>

      <form id="ide-registration-form" onsubmit="handleIdeRegistration(event);">
        <div class="modal-form-row">
          <label class="modal-label" for="reg-practitioner-name">Practitioner / Firm Name <span
              style="color:#ef4444;">*</span></label>
          <input type="text" id="reg-practitioner-name" class="modal-input"
            placeholder="e.g. Adv. Rajesh Sharma / CA Priya Verma" required />
        </div>

        <div class="modal-form-grid">
          <div class="modal-form-row">
            <label class="modal-label" for="reg-practitioner-role">Professional Category <span
                style="color:#ef4444;">*</span></label>
            <select id="reg-practitioner-role" class="modal-input" required>
              <option value="" disabled selected>Select Your Role...</option>
              <option value="ip">Insolvency Professional (IP / IRP / Liquidator)</option>
              <option value="rv">Registered Valuer (RV)</option>
              <option value="advocate">Corporate Insolvency Advocate / Litigator</option>
              <option value="auditor">Forensic Auditor / Financial Advisor</option>
            </select>
          </div>

          <div class="modal-form-row">
            <label class="modal-label" for="reg-practitioner-email">Professional Email Address <span
                style="color:#ef4444;">*</span></label>
            <input type="email" id="reg-practitioner-email" class="modal-input" placeholder="name@firm-or-chambers.com"
              required />
          </div>
        </div>

        <div class="modal-trust-notice">
          <i class="fa-solid fa-lock" style="color:#16a34a; font-size: 0.9rem; margin-top: 2px;"></i>
          <span><strong>Zero Cloud Leaks:</strong> Hayagriva IDE runs strictly on your own hardware. Your case documents
            and claims data are never transmitted to any external server.</span>
        </div>

        <div class="modal-form-actions">
          <button type="button" class="btn-modal-secondary" onclick="closeIdeDownloadModal();">Cancel</button>
          <button type="submit" class="btn-modal-primary">
            <i class="fa-solid fa-unlock-keyhole"></i> Register &amp; Unlock Downloads ➔
          </button>
        </div>
      </form>
    </div>

    <!-- Step 2: Unlocked OS Download Cards (Revealed on Register) -->
    <div id="ide-step-downloads" class="hayagriva-modal-body" style="display: none;">
      <div class="unlocked-welcome-box">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div>
            <span
              style="font-size:0.75rem; font-weight:700; color:#15803d; text-transform:uppercase; letter-spacing:0.06em;">
              <i class="fa-solid fa-circle-check"></i> Registration Verified
            </span>
            <div style="font-weight:700; color:#0f172a; font-size:0.95rem;">
              Welcome, <span id="display-user-name">Practitioner</span>!
            </div>
            <div style="font-size:0.75rem; color:#64748b;">
              Complimentary AS-18 Promo Code: <code style="color:#16a34a; font-weight:700;">PROMO-AS18-FREE-2026</code>
            </div>
          </div>
          <button type="button" onclick="editPractitionerDetails();" class="btn-edit-details">
            <i class="fa-solid fa-pen"></i> Edit Details
          </button>
        </div>
      </div>

      <div class="os-download-grid">
        <!-- macOS Apple Silicon -->
        <div class="os-card" id="card-mac-arm">
          <div class="os-card-header">
            <div class="os-icon os-apple"><i class="fa-brands fa-apple"></i></div>
            <div class="os-info">
              <div class="os-name">macOS (Apple Silicon)</div>
              <div class="os-meta">M1 · M2 · M3 · M4 · M5 (ARM64)</div>
            </div>
          </div>
          <div class="os-specs">334 MB · .dmg (Apple Silicon) · Verified</div>
          <a href="#" onclick="window.location.href='https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva.dmg'; return false;" class="btn-os-download">
            <i class="fa-solid fa-download"></i> Download .dmg
          </a>
        </div>

        <!-- macOS Intel -->
        <div class="os-card" id="card-mac-intel">
          <div class="os-card-header">
            <div class="os-icon os-apple"><i class="fa-brands fa-apple"></i></div>
            <div class="os-info">
              <div class="os-name">macOS (Intel)</div>
              <div class="os-meta">Intel Core i5/i7/i9 (x86_64)</div>
            </div>
          </div>
          <div class="os-specs">334 MB · .dmg · Universal / Rosetta</div>
          <a href="#" onclick="window.location.href='https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva.dmg'; return false;" class="btn-os-download">
            <i class="fa-solid fa-download"></i> Download .dmg
          </a>
        </div>

        <!-- Windows -->
        <div class="os-card" id="card-windows">
          <div class="os-card-header">
            <div class="os-icon os-windows"><i class="fa-brands fa-windows"></i></div>
            <div class="os-info">
              <div class="os-name">Windows 10 / 11</div>
              <div class="os-meta">64-bit Architecture (x64)</div>
            </div>
          </div>
          <div class="os-specs">272 MB · .exe Installer · Verified</div>
          <a href="#" onclick="window.location.href='https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/HayagrivaSetup.exe'; return false;" class="btn-os-download">
            <i class="fa-solid fa-download"></i> Download Setup.exe
          </a>
        </div>

        <!-- Linux AppImage (Regular Linux) -->
        <div class="os-card" id="card-linux-appimage">
          <div class="os-card-header">
            <div class="os-icon os-linux"><i class="fa-brands fa-linux"></i></div>
            <div class="os-info">
              <div class="os-name">Linux (Universal)</div>
              <div class="os-meta">Portable AppImage · All Distros</div>
            </div>
          </div>
          <div class="os-specs">355 MB · .AppImage · Verified</div>
          <a href="#" onclick="window.location.href='https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva.AppImage'; return false;" class="btn-os-download">
            <i class="fa-solid fa-download"></i> Download .AppImage
          </a>
        </div>

        <!-- Linux DEB (Debian / Ubuntu) -->
        <div class="os-card" id="card-linux-deb">
          <div class="os-card-header">
            <div class="os-icon os-linux"><i class="fa-brands fa-ubuntu"></i></div>
            <div class="os-info">
              <div class="os-name">Linux (Ubuntu / Debian)</div>
              <div class="os-meta">Native Package · Apt / Dpkg</div>
            </div>
          </div>
          <div class="os-specs">203 MB · .deb Package · Verified</div>
          <a href="#" onclick="window.location.href='https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/HayagrivaSetup.deb'; return false;" class="btn-os-download" style="background:#0f172a;">
            <i class="fa-solid fa-download"></i> Download Setup.deb
          </a>
        </div>
      </div>

      <div class="modal-requirements-footnote">
        <span><i class="fa-solid fa-circle-info" style="color:#2563eb;"></i> <strong>Hardware Requirement:</strong> 8 GB
          RAM minimum (16 GB recommended for local SLMs). 100% Offline Air-Gapped.</span>
      </div>

      <div style="display:flex; justify-content:flex-end; margin-top:16px;">
        <button type="button" class="btn-modal-secondary" onclick="closeIdeDownloadModal();">
          Close Window
        </button>
      </div>
    </div>

  </div>
</div>`;

  function applyHeader(htmlContent) {
    const mountContainer = document.getElementById('shared-header') ||
                           document.getElementById('site-header-container') ||
                           document.querySelector('site-header') ||
                           document.querySelector('header.site-header');

    if (mountContainer) {
      const temp = document.createElement('div');
      temp.innerHTML = htmlContent.trim();
      mountContainer.innerHTML = '';
      while (temp.firstChild) {
        mountContainer.appendChild(temp.firstChild);
      }
    } else {
      document.body.insertAdjacentHTML('afterbegin', htmlContent);
    }

    setupHeaderDropdowns();
    updateActiveNav();
  }

  let docListenersBound = false;
  function setupHeaderDropdowns() {
    const dropdownItems = document.querySelectorAll('.site-header .nav-item-dropdown');

    function repositionDropdown(item) {
      const menu = item.querySelector('.dropdown-menu');
      if (!menu) return;
      menu.style.transform = '';
      const rect = menu.getBoundingClientRect();
      const pad = 16;
      if (rect.right > window.innerWidth - pad) {
        const shiftRight = rect.right - (window.innerWidth - pad);
        menu.style.transform = `translateX(-${shiftRight}px)`;
      } else if (rect.left < pad) {
        const shiftLeft = pad - rect.left;
        menu.style.transform = `translateX(${shiftLeft}px)`;
      }
    }

    dropdownItems.forEach(item => {
      const toggleBtn = item.querySelector('.nav-link, .nav-link-wireframe, .nav-icon-wireframe, button');
      if (!toggleBtn) return;

      item.addEventListener('mouseenter', () => {
        repositionDropdown(item);
      });

      if (toggleBtn.dataset.headerBound === 'true') return;
      toggleBtn.dataset.headerBound = 'true';

      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const wasOpen = item.classList.contains('dropdown-open');
        closeAllDropdowns();
        if (!wasOpen) {
          item.classList.add('dropdown-open');
          toggleBtn.setAttribute('aria-expanded', 'true');
          repositionDropdown(item);
        }
      });
    });

    if (!docListenersBound) {
      docListenersBound = true;
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-header .nav-item-dropdown')) {
          closeAllDropdowns();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeAllDropdowns();
        }
      });

      window.addEventListener('resize', () => {
        closeAllDropdowns();
      });
    }

    document.querySelectorAll('.site-header .dropdown-item, .site-header .mega-item-wireframe, .site-header .dropdown-wireframe-item').forEach(link => {
      if (link.dataset.headerBound === 'true') return;
      link.dataset.headerBound = 'true';

      link.addEventListener('click', () => {
        closeAllDropdowns();
      });
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.site-header .nav-item-dropdown').forEach(item => {
      item.classList.remove('dropdown-open');
      const menu = item.querySelector('.dropdown-menu');
      if (menu) menu.style.transform = '';
      const toggleBtn = item.querySelector('.nav-link, .nav-link-wireframe, .nav-icon-wireframe, button');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    });
  }
  window.closeHeaderDropdowns = closeAllDropdowns;

  function updateActiveNav() {
    document.querySelectorAll('.site-header .nav-link, .site-header .dropdown-item, .site-header .mega-item-wireframe, .site-header .dropdown-wireframe-item, .site-header .nav-icon-wireframe').forEach(el => {
      el.classList.remove('active');
      el.style.backgroundColor = '';
      el.style.color = '';
      el.style.fontWeight = '';
    });

    const path = window.location.pathname.split('/').pop() || 'index.html';
    const hash = window.location.hash || '';

    if (path === '' || path === 'index.html') {
      if (hash.startsWith('#home') || hash === '') {
        setActive('nav-home');
      } else if (hash.startsWith('#chats') || hash.startsWith('#workspace')) {
        setActive('nav-workspace');
      } else if (hash.startsWith('#agents_assets') || hash.startsWith('#models') || hash.startsWith('#vaults') || hash.startsWith('#lexai')) {
        setActive('nav-lexai');
      } else if (hash.startsWith('#listing') || hash.startsWith('#directories')) {
        setActive('nav-directories');
      } else if (hash.startsWith('#agents') || hash.startsWith('#bazaar') || hash.startsWith('#reports') || hash.startsWith('#process') || hash.startsWith('#engine')) {
        setActive('nav-agents');
      }
    } else if (path === 'index.html#download') {
      setActive('nav-workspace');
    } else if (path === 'pipie_assets.html') {
      setActive('nav-lexai');
    } else if (path === 'directory_listing.html') {
      setActive('nav-directories', 'nav-item-dir-listing');
    } else if (path === 'models_domain_slms.html') {
      setActive('nav-lexai', 'nav-item-model-slms');
    } else if (path === 'models_embeddings.html') {
      setActive('nav-lexai', 'nav-item-model-embeddings');
    } else if (path === 'models_rerankers.html') {
      setActive('nav-lexai', 'nav-item-model-rerankers');
    } else if (path === 'vaults_law.html') {
      setActive('nav-lexai', 'nav-item-vault-law');
    } else if (path === 'vaults_precedence.html') {
      setActive('nav-lexai', 'nav-item-vault-precedence');
    } else if (path === 'vaults_formats.html') {
      setActive('nav-lexai', 'nav-item-vault-formats');
    } else if (path === 'vaults_suites.html') {
      setActive('nav-lexai', 'nav-item-vault-suites');
    } else if (path === 'vaults_contracts.html') {
      setActive('nav-lexai', 'nav-item-vault-contracts');
    } else if (path === 'agents_insolvency.html') {
      setActive('nav-agents', 'nav-item-agent-insolvency');
    } else if (path === 'agents_legal.html') {
      setActive('nav-agents', 'nav-item-agent-legal');
    } else if (path === 'agents_financial.html') {
      setActive('nav-agents', 'nav-item-agent-financial');
    } else if (path === 'agents_claims.html') {
      setActive('nav-agents', 'nav-item-agent-claims');
    } else if (path === 'agents_governance.html') {
      setActive('nav-agents', 'nav-item-agent-governance');
    } else if (path === 'agents_process_agents.html') {
      setActive('nav-agents', 'nav-item-agent-insolvency');
    } else if (path === 'agents_reporting_agents.html') {
      setActive('nav-agents', 'nav-item-agent-insolvency');
    } else if (path === 'marketplace_reporting_assignment_forensics.html') {
      setActive('nav-agents', 'nav-item-rep-assignment');
    } else if (path === 'marketplace_reporting_resolution_compliance.html') {
      setActive('nav-agents', 'nav-item-rep-resolution');
    } else if (path === 'marketplace_reporting_liability_shields.html') {
      setActive('nav-agents', 'nav-item-rep-shields');
    } else if (path === 'harness_haya_engine.html' || path === 'harness_haya_vaults.html' || path === 'harness_haya_models.html') {
      setActive('nav-lexai');
    } else if (path === 'chatroom.html') {
      setActive('nav-workspace');
    } else if (path === 'pricing.html') {
      setActive('nav-pricing');
    } else if (path === 'resolutionbazaar.html') {
      setActive('nav-bazaar');
    } else if (path === 'directories_ip.html' || path === 'directories_rv.html' || path === 'directories_cl.html') {
      setActive('nav-directories');
    }
  }

  function setActive(navId, dropdownItemId) {
    if (navId) {
      const navEl = document.getElementById(navId);
      if (navEl) navEl.classList.add('active');
    }
    if (dropdownItemId) {
      const dropEl = document.getElementById(dropdownItemId);
      if (dropEl) {
        dropEl.classList.add('active');
        dropEl.style.backgroundColor = '#f1f5f9';
        dropEl.style.color = '#1e40af';
        dropEl.style.fontWeight = '600';
      }
    }
  }

  window.addEventListener('hashchange', () => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    if (path === '' || path === 'index.html') {
      updateActiveNav();
    }
  });

  function init() {
    // 1. Immediately apply fallback HTML for 0ms render latency across all pages
    applyHeader(fallbackHTML);

    // 2. If running on a web server, fetch header.html directly with cache busting to synchronize updates
    if (window.location.protocol.startsWith('http')) {
      fetch('header.html?v=' + Date.now())
        .then(res => {
          if (!res.ok) throw new Error('HTTP status ' + res.status);
          return res.text();
        })
        .then(html => {
          const currentHeader = document.querySelector('header.site-header');
          if (currentHeader && currentHeader.outerHTML.trim() !== html.trim()) {
            applyHeader(html);
          }
        })
        .catch(() => {
          // fallback already active
        });
    }
  }

  // Execute immediately if mount point exists in DOM, else wait for DOMContentLoaded
  if (document.getElementById('shared-header') || document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  // =========================================================================
  // Universal Hayagriva IDE Download Modal Controller
  // =========================================================================
  function detectClientOS() {
    const ua = navigator.userAgent || '';
    if (/Macintosh|Mac OS X/.test(ua)) {
      return (navigator.userAgentData?.architecture === 'arm' || /ARM/.test(ua) || (navigator.maxTouchPoints > 0 && !window.MSStream)) ? 'mac-arm' : 'mac-intel';
    }
    if (/Windows/.test(ua)) return 'windows';
    if (/Linux/.test(ua)) return 'linux-appimage';
    return 'mac-arm';
  }

  window.openIdeDownloadModal = function() {
    const modal = document.getElementById('hayagriva-ide-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Highlight detected OS card
    const detected = detectClientOS();
    ['mac-arm', 'mac-intel', 'windows', 'linux-appimage', 'linux-deb'].forEach(function(os) {
      const card = document.getElementById('card-' + os);
      if (card) {
        if (os === detected) {
          card.classList.add('detected-os');
        } else {
          card.classList.remove('detected-os');
        }
      }
    });

    // Check if user is already registered in this browser
    const storedUser = localStorage.getItem('hayagriva_registered_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        const nameEl = document.getElementById('display-user-name');
        if (nameEl) nameEl.textContent = user.name || 'Practitioner';
        showDownloadsStep();
      } catch (e) {
        showRegisterStep();
      }
    } else {
      showRegisterStep();
    }
  };

  window.closeIdeDownloadModal = function() {
    const modal = document.getElementById('hayagriva-ide-modal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  function showRegisterStep() {
    const regStep = document.getElementById('ide-step-register');
    const dlStep = document.getElementById('ide-step-downloads');
    if (regStep) regStep.style.display = 'block';
    if (dlStep) dlStep.style.display = 'none';
  }

  function showDownloadsStep() {
    const regStep = document.getElementById('ide-step-register');
    const dlStep = document.getElementById('ide-step-downloads');
    if (regStep) regStep.style.display = 'none';
    if (dlStep) dlStep.style.display = 'block';
  }

  window.handleIdeRegistration = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById('reg-practitioner-name')?.value?.trim();
    const role = document.getElementById('reg-practitioner-role')?.value;
    const email = document.getElementById('reg-practitioner-email')?.value?.trim();

    if (!name || !role || !email) {
      alert('Please provide your Name, Professional Category, and Email to unlock downloads.');
      return;
    }

    // Persist registration in local storage
    const userData = { name: name, role: role, email: email, registeredAt: new Date().toISOString() };
    localStorage.setItem('hayagriva_registered_user', JSON.stringify(userData));

    const nameEl = document.getElementById('display-user-name');
    if (nameEl) nameEl.textContent = name;

    showDownloadsStep();
  };

  window.editPractitionerDetails = function() {
    showRegisterStep();
  };

  window.simulateDownload = function(os) {
    const urls = {
      'mac-arm': 'https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva.dmg',
      'mac-intel': 'https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva.dmg',
      'windows': 'https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/HayagrivaSetup.exe',
      'linux': 'https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva.AppImage'
    };
    const targetUrl = urls[os] || urls['mac-arm'];
    window.location.href = targetUrl;
  };

  // Close modal on click outside dialog
  document.addEventListener('click', function(e) {
    const modal = document.getElementById('hayagriva-ide-modal');
    if (modal && modal.style.display === 'flex' && e.target === modal) {
      window.closeIdeDownloadModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.closeIdeDownloadModal();
    }
  });

  // Auto-open modal if URL hash is #download
  if (window.location.hash === '#download' || window.location.search.includes('download=1')) {
    setTimeout(function() {
      window.openIdeDownloadModal();
    }, 300);
  }

})();
