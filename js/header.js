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
            <!-- 1. HARNESS Dropdown (3 Columns: Vaults, Agents, Models) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-harness-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-harness" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>HARNESS</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Sovereign AI Stack</span>
        </button>
        <div class="dropdown-menu mega-menu-3col" id="harness-dropdown-menu">
          <div class="mega-grid-3col">

            <!-- Column 1: Vaults -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-teal"><i class="fa-solid fa-vault"></i></span>
                  <span class="mega-col-wireframe-title">VAULTS</span>
                </div>
              </div>
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
                    <span class="mega-item-wireframe-name">Process Playbooks</span>
                    <span class="mega-item-wireframe-desc">CIRP, Liquidation &amp; PG workflows</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: Agents -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-emerald"><i class="fa-solid fa-robot"></i></span>
                  <span class="mega-col-wireframe-title">AGENTS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="chatroom.html" class="mega-item-wireframe" id="nav-item-agent-chat">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-comments"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Chat Agent</span>
                    <span class="mega-item-wireframe-desc">Real-time legal reasoning &amp; assistance</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="harness_haya_studio.html" class="mega-item-wireframe" id="nav-item-agent-drafting">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-pen-nib"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Drafting Agent</span>
                    <span class="mega-item-wireframe-desc">Court pleadings, petitions &amp; skeletons</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_claims.html" class="mega-item-wireframe" id="nav-item-agent-verification">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Verification Agent</span>
                    <span class="mega-item-wireframe-desc">Statutory audits, claims &amp; compliance</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 3: Models -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-blue"><i class="fa-solid fa-microchip"></i></span>
                  <span class="mega-col-wireframe-title">MODELS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="models_domain_slms.html#legal" class="mega-item-wireframe" id="nav-item-model-legal">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-brain"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Haya-Legal</span>
                    <span class="mega-item-wireframe-desc">Sovereign 2.9B legal core for chambers</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="models_domain_slms.html#finance" class="mega-item-wireframe" id="nav-item-model-finance">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-coins"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Haya-Finance</span>
                    <span class="mega-item-wireframe-desc">Forensic audit &amp; valuation domain core</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 2. BACK-OFFICE Dropdown (3 Columns: Reports, Services, Advisory) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-turbine-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-turbine" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>BACK-OFFICE</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Execution Engine</span>
        </button>
        <div class="dropdown-menu mega-menu-3col" id="turbine-dropdown-menu">
          <div class="mega-grid-3col">

            <!-- Column 1: Reports -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-file-shield"></i></span>
                  <span class="mega-col-wireframe-title">REPORTS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="marketplace_reporting_assignment_forensics.html" class="mega-item-wireframe" id="nav-item-rep-sec65">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-clipboard-check"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Section 65</span>
                    <span class="mega-item-wireframe-desc">Pre-admission audit &amp; §65 inquest</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="marketplace_reporting_resolution_compliance.html" class="mega-item-wireframe" id="nav-item-rep-sec29a">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Section 29A</span>
                    <span class="mega-item-wireframe-desc">Sec 29A master screening &amp; cartel check</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="marketplace_reporting_liability_shields.html" class="mega-item-wireframe" id="nav-item-rep-sec36">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Section 36</span>
                    <span class="mega-item-wireframe-desc">Liquidation estate &amp; liability shields</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: Services -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-amber"><i class="fa-solid fa-handshake"></i></span>
                  <span class="mega-col-wireframe-title">SERVICES</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="agents_claims.html" class="mega-item-wireframe" id="nav-item-srv-claims">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Claim Prep</span>
                    <span class="mega-item-wireframe-desc">Creditor claim collation &amp; verification</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="resolutionbazaar.html" class="mega-item-wireframe" id="nav-item-srv-plan">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-file-signature"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Plan Prep</span>
                    <span class="mega-item-wireframe-desc">Resolution plan vetting &amp; feasibility</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="harness_haya_vaults.html" class="mega-item-wireframe" id="nav-item-srv-dataroom">
                  <div class="mega-item-icon-box icon-sky">
                    <i class="fa-solid fa-database"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Dataroom</span>
                    <span class="mega-item-wireframe-desc">Virtual dataroom &amp; IM management</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 3: Advisory -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-rose"><i class="fa-solid fa-user-tie"></i></span>
                  <span class="mega-col-wireframe-title">ADVISORY</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="agents_insolvency.html" class="mega-item-wireframe" id="nav-item-adv-process">
                  <div class="mega-item-icon-box icon-indigo">
                    <i class="fa-solid fa-compass"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Process Advice</span>
                    <span class="mega-item-wireframe-desc">CIRP statutory timelines &amp; CoC guide</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_legal.html" class="mega-item-wireframe" id="nav-item-adv-legal">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-gavel"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Legal Advice</span>
                    <span class="mega-item-wireframe-desc">Court petitions &amp; NCLT litigation</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 3. NETWORK Dropdown (Directory Listing, Discussion Forums, Enterprise Training) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-network-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-network" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>NETWORK</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">IBC Ecosystem</span>
        </button>
        <div class="dropdown-menu mega-menu-1col dropdown-menu-end" id="network-dropdown-menu"
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
                    <span class="mega-item-wireframe-desc">Accredited IPs, Valuers &amp; Advocates</span>
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
                    <span class="mega-item-wireframe-desc">Peer jurisprudence &amp; practical benchmarks</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow"
                    style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
                <a href="https://hayagriva.app" target="_blank" rel="noopener noreferrer" class="mega-item-wireframe"
                  id="nav-item-dir-training">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Enterprise Training</span>
                    <span class="mega-item-wireframe-desc">MSME Sahyog &amp; practitioner upskilling</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow"
                    style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>

      <!-- 4. Download Harness CTA Button -->
      <li class="nav-item nav-item-cta" id="nav-cta-download-wrapper">
        <a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="nav-btn-download-harness" id="btn-download-harness">
          <span>DOWNLOAD HARNESS</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
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
</div>
<div class="hayagriva-modal-backdrop" id="directory-add-me-modal" style="display: none; z-index: 100000;">
  <div class="hayagriva-modal-dialog" style="max-width: 650px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden;">

    <!-- Modal Header -->
    <div class="hayagriva-modal-header" style="flex-shrink: 0;">
      <div class="hayagriva-modal-title-group">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span class="modal-badge-promo" style="background: #eff6ff; color: #1d4ed8; border-color: #bfdbfe;">
            <i class="fa-solid fa-address-card"></i> ACCREDITED DIRECTORY
          </span>
          <span class="modal-badge-beta" style="background: #f0fdf4; color: #15803d; border-color: #bbf7d0;">
            MODERATED INTAKE
          </span>
        </div>
        <h3 class="hayagriva-modal-title">Apply to Join National Directory</h3>
        <p class="hayagriva-modal-subtitle">
          Submit your credentials for IBBI &amp; Bar verification. Approved profiles are featured on the APNET map.
        </p>
      </div>
      <button type="button" class="hayagriva-modal-close" onclick="closeAddMeModal();" aria-label="Close modal">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- Step 1: Registration Form -->
    <div id="add-me-form-step" class="hayagriva-modal-body" style="overflow-y: auto; padding: 20px 24px;">
      <div class="modal-promo-callout" style="margin-bottom: 16px; background: #f8fafc; border-color: #e2e8f0;">
        <div style="font-weight: 700; color: #0f172a; font-size: 0.85rem; margin-bottom: 2px;">
          <i class="fa-solid fa-shield-halved" style="color: #2563eb;"></i> IBBI Credential Verification &amp; Moderation
        </div>
        <div style="font-size: 0.78rem; color: #475569;">
          To maintain directory integrity, all applications are audited by registry administration. Your dossier will be delivered to <strong>agenticprofessionals@gmail.com</strong> for approval.
        </div>
      </div>

      <form id="directory-add-me-form" onsubmit="handleDirectoryAddMe(event);">
        <!-- Row 1: Name & Role -->
        <div class="modal-form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
          <div class="modal-form-row">
            <label class="modal-label" for="addme-name" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              Full Name (with Prefix) <span style="color:#ef4444;">*</span>
            </label>
            <input type="text" id="addme-name" class="modal-input" placeholder="e.g. IP Rajesh Sharma / Adv. Priya Verma" required />
          </div>

          <div class="modal-form-row">
            <label class="modal-label" for="addme-category" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              Professional Category <span style="color:#ef4444;">*</span>
            </label>
            <select id="addme-category" class="modal-input" required>
              <option value="ip">Insolvency Professional (IP)</option>
              <option value="rv">Registered Valuer (RV)</option>
              <option value="counsel">Restructuring Advocate / Counsel</option>
            </select>
          </div>
        </div>

        <!-- Row 2: Reg No & Firm -->
        <div class="modal-form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
          <div class="modal-form-row">
            <label class="modal-label" for="addme-regno" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              IBBI / Bar Registration No <span style="color:#ef4444;">*</span>
            </label>
            <input type="text" id="addme-regno" class="modal-input" placeholder="e.g. IBBI/IPA-002/IP-N00128/..." required />
          </div>

          <div class="modal-form-row">
            <label class="modal-label" for="addme-firm" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              Firm / Practice / Chamber Name <span style="color:#ef4444;">*</span>
            </label>
            <input type="text" id="addme-firm" class="modal-input" placeholder="e.g. Resolution Advisors LLP" required />
          </div>
        </div>

        <!-- Row 3: City & Sector/Address -->
        <div class="modal-form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
          <div class="modal-form-row">
            <label class="modal-label" for="addme-city" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              City <span style="color:#ef4444;">*</span>
            </label>
            <select id="addme-city" class="modal-input" required onchange="handleCityChange(this.value);">
              <option value="Chandigarh">Chandigarh</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Cuttack">Cuttack</option>
              <option value="Kochi">Kochi</option>
              <option value="Indore">Indore</option>
              <option value="Allahabad">Allahabad</option>
              <option value="Guwahati">Guwahati</option>
              <option value="Amravati">Amravati</option>
            </select>
          </div>

          <div class="modal-form-row">
            <label class="modal-label" for="addme-address" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              Office Address / Sector <span style="color:#ef4444;">*</span>
            </label>
            <input type="text" id="addme-address" class="modal-input" placeholder="e.g. Sector 18, Chandigarh" required />
          </div>
        </div>

        

        <!-- Row 5: Email & Phone -->
        <div class="modal-form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
          <div class="modal-form-row">
            <label class="modal-label" for="addme-email" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              Official Email <span style="color:#ef4444;">*</span>
            </label>
            <input type="email" id="addme-email" class="modal-input" placeholder="practitioner@firm.in" required />
          </div>

          <div class="modal-form-row">
            <label class="modal-label" for="addme-phone" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
              Phone Number <span style="color:#ef4444;">*</span>
            </label>
            <input type="tel" id="addme-phone" class="modal-input" placeholder="+91 98765 43210" required />
          </div>
        </div>

        <!-- Row 6: Specialization -->
        <div class="modal-form-row" style="margin-bottom: 16px;">
          <label class="modal-label" for="addme-specialization" style="display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 4px;">
            Key Practice Areas &amp; Specializations <span style="color:#ef4444;">*</span>
          </label>
          <input type="text" id="addme-specialization" class="modal-input" placeholder="e.g. Corporate Insolvency (CIRP), Pre-packaged PPIRP, Section 29A Audits" required />
        </div>

        <div class="modal-form-actions" style="display: flex; justify-content: flex-end; gap: 10px; padding-top: 12px; border-top: 1px solid #e2e8f0;">
          <button type="button" class="btn-modal-secondary" onclick="closeAddMeModal();">Cancel</button>
          <button type="submit" id="addme-submit-btn" class="btn-modal-primary" style="background: #2563eb; color: #fff; border: none; border-radius: 8px; padding: 8px 18px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-paper-plane"></i> Submit Application
          </button>
        </div>
      </form>
    </div>

    <!-- Step 2: Confirmation / Success Step -->
    <div id="add-me-success-step" class="hayagriva-modal-body" style="display: none; padding: 28px 24px; text-align: center; overflow-y: auto;">
      <div style="width: 56px; height: 56px; background: #ecfdf5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; border: 2px solid #a7f3d0;">
        <i class="fa-solid fa-check" style="color: #059669; font-size: 24px;"></i>
      </div>
      <h3 style="font-size: 1.2rem; font-weight: 800; color: #0f172a; margin-bottom: 6px;">Application Dispatched for Audit</h3>
      <p style="color: #475569; font-size: 0.85rem; max-width: 520px; margin: 0 auto 16px; line-height: 1.5;">
        Your accreditation dossier has been forwarded to <strong>agenticprofessionals@gmail.com</strong>.
        Once the registry administrator audits and approves your IBBI credentials, your profile will be added to the live directory and map coordinates.
      </p>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; max-width: 540px; margin: 0 auto 16px; text-align: left;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Registry JSON Record</span>
          <button type="button" onclick="copyAddMeJson();" id="btn-copy-json" style="background: #e2e8f0; border: none; border-radius: 4px; padding: 3px 8px; font-size: 0.72rem; font-weight: 600; cursor: pointer; color: #334155;">
            <i class="fa-regular fa-copy"></i> Copy JSON
          </button>
        </div>
        <pre id="addme-json-preview" style="font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #0f172a; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; max-height: 140px; overflow-y: auto; margin: 0; white-space: pre-wrap; word-break: break-all;"></pre>
      </div>

      <div style="display: flex; justify-content: center; gap: 10px;">
        <button type="button" class="btn-modal-secondary" onclick="closeAddMeModal();">
          Close Window
        </button>
      </div>
    </div>

  </div>
</div>
`;

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
      } else if (hash.startsWith('#harness') || hash.startsWith('#workspace') || hash.startsWith('#models') || hash.startsWith('#vaults')) {
        setActive('nav-harness');
      } else if (hash.startsWith('#turbine') || hash.startsWith('#reports') || hash.startsWith('#services') || hash.startsWith('#advisory') || hash.startsWith('#bazaar')) {
        setActive('nav-turbine');
      } else if (hash.startsWith('#network') || hash.startsWith('#directories') || hash.startsWith('#listing') || hash.startsWith('#community')) {
        setActive('nav-network');
      }
    } else if (path === 'index.html#download') {
      setActive('nav-harness');
    } else if (path === 'pipie_assets.html') {
      setActive('nav-harness');
    } else if (path === 'directory_listing.html' || path === 'directories_ip.html' || path === 'directories_rv.html' || path === 'directories_cl.html') {
      setActive('nav-network', 'nav-item-dir-listing');
    } else if (path === 'vaults_law.html') {
      setActive('nav-harness', 'nav-item-vault-law');
    } else if (path === 'vaults_formats.html') {
      setActive('nav-harness', 'nav-item-vault-formats');
    } else if (path === 'vaults_suites.html' || path === 'vaults_precedence.html' || path === 'vaults_contracts.html') {
      setActive('nav-harness', 'nav-item-vault-suites');
    } else if (path === 'chatroom.html') {
      setActive('nav-harness', 'nav-item-agent-chat');
    } else if (path === 'harness_haya_studio.html' || path === 'harness_haya_workbench.html' || path === 'harness_haya_engine.html') {
      setActive('nav-harness', 'nav-item-agent-drafting');
    } else if (path === 'models_domain_slms.html' || path === 'models_embeddings.html' || path === 'models_rerankers.html' || path === 'harness_haya_models.html') {
      setActive('nav-harness', 'nav-item-model-legal');
    } else if (path === 'marketplace_reporting_assignment_forensics.html') {
      setActive('nav-turbine', 'nav-item-rep-sec65');
    } else if (path === 'marketplace_reporting_resolution_compliance.html') {
      setActive('nav-turbine', 'nav-item-rep-sec29a');
    } else if (path === 'marketplace_reporting_liability_shields.html') {
      setActive('nav-turbine', 'nav-item-rep-sec36');
    } else if (path === 'agents_claims.html') {
      setActive('nav-turbine', 'nav-item-srv-claims');
    } else if (path === 'resolutionbazaar.html') {
      setActive('nav-turbine', 'nav-item-srv-plan');
    } else if (path === 'harness_haya_vaults.html' || path === 'harness_haya_ingest.html' || path === 'harness_haya_wiki.html') {
      setActive('nav-turbine', 'nav-item-srv-dataroom');
    } else if (path === 'agents_insolvency.html' || path === 'agents_process_agents.html' || path === 'agents_governance.html') {
      setActive('nav-turbine', 'nav-item-adv-process');
    } else if (path === 'agents_legal.html' || path === 'agents_financial.html' || path === 'agents_reporting_agents.html') {
      setActive('nav-turbine', 'nav-item-adv-legal');
    } else if (path === 'pricing.html') {
      setActive('nav-turbine');
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


  // ==========================================================================
  // Directory "Add Me" Modal & Application Controller
  // ==========================================================================
  let currentGeneratedJson = "";

  window.openAddMeModal = function(category) {
    const modal = document.getElementById("directory-add-me-modal");
    if (!modal) return;

    const formStep = document.getElementById("add-me-form-step");
    const successStep = document.getElementById("add-me-success-step");
    if (formStep) formStep.style.display = "block";
    if (successStep) successStep.style.display = "none";

    const form = document.getElementById("directory-add-me-form");
    if (form) form.reset();

    const catSelect = document.getElementById("addme-category");
    if (catSelect && category) {
      catSelect.value = category;
    }

    const citySelect = document.getElementById("addme-city");

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  window.closeAddMeModal = function() {
    const modal = document.getElementById("directory-add-me-modal");
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  window.handleCityChange = function(city) {
    const cityMap = {
      "Chandigarh": "NCLT Chandigarh Bench & Principal Bench",
      "New Delhi": "NCLT Principal Bench (New Delhi)",
      "Mumbai": "NCLT Mumbai Bench",
      "Bengaluru": "NCLT Bengaluru Bench",
      "Ahmedabad": "NCLT Ahmedabad Bench",
      "Kolkata": "NCLT Kolkata Bench",
      "Chennai": "NCLT Chennai Bench",
      "Hyderabad": "NCLT Hyderabad Bench",
      "Jaipur": "NCLT Jaipur Bench",
      "Cuttack": "NCLT Cuttack Bench",
      "Kochi": "NCLT Kochi Bench",
      "Indore": "NCLT Indore Bench",
      "Allahabad": "NCLT Allahabad Bench",
      "Guwahati": "NCLT Guwahati Bench",
      "Amravati": "NCLT Amravati Bench"
    };
    if (benchInput && cityMap[city]) {
      benchInput.value = cityMap[city];
    }
  };

  window.handleDirectoryAddMe = async function(event) {
    if (event && event.preventDefault) event.preventDefault();
    const submitBtn = document.getElementById("addme-submit-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Dossier...';
    }

    const name = (document.getElementById("addme-name")?.value || "").trim();
    const category = document.getElementById("addme-category")?.value || "ip";
    const reg_no = (document.getElementById("addme-regno")?.value || "").trim();
    const firm = (document.getElementById("addme-firm")?.value || "").trim();
    const city = (document.getElementById("addme-city")?.value || "Chandigarh").trim();
    const address = (document.getElementById("addme-address")?.value || "").trim();
    const email = (document.getElementById("addme-email")?.value || "").trim();
    const phone = (document.getElementById("addme-phone")?.value || "").trim();
    const specialization = (document.getElementById("addme-specialization")?.value || "").trim();

    const BENCH_COORDINATES = {
      "chandigarh": { lat: 30.7398, lng: 76.7827, state: "Chandigarh (UT)" },
      "new delhi": { lat: 28.6139, lng: 77.2090, state: "Delhi" },
      "mumbai": { lat: 18.9220, lng: 72.8347, state: "Maharashtra" },
      "bengaluru": { lat: 12.9716, lng: 77.5946, state: "Karnataka" },
      "ahmedabad": { lat: 23.0225, lng: 72.5714, state: "Gujarat" },
      "kolkata": { lat: 22.5726, lng: 88.3639, state: "West Bengal" },
      "chennai": { lat: 13.0827, lng: 80.2707, state: "Tamil Nadu" },
      "hyderabad": { lat: 17.3850, lng: 78.4867, state: "Telangana" },
      "jaipur": { lat: 26.9124, lng: 75.7873, state: "Rajasthan" },
      "cuttack": { lat: 20.4625, lng: 85.8828, state: "Odisha" },
      "kochi": { lat: 9.9312, lng: 76.2673, state: "Kerala" },
      "indore": { lat: 22.7196, lng: 75.8577, state: "Madhya Pradesh" },
      "allahabad": { lat: 25.4358, lng: 81.8463, state: "Uttar Pradesh" },
      "guwahati": { lat: 26.1445, lng: 91.7362, state: "Assam" },
      "amravati": { lat: 16.5062, lng: 80.6480, state: "Andhra Pradesh" }
    };

    const geo = BENCH_COORDINATES[city.toLowerCase()] || { lat: 30.7398, lng: 76.7827, state: "India" };

    const designation = 
      category === "ip" ? "Insolvency Professional" :
      category === "rv" ? "Registered Valuer" : "Restructuring Advocate";

    const newRecord = {
      id: category + "-" + Date.now().toString().slice(-4),
      name: name,
      designation: designation,
      category: category,
      reg_no: reg_no,
      firm: firm,
      city: city,
      address: address,
      state: geo.state,
      lat: geo.lat,
      lng: geo.lng,
      email: email,
      phone: phone,
      specialization: specialization
    };

    currentGeneratedJson = JSON.stringify(newRecord, null, 2);

    const emailSubject = "[APNET Directory Accreditation] " + name + " - " + designation + " (" + city + ")";
    const emailMessage = 
"============================================================\n" +
"NEW DIRECTORY ACCREDITATION APPLICATION\n" +
"============================================================\n" +
"Applicant Name:  " + name + "\n" +
"Role / Category: " + designation + " (" + category.toUpperCase() + ")\n" +
"Registration No: " + reg_no + "\n" +
"Firm / Practice: " + firm + "\n" +
"Office Address:  " + address + "\n" +
"City & State:    " + city + ", " + geo.state + "\n" +

"Applicant Email: " + email + "\n" +
"Phone Number:    " + phone + "\n" +

"Specializations: " + specialization + "\n\n" +
"------------------------------------------------------------\n" +
"READY-TO-PASTE JSON FOR js/professionals.json:\n" +
"------------------------------------------------------------\n" +
currentGeneratedJson + "\n" +
"============================================================\n";

    try {
      await fetch("https://formsubmit.co/ajax/agenticprofessionals@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: emailSubject,
          name: name,
          category: designation,
          reg_no: reg_no,
          firm: firm,
          city: city,
          address: address,
          email: email,
          phone: phone,
          specialization: specialization,
          json_payload: currentGeneratedJson,
          message: emailMessage
        })
      });
    } catch (err) {
      console.warn("Direct form submission fetch warning:", err);
    }

    try {
      const existing = JSON.parse(localStorage.getItem("apnet_pending_submissions") || "[]");
      existing.push({ submitted_at: new Date().toISOString(), ...newRecord });
      localStorage.setItem("apnet_pending_submissions", JSON.stringify(existing));
    } catch (e) {}

    const formStep = document.getElementById("add-me-form-step");
    const successStep = document.getElementById("add-me-success-step");
    const jsonPreview = document.getElementById("addme-json-preview");

    if (formStep) formStep.style.display = "none";
    if (successStep) successStep.style.display = "block";
    if (jsonPreview) jsonPreview.textContent = currentGeneratedJson;

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Application';
    }
  };

  window.copyAddMeJson = function() {
    if (!currentGeneratedJson) return;
    navigator.clipboard.writeText(currentGeneratedJson).then(function() {
      const btn = document.getElementById("btn-copy-json");
      if (btn) {
        const oldText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.style.background = "#dcfce7";
        btn.style.color = "#15803d";
        setTimeout(function() {
          btn.innerHTML = oldText;
          btn.style.background = "#e2e8f0";
          btn.style.color = "#334155";
        }, 2000);
      }
    });
  };

  // Close directory modal on outside click
  document.addEventListener("click", function(e) {
    const modal = document.getElementById("directory-add-me-modal");
    if (modal && modal.style.display === "flex" && e.target === modal) {
      window.closeAddMeModal();
    }
  });

  // Close directory modal on Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      window.closeAddMeModal();
    }
  });

})();
