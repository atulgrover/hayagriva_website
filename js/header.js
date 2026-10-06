/**
 * AgenticProfessionals.Net - Shared Site Header Component
 * Dynamically loads header.html as the SINGLE SOURCE OF TRUTH across all pages.
 * Handles active route detection and dropdown interactivity.
 */

(function () {
  const fallbackHTML = `<!-- ======================================================================
     AgenticProfessionals.Net - Shared Site Header Component
     Brand: Agentic Professionals Network
            Powered by Hayagriva Sovereign Intelligence
     Tabs (Four Sovereign Pillars):
       0. Home
       1. WORKBENCH (Sovereign Harness: Desktop Core, Workspaces, Local SLMs)
       2. INTELLIGENCE (Knowledge Vaults: Statutory Law, Practice Suites, Precedents)
       3. ENTERPRISE (Co-Counsel Agents: Court Archetypes, Specialist Team, Forensic Dossiers)
       4. COMMUNITY (Hayagriva Resources: Directories, Asset Exchange, Knowledge Base)
     Actions:
       - Chamber Login (opens #login-account-modal)
       - Download Hayagriva (opens #hayagriva-ide-modal)
     ====================================================================== -->

<header class="site-header" id="site-header">
  <div class="nav-container">

    <!-- Brand Identity (Wireframe exact match) -->
    <div class="brand-block-wireframe" id="header-brand-logo">
      <a href="index.html#home" class="brand-main-title">AGENTIC PROFESSIONALS NETWORK</a>
      <div class="brand-sub-url">
        POWERED BY HAYAGRIVA SOVEREIGN INTELLIGENCE
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

      <!-- 1. WORKBENCH Dropdown (Sovereign Harness) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-workbench-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-workbench" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>WORKBENCH</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Sovereign Harness</span>
        </button>
        <div class="dropdown-menu mega-menu-3col" id="workbench-dropdown-menu">
          <div class="mega-grid-3col">

            <!-- Column 1: Desktop Harness Core -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-indigo"><i class="fa-solid fa-desktop"></i></span>
                  <span class="mega-col-wireframe-title">DESKTOP CORE</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="harness_haya_workbench.html" class="mega-item-wireframe" id="nav-wb-sovereign-ide">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-cube"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Sovereign IDE Overview</span>
                    <span class="mega-item-wireframe-desc">Air-gapped Theia, 5 sovereign pillars</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="harness_haya_engine.html" class="mega-item-wireframe" id="nav-wb-core-engine">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-microchip"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Deterministic Engine</span>
                    <span class="mega-item-wireframe-desc">FTS5, ONNX vectors &amp; PageIndex</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="harness_haya_ingest.html" class="mega-item-wireframe" id="nav-wb-doc-ingest">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-file-arrow-up"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Multi-Modal Ingestion</span>
                    <span class="mega-item-wireframe-desc">Native PDF, Word, XLSX &amp; Pandoc</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: In-Chamber Workspaces -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-folder-tree"></i></span>
                  <span class="mega-col-wireframe-title">WORKSPACES</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="harness_haya_studio.html" class="mega-item-wireframe" id="nav-wb-monaco-studio">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-pen-nib"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Monaco Legal Studio</span>
                    <span class="mega-item-wireframe-desc">Pleadings editor with slash commands</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="harness_haya_wiki.html" class="mega-item-wireframe" id="nav-wb-case-wiki">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-book-bookmark"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Case Wiki &amp; Artifacts</span>
                    <span class="mega-item-wireframe-desc">Compounding memory &amp; wiki catalog</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="chatroom.html" class="mega-item-wireframe" id="nav-wb-action-inbox">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-horse-head"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Case Action Inbox</span>
                    <span class="mega-item-wireframe-desc">AskHaya ambient counsel &amp; HITL</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 3: Local AI Engines -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-rose"><i class="fa-solid fa-brain"></i></span>
                  <span class="mega-col-wireframe-title">LOCAL SLMS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="harness_haya_models.html" class="mega-item-wireframe" id="nav-wb-reasoning-slms">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-bolt"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Reasoning SLMs</span>
                    <span class="mega-item-wireframe-desc">DeepSeek-R1-7B &amp; Llama-3.2-3B</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="models_embeddings.html" class="mega-item-wireframe" id="nav-wb-dense-vectors">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-diagram-project"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Dense Vectors</span>
                    <span class="mega-item-wireframe-desc">BGE-Small-EN-v1.5 ONNX runtime</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="models_domain_slms.html" class="mega-item-wireframe" id="nav-wb-domain-weights">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-dna"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Domain Specialized</span>
                    <span class="mega-item-wireframe-desc">IBC legal &amp; forensic fine-tunes</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 2. INTELLIGENCE Dropdown (Knowledge Vaults) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-intelligence-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-intelligence" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>INTELLIGENCE</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Knowledge Vaults</span>
        </button>
        <div class="dropdown-menu mega-menu-3col" id="intelligence-dropdown-menu">
          <div class="mega-grid-3col">

            <!-- Column 1: Statutory Law (India Code Mirrored) -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-teal"><i class="fa-solid fa-landmark"></i></span>
                  <span class="mega-col-wireframe-title">STATUTORY LAW</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="vaults_law.html" class="mega-item-wireframe" id="nav-intel-bare-acts">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Master Bare Acts</span>
                    <span class="mega-item-wireframe-desc">IBC 2016, CCA 2015, CPC 1908</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_law.html#sync" class="mega-item-wireframe" id="nav-intel-india-code">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">India Code Sync</span>
                    <span class="mega-item-wireframe-desc">Official Ministry REST mirror</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_law.html#runtime" class="mega-item-wireframe" id="nav-intel-zero-ram">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Zero-RAM Runtime</span>
                    <span class="mega-item-wireframe-desc">AES-256 encrypted .vault files</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: Practice Suites & Playbooks -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-boxes-packing"></i></span>
                  <span class="mega-col-wireframe-title">PRACTICE SUITES</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="vaults_suites.html#insolvency" class="mega-item-wireframe" id="nav-intel-suite-cirp">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-gavel"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Insolvency Suite</span>
                    <span class="mega-item-wireframe-desc">CIRP, Liquidation &amp; PG modules</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_suites.html#commercial" class="mega-item-wireframe" id="nav-intel-suite-commercial">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-building-columns"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Commercial Recovery</span>
                    <span class="mega-item-wireframe-desc">PIMS (S.12A), Order 38/39 relief</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_suites.html#adr" class="mega-item-wireframe" id="nav-intel-suite-adr">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-handshake"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Arbitration &amp; ADR</span>
                    <span class="mega-item-wireframe-desc">Section 9 &amp; 34 statutory motions</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 3: Drafting Precedents & Formats -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-amber"><i class="fa-solid fa-file-contract"></i></span>
                  <span class="mega-col-wireframe-title">PRECEDENTS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="vaults_formats.html" class="mega-item-wireframe" id="nav-intel-court-formats">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-file-invoice"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">220+ Court Formats</span>
                    <span class="mega-item-wireframe-desc">Verified pleadings &amp; S.63 BSA</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_precedence.html" class="mega-item-wireframe" id="nav-intel-judicial-rulings">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-book-journal-whills"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Judicial Precedents</span>
                    <span class="mega-item-wireframe-desc">Supreme Court &amp; NCLAT rulings</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_contracts.html" class="mega-item-wireframe" id="nav-intel-conveyancing">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-file-signature"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Commercial Contracts</span>
                    <span class="mega-item-wireframe-desc">Debt restructuring &amp; slump sales</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 3. ENTERPRISE Dropdown (Co-Counsel Agents) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-agents-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-agents" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>ENTERPRISE</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Co-Counsel Agents</span>
        </button>
        <div class="dropdown-menu mega-menu-3col" id="agents-dropdown-menu">
          <div class="mega-grid-3col">

            <!-- Column 1: Court & Forensic Archetypes -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-emerald"><i class="fa-solid fa-user-shield"></i></span>
                  <span class="mega-col-wireframe-title">COURT ARCHETYPES</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="agents_insolvency.html" class="mega-item-wireframe" id="nav-agent-avoidance">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-magnifying-glass-chart"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Avoidance &amp; Forensic</span>
                    <span class="mega-item-wireframe-desc">&sect;&sect; 43, 45, 50, 66 contra-sweeps</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_legal.html" class="mega-item-wireframe" id="nav-agent-injunction">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-hand"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Commercial Injunctions</span>
                    <span class="mega-item-wireframe-desc">Order 39 R.1&amp;2 interim stay motions</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_claims.html" class="mega-item-wireframe" id="nav-agent-claims">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-calculator"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Creditor Claim Auditor</span>
                    <span class="mega-item-wireframe-desc">Forms B/C/CA, penal interest purge</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="marketplace_reporting_resolution_compliance.html" class="mega-item-wireframe" id="nav-agent-29a">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-id-card-clip"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Section 29A Screener</span>
                    <span class="mega-item-wireframe-desc">10-gate statutory disqualification</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_governance.html" class="mega-item-wireframe" id="nav-agent-nclat">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-landmark-dome"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">NCLAT Appeal Drafter</span>
                    <span class="mega-item-wireframe-desc">Form NCLAT-1 &amp; delay condonation</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: In-Chamber Specialist Team -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-blue"><i class="fa-solid fa-users-gear"></i></span>
                  <span class="mega-col-wireframe-title">SPECIALIST TEAM</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="agents_process_agents.html" class="mega-item-wireframe" id="nav-agent-advisor">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-user-tie"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Advisor Agent</span>
                    <span class="mega-item-wireframe-desc">Strategic IBC &amp; AskHaya orchestrator</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_financial.html" class="mega-item-wireframe" id="nav-agent-forms">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-clipboard-check"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Forms Agent</span>
                    <span class="mega-item-wireframe-desc">Statutory auditing &amp; compliance checks</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_reporting_agents.html" class="mega-item-wireframe" id="nav-agent-doc">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-file-shield"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Document Agent</span>
                    <span class="mega-item-wireframe-desc">Court petitions &amp; DOCX/PDF export</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 3: Forensic Dossiers & Reports -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-rose"><i class="fa-solid fa-file-circle-exclamation"></i></span>
                  <span class="mega-col-wireframe-title">FORENSIC DOSSIERS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="marketplace_reporting_assignment_forensics.html" class="mega-item-wireframe" id="nav-agent-s65">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Section 65 Collusion</span>
                    <span class="mega-item-wireframe-desc">Malicious CIRP petition inquests</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="marketplace_reporting_liability_shields.html" class="mega-item-wireframe" id="nav-agent-s36">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-shield-virus"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Section 36 Estate Shield</span>
                    <span class="mega-item-wireframe-desc">Liquidation asset ring-fencing</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="resolution_plan_verification_telephone_cables.html" class="mega-item-wireframe" id="nav-agent-avoidance-ws">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-table-list"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Avoidance Worksheets</span>
                    <span class="mega-item-wireframe-desc">Bank ledger contra-sweep evidence</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 4. COMMUNITY Dropdown (Hayagriva Resources) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-community-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-community" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>COMMUNITY</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Hayagriva Resources</span>
        </button>
        <div class="dropdown-menu mega-menu-3col dropdown-menu-end" id="community-dropdown-menu">
          <div class="mega-grid-3col">

            <!-- Column 1: Accredited Directories -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-address-book"></i></span>
                  <span class="mega-col-wireframe-title">DIRECTORIES</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="directories_ip.html" class="mega-item-wireframe" id="nav-comm-dir-ip">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-user-tie"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Insolvency Professionals</span>
                    <span class="mega-item-wireframe-desc">15 NCLT benches &amp; geo-mapping</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="directories_rv.html" class="mega-item-wireframe" id="nav-comm-dir-rv">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-coins"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Registered Valuers</span>
                    <span class="mega-item-wireframe-desc">L&amp;B, P&amp;M, Financial Assets</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="directories_cl.html" class="mega-item-wireframe" id="nav-comm-dir-cl">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-scale-unbalanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Corporate Lawyers</span>
                    <span class="mega-item-wireframe-desc">Commercial bar litigators</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="directory_listing.html" class="mega-item-wireframe" id="nav-comm-dir-all">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-list-check"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Master Directory</span>
                    <span class="mega-item-wireframe-desc">Unified search &amp; accreditation</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: Distressed Asset Exchange -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-amber"><i class="fa-solid fa-bullhorn"></i></span>
                  <span class="mega-col-wireframe-title">ASSET EXCHANGE</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="resolutionbazaar.html" class="mega-item-wireframe" id="nav-comm-rbz">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-store"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">ResolutionBazaar</span>
                    <span class="mega-item-wireframe-desc">PRA discovery &amp; asset catalog</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="pipie_assets.html" class="mega-item-wireframe" id="nav-comm-vdr">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">PiPIE Data Rooms</span>
                    <span class="mega-item-wireframe-desc">VDR &amp; PII-redacted dockets</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 3: Knowledge Base & Training -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-teal"><i class="fa-solid fa-graduation-cap"></i></span>
                  <span class="mega-col-wireframe-title">KNOWLEDGE BASE</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="docs/FINAL_29A_COMPLIANCE_REPORT_APOGEE_ENTERPRISES.html" class="mega-item-wireframe" id="nav-comm-29a-dossier">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-file-shield"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">29A Benchmark Dossier</span>
                    <span class="mega-item-wireframe-desc">Audited compliance case study</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="https://forums.agenticprofessionals.net" target="_blank" rel="noopener noreferrer" class="mega-item-wireframe" id="nav-comm-forums">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-comments"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Discussion Forums</span>
                    <span class="mega-item-wireframe-desc">Peer jurisprudence &amp; insights</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow" style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
                <a href="https://hayagriva.app" target="_blank" rel="noopener noreferrer" class="mega-item-wireframe" id="nav-comm-training">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-certificate"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Enterprise Training</span>
                    <span class="mega-item-wireframe-desc">MSME Sahyog &amp; chamber upskilling</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow" style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 5. Right Action: Hayagriva Downloads Portal -->
      <li class="nav-item nav-item-cta" id="nav-action-cluster-wrapper">
        <div class="nav-action-cluster nav-tooltip-wrap" data-tooltip="Hayagriva Downloads">
          <a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="nav-icon-wireframe nav-portal-btn" id="btn-login" aria-label="Hayagriva Downloads" title="Hayagriva Downloads">
            <i class="fa-solid fa-right-to-bracket nav-portal-icon"></i>
          </a>
        </div>
      </li>

    </ul>
  </div>
</header>`;

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
      } else if (hash.startsWith('#workbench') || hash.startsWith('#harness') || hash.startsWith('#workspace') || hash.startsWith('#models')) {
        setActive('nav-workbench');
      } else if (hash.startsWith('#intelligence') || hash.startsWith('#vaults') || hash.startsWith('#law') || hash.startsWith('#suites')) {
        setActive('nav-intelligence');
      } else if (hash.startsWith('#agents') || hash.startsWith('#co-counsel') || hash.startsWith('#forensics')) {
        setActive('nav-agents');
      } else if (hash.startsWith('#community') || hash.startsWith('#directories') || hash.startsWith('#listing') || hash.startsWith('#bazaar')) {
        setActive('nav-community');
      }
    } else if (path.startsWith('harness_haya_') || path === 'chatroom.html' || path.startsWith('models_')) {
      setActive('nav-workbench');
    } else if (path.startsWith('vaults_')) {
      setActive('nav-intelligence');
    } else if (path.startsWith('agents_') || path.startsWith('marketplace_reporting_') || path.includes('telephone_cables')) {
      setActive('nav-agents');
    } else if (path.startsWith('directories_') || path === 'directory_listing.html' || path === 'resolutionbazaar.html' || path === 'pipie_assets.html' || path.includes('FINAL_29A')) {
      setActive('nav-community');
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


  // Sovereign Navigation: Chamber Login Modal Hook
  window.openAccountModal = function(tabName) {
    const modal = document.getElementById('login-account-modal');
    if (modal) {
      modal.classList.add('active');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      if (typeof window.switchLoginTab === 'function' && tabName) {
        window.switchLoginTab(tabName);
      }
    } else if (typeof window.openLoginModal === 'function') {
      window.openLoginModal(tabName);
    } else {
      window.location.hash = '#login';
    }
  };

  window.closeAccountModal = function() {
    const modal = document.getElementById('login-account-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

})();
