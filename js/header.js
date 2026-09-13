/**
 * AgenticProfessionals.Net - Shared Site Header Component
 * Dynamically loads header.html as the SINGLE SOURCE OF TRUTH across all pages.
 * Handles active route detection and dropdown interactivity.
 */

(function () {
  const fallbackHTML = `
<header class="site-header" id="site-header">
  <div class="nav-container">

    <!-- Brand Identity (Wireframe exact match) -->
    <div class="brand-block-wireframe" id="header-brand-logo">
      <a href="index.html#home" class="brand-main-title">AGENTIC PROFESSIONALS NETWORK</a>
      <div class="brand-sub-url">
        Sovereign Air-Gapped Infrastructure for Agentic Professionals
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

      <!-- 1. Workbench (pipie) -->
      <li class="nav-item">
        <a href="pipie_ide.html" class="nav-link nav-link-wireframe" id="nav-workspace">
          <span class="nav-title-row">
            <span>AI Harness</span>
          </span>
          <span class="nav-subtitle-row">PIPIE Interface</span>
        </a>
      </li>

      <!-- 2. AI Assets (lexai) - 2-Column Mega Menu -->
      <li class="nav-item nav-item-dropdown" id="dropdown-lexai-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-lexai" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>AI Assets</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Second Brains</span>
        </button>
        <div class="dropdown-menu mega-menu-2col" id="lexai-dropdown-menu">
          <div class="mega-grid-2col">

            <!-- Column 1: VAULTS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-blue"><i class="fa-solid fa-vault"></i></span>
                  <span class="mega-col-wireframe-title">IBC-VAULTS</span>
                </div>
                <!--<span class="mega-col-badge">Deterministic</span>-->
              </div>
              <div class="mega-col-wireframe-links">
                <a href="vaults_law.html" class="mega-item-wireframe" id="nav-item-vault-law">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Law</span>
                    <span class="mega-item-wireframe-desc">IBC, Companies Act &amp; RERA</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_precedence.html" class="mega-item-wireframe" id="nav-item-vault-precedence">
                  <div class="mega-item-icon-box icon-sky">
                    <i class="fa-solid fa-gavel"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Precedence</span>
                    <span class="mega-item-wireframe-desc">17,558 SC, NCLAT &amp; HC rulings</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_formats.html" class="mega-item-wireframe" id="nav-item-vault-formats">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-file-invoice"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Formats</span>
                    <span class="mega-item-wireframe-desc">Forms, pleadings &amp; conveyancing</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_suites.html" class="mega-item-wireframe" id="nav-item-vault-suites">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-boxes-packing"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Suites</span>
                    <span class="mega-item-wireframe-desc">CIRP, Liquidation &amp; PG playbooks</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="vaults_contracts.html" class="mega-item-wireframe" id="nav-item-vault-contracts">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-file-shield"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Contracts</span>
                    <span class="mega-item-wireframe-desc">Atticus CUAD, ACORD &amp; MAUD</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: MODELS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-brain"></i></span>
                  <span class="mega-col-wireframe-title">IBC-MODELS</span>
                </div>
                <!--<span class="mega-col-badge">SLM 2.9B</span>-->
              </div>
              <div class="mega-col-wireframe-links">
                <a href="models_domain_slms.html" class="mega-item-wireframe" id="nav-item-model-slms">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-brain"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Domain Models</span>
                    <span class="mega-item-wireframe-desc">Legal, finance &amp; professional SLMs</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="models_embeddings.html" class="mega-item-wireframe" id="nav-item-model-embeddings">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-diagram-project"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Embedding Models</span>
                    <span class="mega-item-wireframe-desc">768-dim dense ONNX vectors</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="models_rerankers.html" class="mega-item-wireframe" id="nav-item-model-rerankers">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-arrow-down-wide-short"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Reranker Models</span>
                    <span class="mega-item-wireframe-desc">Cross-encoder precision rankers</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>


      <!-- 3. Agents - 2-Column Mega Menu -->
      <li class="nav-item nav-item-dropdown" id="dropdown-agents-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-agents" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>AI Agents</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Agentic CoWorkers</span>
        </button>
        <div class="dropdown-menu mega-menu-2col" id="agents-dropdown-menu">
          <div class="mega-grid-2col">

            <!-- Column 1: PROCESS AGENTS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-emerald"><i class="fa-solid fa-robot"></i></span>
                  <span class="mega-col-wireframe-title">PROCESS AGENTS</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="agents_insolvency.html" class="mega-item-wireframe" id="nav-item-agent-insolvency">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Insolvency Agents</span>
                    <span class="mega-item-wireframe-desc">CIRP timeline, §29A &amp; Form H assembler</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_legal.html" class="mega-item-wireframe" id="nav-item-agent-legal">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Legal Agents</span>
                    <span class="mega-item-wireframe-desc">NCLT petitions, precedents &amp; case strength</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_financial.html" class="mega-item-wireframe" id="nav-item-agent-financial">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-coins"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Financial Agents</span>
                    <span class="mega-item-wireframe-desc">PUFE look-back, bank triage &amp; valuations</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_claims.html" class="mega-item-wireframe" id="nav-item-agent-claims">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Claims Agents</span>
                    <span class="mega-item-wireframe-desc">Form B–F intake, audit &amp; CoC voting</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_governance.html" class="mega-item-wireframe" id="nav-item-agent-governance">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-network-wired"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Governance Agents</span>
                    <span class="mega-item-wireframe-desc">MCA filings, entity graphs &amp; compliance</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: FORENSIC AGENTS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-blue"><i class="fa-solid fa-file-shield"></i></span>
                  <span class="mega-col-wireframe-title">FORENSIC AGENTS</span>
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
                    <span class="mega-item-wireframe-desc">Pre-admission triage, §65 inquest &amp; fee defense</span>
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
                    <span class="mega-item-wireframe-desc">Sec 29A master screening, anti-cartel &amp; dual-hat</span>
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

          <!-- Bottom Footer Shelf
          <div class="mega-menu-footer">
            <div class="mega-footer-left">
              <span class="mega-footer-status-dot"></span>
              <span class="mega-footer-text">Deterministic Legal Forensics • 100% Air-Gapped</span>
            </div>
            <a href="index.html#chats" class="mega-footer-link">
              <span>Open Pipie-IDE</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div> -->
        </div>
      </li>

      <!-- 4. APNet Members - Dropdown Menu -->
      <li class="nav-item nav-item-dropdown" id="dropdown-members-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-directories" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>APNet Members</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Community Ecosystem</span>
        </button>
        <div class="dropdown-menu mega-menu-1col dropdown-menu-end" id="members-dropdown-menu"
          style="right: 0; left: auto; min-width: 320px;">
          <div class="mega-grid-1col">
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-network-wired"></i></span>
                  <span class="mega-col-wireframe-title">COMMUNITY &amp; ECOSYSTEM</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="directory_listing.html" class="mega-item-wireframe" id="nav-item-dir-listing">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-address-book"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Directory Listing</span>
                    <span class="mega-item-wireframe-desc">Verified IP &amp; Valuer Leaflet Map</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="https://forums.agenticprofessionals.net" target="_blank" rel="noopener noreferrer"
                  class="mega-item-wireframe" id="nav-item-dir-forums">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-comments"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">APNET Forums</span>
                    <span class="mega-item-wireframe-desc">Verified practitioner network</span>
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
                    <span class="mega-item-wireframe-name">MSME Sahyog</span>
                    <span class="mega-item-wireframe-desc">Restructuring &amp; dispute support</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow"
                    style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>

      <!-- 5. Resolution Bazaar - Agentic Marketplace (Cubes Icon) -->
      <li class="nav-item" id="nav-item-bazaar">
        <a href="resolutionbazaar.html" class="nav-icon-wireframe" id="nav-bazaar"
          aria-label="Resolution Bazaar — Agentic Marketplace" title="Resolution Bazaar">
          <i class="fa-solid fa-cubes nav-home-icon"></i>
        </a>
      </li>

    </ul>
  </div>
</header>
  `;

  function applyHeader(htmlContent) {
    const mountContainer = document.getElementById('shared-header') ||
                           document.getElementById('site-header-container') ||
                           document.querySelector('site-header') ||
                           document.querySelector('header.site-header');

    if (mountContainer) {
      const temp = document.createElement('div');
      temp.innerHTML = htmlContent.trim();
      const parsedHeader = temp.querySelector('header.site-header') || temp.firstElementChild;
      if (parsedHeader) {
        mountContainer.replaceWith(parsedHeader);
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
    } else if (path === 'pipie_ide.html') {
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
})();
