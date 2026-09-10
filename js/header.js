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
        Sovereign Air-Gapped Infrastructure for the Professionals
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
            <span>Workbench</span>
          </span>
          <span class="nav-subtitle-row">Agentic Interface</span>
        </a>
      </li>

      <!-- 2. Agents (lexai) - 3-Column Mega Menu -->
      <li class="nav-item nav-item-dropdown" id="dropdown-lexai-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-lexai" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>Agents</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Agentic Assets</span>
        </button>
        <div class="dropdown-menu mega-menu-3col" id="lexai-dropdown-menu">
          <div class="mega-grid-3col">

            <!-- Column 1: MODELS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-brain"></i></span>
                  <span class="mega-col-wireframe-title">MODELS</span>
                </div>
                <!--<span class="mega-col-badge">SLM 2.9B</span>-->
              </div>
              <div class="mega-col-wireframe-links">
                <a href="pipie_assets.html#models" class="mega-item-wireframe" id="nav-item-model-legal">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">LegalParam 2.9B</span>
                    <span class="mega-item-wireframe-desc">IBC &amp; statutory legal SLM</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="pipie_assets.html#models" class="mega-item-wireframe" id="nav-item-model-finance">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-chart-pie"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">FinanceParam 2.9B</span>
                    <span class="mega-item-wireframe-desc">Valuation &amp; financial reasoning</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: VAULTS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-blue"><i class="fa-solid fa-vault"></i></span>
                  <span class="mega-col-wireframe-title">VAULTS</span>
                </div>
                <!--<span class="mega-col-badge">Deterministic</span>-->
              </div>
              <div class="mega-col-wireframe-links">
                <a href="pipie_assets.html#vaults" class="mega-item-wireframe" id="nav-item-vault-law">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-book-bookmark"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">1. Law</span>
                    <span class="mega-item-wireframe-desc">IBC, Companies Act &amp; SEBI</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="pipie_assets.html#vaults" class="mega-item-wireframe" id="nav-item-vault-precedence">
                  <div class="mega-item-icon-box icon-sky">
                    <i class="fa-solid fa-gavel"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">2. Precedence</span>
                    <span class="mega-item-wireframe-desc">NCLT, NCLAT &amp; SC judgments</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="pipie_assets.html#vaults" class="mega-item-wireframe" id="nav-item-vault-formats">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-file-invoice"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">3. Formats</span>
                    <span class="mega-item-wireframe-desc">Statutory forms &amp; CIRP schedules</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 3: AGENTS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-emerald"><i class="fa-solid fa-robot"></i></span>
                  <span class="mega-col-wireframe-title">AGENTS</span>
                </div>
                <!--<span class="mega-col-badge">Autonomous</span>-->
              </div>
              <div class="mega-col-wireframe-links">
                <a href="pipie_assets.html#agents" class="mega-item-wireframe" id="nav-item-agent-insolvency">
                  <div class="mega-item-icon-box icon-emerald">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">1. Insolvency Agents</span>
                    <span class="mega-item-wireframe-desc">CIRP timeline &amp; claims verify</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="pipie_assets.html#agents" class="mega-item-wireframe" id="nav-item-agent-legal">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-file-signature"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">2. Legal Agents</span>
                    <span class="mega-item-wireframe-desc">Pleadings &amp; avoidance filings</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="pipie_assets.html#agents" class="mega-item-wireframe" id="nav-item-agent-financial">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-coins"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">3. Financial Agents</span>
                    <span class="mega-item-wireframe-desc">Valuation &amp; forensic ledger audit</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>


      <!-- 3. Marketplace (rbaz) - 2-Column Mega Menu -->
      <li class="nav-item nav-item-dropdown" id="dropdown-agents-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-agents" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>Marketplace</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Agentic Workflows</span>
        </button>
        <div class="dropdown-menu mega-menu-2col" id="agents-dropdown-menu">
          <div class="mega-grid-2col">

            <!-- Column 1: REPORTS -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-blue"><i class="fa-solid fa-file-shield"></i></span>
                  <span class="mega-col-wireframe-title">FORENSIC REPORTS</span>
                </div>
                <!-- <span class="mega-col-badge">Forensic</span> -->
              </div>
              <div class="mega-col-wireframe-links">
                <a href="agents_process_agents.html" class="mega-item-wireframe" id="nav-item-agent-29a">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">29A Report</span>
                    <span class="mega-item-wireframe-desc">Sec 29A disqualification screening</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_process_agents.html" class="mega-item-wireframe" id="nav-item-agent-65">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-file-contract"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">65 Report</span>
                    <span class="mega-item-wireframe-desc">Statutory forensic transaction audit</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_reporting_agents.html" class="mega-item-wireframe" id="nav-item-agent-39c">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">39C Report</span>
                    <span class="mega-item-wireframe-desc">CIRP cost assessment &amp; strategy</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: PROCESSES -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-emerald"><i class="fa-solid fa-gears"></i></span>
                  <span class="mega-col-wireframe-title">IBC PROCESSES</span>
                </div>
                <!-- <span class="mega-col-badge">Automated</span>m-->
              </div>
              <div class="mega-col-wireframe-links">
                <a href="chatroom.html" class="mega-item-wireframe" id="nav-item-sol-chatrooms">
                  <div class="mega-item-icon-box icon-sky">
                    <i class="fa-solid fa-comments"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Chat-Rooms</span>
                    <span class="mega-item-wireframe-desc">Encrypted deal &amp; advisory rooms</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="index.html#home" class="mega-item-wireframe" id="nav-item-sol-marketing">
                  <div class="mega-item-icon-box icon-amber">
                    <i class="fa-solid fa-gavel"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Asset-Sales</span>
                    <span class="mega-item-wireframe-desc">Distressed corporate asset portal</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="agents_process_agents.html" class="mega-item-wireframe" id="nav-item-sol-claim-mgt">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-clipboard-check"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Claim-Collate</span>
                    <span class="mega-item-wireframe-desc">Automated CIRP claims matrix</span>
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

      <!-- 4. Directories -> Link to directory_listing.html -->
      <li class="nav-item">
        <a href="directory_listing.html" class="nav-link nav-link-wireframe" id="nav-directories">
          <span class="nav-title-row">
            <span>Directories</span>
          </span>
          <span class="nav-subtitle-row">Agentic Professionals</span>
        </a>
      </li>

      <!-- V Dropdown Icon (Blogs & Articles, APNET Forums, MSME Sahyog) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-more-wrapper">
        <button class="nav-icon-wireframe" id="nav-more-btn" type="button" aria-label="More options"
          aria-haspopup="true" aria-expanded="false">
          <svg class="nav-v-svg" width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor"
            stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2 3 11 11 20 3"></polyline>
          </svg>
        </button>
        <div class="dropdown-menu dropdown-wireframe-box dropdown-menu-end" id="more-dropdown-menu">
          <a href="blogs_articles.html" class="dropdown-wireframe-item" id="nav-item-dir-blogs">
            Blogs &amp; Articles
          </a>
          <a href="https://forums.agenticprofessionals.net" target="_blank" rel="noopener noreferrer"
            class="dropdown-wireframe-item" id="nav-item-dir-forums">
            APNET Forums <i class="fa-solid fa-arrow-up-right-from-square"
              style="font-size: 0.65rem; margin-left: 4px; color: #94a3b8;"></i>
          </a>
          <a href="https://hayagriva.app" target="_blank" rel="noopener noreferrer" class="dropdown-wireframe-item"
            id="nav-item-dir-sahyog">
            MSME Sahyog <i class="fa-solid fa-arrow-up-right-from-square"
              style="font-size: 0.65rem; margin-left: 4px; color: #94a3b8;"></i>
          </a>
        </div>
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
      } else if (hash.startsWith('#blogs') || hash.startsWith('#articles')) {
        setActive('nav-more-btn', 'nav-item-dir-blogs');
      } else if (hash.startsWith('#bazaar') || hash.startsWith('#reports') || hash.startsWith('#process') || hash.startsWith('#engine')) {
        setActive('nav-agents');
      }
    } else if (path === 'pipie_ide.html') {
      setActive('nav-workspace');
    } else if (path === 'pipie_assets.html') {
      setActive('nav-lexai');
    } else if (path === 'directory_listing.html') {
      setActive('nav-directories');
    } else if (path === 'blogs_articles.html') {
      setActive('nav-more-btn', 'nav-item-dir-blogs');
    } else if (path === 'harness_haya_engine.html') {
      setActive('nav-agents');
    } else if (path === 'harness_haya_vaults.html') {
      setActive('nav-agents');
    } else if (path === 'harness_haya_models.html') {
      setActive('nav-agents');
    } else if (path === 'agents_process_agents.html') {
      setActive('nav-agents', 'nav-item-agent-29a');
    } else if (path === 'agents_reporting_agents.html') {
      setActive('nav-agents', 'nav-item-agent-39c');
    } else if (path === 'chatroom.html') {
      setActive('nav-agents', 'nav-item-sol-chatrooms');
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
