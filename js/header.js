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
       1. WORKBENCH (Sovereign Harness, Deterministic Engine)
       2. INTELLIGENCE (BharatGen Models, Knowledge Vaults)
       3. AGENTS (Air Gapped Agents, Air Trusted Agents)
       4. COMMUNITY (Network Websites & Ecosystem Resources)
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
                <div class="dropdown-menu dropdown-menu-compact" id="workbench-dropdown-menu">
          <div class="mega-col-wireframe-links">
            <a href="harness_haya_workbench.html" class="mega-item-wireframe" id="nav-wb-sovereign-ide">
              <div class="mega-item-icon-box icon-purple">
                <i class="fa-solid fa-cube"></i>
              </div>
              <div class="mega-item-text-group">
                <span class="mega-item-wireframe-name">Sovereign Harness</span>
                <span class="mega-item-wireframe-desc">Air-gapped Desktop IDE &amp; Local Runtime</span>
              </div>
              <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
            </a>
            <a href="harness_haya_engine.html" class="mega-item-wireframe" id="nav-wb-core-engine">
              <div class="mega-item-icon-box icon-blue">
                <i class="fa-solid fa-microchip"></i>
              </div>
              <div class="mega-item-text-group">
                <span class="mega-item-wireframe-name">Deterministic Engine</span>
                <span class="mega-item-wireframe-desc">FTS5 Lexical Search, ONNX Vectors &amp; PageIndex</span>
              </div>
              <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
            </a>
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
                <div class="dropdown-menu dropdown-menu-compact" id="intelligence-dropdown-menu">
          <div class="mega-col-wireframe-links">
            <a href="models_domain_slms.html" class="mega-item-wireframe" id="nav-intel-bharatgen">
              <div class="mega-item-icon-box icon-rose">
                <i class="fa-solid fa-brain"></i>
              </div>
              <div class="mega-item-text-group">
                <span class="mega-item-wireframe-name">BharatGen Models</span>
                <span class="mega-item-wireframe-desc">India-Specific SLMs, Multilingual Reasoning &amp; Local GGUFs</span>
              </div>
              <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
            </a>
            <a href="harness_haya_vaults.html" class="mega-item-wireframe" id="nav-intel-vaults">
              <div class="mega-item-icon-box icon-teal">
                <i class="fa-solid fa-vault"></i>
              </div>
              <div class="mega-item-text-group">
                <span class="mega-item-wireframe-name">Knowledge Vaults</span>
                <span class="mega-item-wireframe-desc">Statutory Bare Acts, Practice Suites &amp; Judicial Precedents</span>
              </div>
              <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
            </a>
          </div>
        </div>
      </li>

      <!-- 3. AGENTS Dropdown (Co-Counsels) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-agents-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-agents" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>IBC AGENTS</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">Co-Counsels</span>
        </button>
                <div class="dropdown-menu dropdown-menu-compact" id="agents-dropdown-menu">
          <div class="mega-col-wireframe-links">
            <!-- 1. Air Gapped Agents -->
            <a href="agents_insolvency.html" class="mega-item-wireframe" id="nav-agent-air-gapped">
              <div class="mega-item-icon-box icon-emerald">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div class="mega-item-text-group">
                <span class="mega-item-wireframe-name">Air Gapped Agents</span>
                <span class="mega-item-wireframe-desc">100% Offline Local SLM Inference &amp; Zero Data Leakage</span>
              </div>
              <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
            </a>

            <!-- 2. Air Trusted Agents -->
            <a href="agents_process_agents.html" class="mega-item-wireframe" id="nav-agent-air-trusted">
              <div class="mega-item-icon-box icon-blue">
                <i class="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <div class="mega-item-text-group">
                <span class="mega-item-wireframe-name">Air Trusted Agents</span>
                <span class="mega-item-wireframe-desc">Verified Cryptographic Fencing &amp; Cloud MCP Gateway</span>
              </div>
              <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
            </a>
          </div>
        </div>
      </li>

      <!-- 4. COMMUNITY Dropdown (APNET Resources - 2 Section Mega Menu) -->
      <li class="nav-item nav-item-dropdown" id="dropdown-community-wrapper">
        <button class="nav-link nav-link-wireframe" id="nav-community" type="button" aria-haspopup="true"
          aria-expanded="false">
          <span class="nav-title-row">
            <span>COMMUNITY</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </span>
          <span class="nav-subtitle-row">APNET Resources</span>
        </button>
        <div class="dropdown-menu mega-menu-2col dropdown-menu-end" id="community-dropdown-menu">
          <div class="mega-grid-2col">

            <!-- Section 1: Network Websites -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-amber"><i class="fa-solid fa-globe"></i></span>
                  <span class="mega-col-wireframe-title">NETWORK WEBSITES</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="mega-item-wireframe" id="nav-comm-hayagriva-ai">
                  <div class="mega-item-icon-box icon-blue">
                    <i class="fa-solid fa-horse-head"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Hayagriva AI</span>
                    <span class="mega-item-wireframe-desc">Sovereign Legal Intelligence</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow" style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
                <a href="https://haya-website.onrender.com" target="_blank" rel="noopener noreferrer" class="mega-item-wireframe" id="nav-comm-skillpedia">
                  <div class="mega-item-icon-box icon-purple">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Skillpedia</span>
                    <span class="mega-item-wireframe-desc">Professional Upskilling</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow" style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
              </div>
            </div>

            <!-- Section 2: Ecosystem Resources -->
            <div class="mega-col-wireframe">
              <div class="mega-col-wireframe-header">
                <div class="mega-col-header-left">
                  <span class="mega-col-icon-pill pill-purple"><i class="fa-solid fa-users"></i></span>
                  <span class="mega-col-wireframe-title">ECOSYSTEM RESOURCES</span>
                </div>
              </div>
              <div class="mega-col-wireframe-links">
                <a href="directory_listing.html" class="mega-item-wireframe" id="nav-comm-dir-all">
                  <div class="mega-item-icon-box icon-teal">
                    <i class="fa-solid fa-address-book"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Directory Listing</span>
                    <span class="mega-item-wireframe-desc">Professionals &amp; Enterprises</span>
                  </div>
                  <i class="fa-solid fa-arrow-right mega-item-arrow"></i>
                </a>
                <a href="https://agenticprofessionals.zulipchat.com" target="_blank" rel="noopener noreferrer" class="mega-item-wireframe" id="nav-comm-forums">
                  <div class="mega-item-icon-box icon-rose">
                    <i class="fa-solid fa-comments"></i>
                  </div>
                  <div class="mega-item-text-group">
                    <span class="mega-item-wireframe-name">Discussion Forums</span>
                    <span class="mega-item-wireframe-desc">Communication Hub</span>
                  </div>
                  <i class="fa-solid fa-arrow-up-right-from-square mega-item-arrow" style="font-size: 0.72rem; color: #94a3b8;"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <!-- 5. Right Action: Hayagriva App Downloads Menu -->
      <li class="nav-item nav-item-dropdown nav-item-cta" id="nav-action-download-wrapper">
        <div class="nav-action-cluster nav-tooltip-wrap" data-tooltip="Download Hayagriva">
          <button type="button" class="nav-icon-wireframe nav-portal-btn" id="btn-download-app" aria-label="Download Hayagriva" title="Download Hayagriva" aria-haspopup="true" aria-expanded="false">
            <i class="fa-solid fa-download nav-portal-icon"></i>
          </button>
        </div>
        <div class="dropdown-menu dropdown-menu-end download-dropdown-menu" id="download-dropdown-menu">
          <div class="download-menu-header">
            <div class="download-menu-title">
              <i class="fa-solid fa-download" style="color: #0284c7;"></i>
              <span>Download Hayagriva</span>
            </div>
            <span class="download-menu-badge">v1.17</span>
          </div>

          <div class="download-menu-list">
            <!-- Windows (Direct Cloudflare Download) -->
            <a href="https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva-Setup-1.17.0.exe"
               download="Hayagriva-Setup-1.17.0.exe"
               class="download-menu-item download-item-active"
               id="dl-opt-windows"
               title="Download Hayagriva for Windows">
              <div class="download-item-icon icon-windows">
                <i class="fa-brands fa-windows"></i>
              </div>
              <div class="download-item-body">
                <div class="download-item-title-row">
                  <span class="download-item-name">Windows</span>
                  <span class="badge-direct-dl"><i class="fa-solid fa-cloud-arrow-down"></i> Direct</span>
                </div>
                <span class="download-item-desc">64-bit (.exe) · Cloudflare Mirror</span>
              </div>
              <i class="fa-solid fa-arrow-down download-item-action-icon"></i>
            </a>

            <!-- Linux (Coming Soon) -->
            <div class="download-menu-item download-item-disabled" id="dl-opt-linux" title="Linux - Coming Soon">
              <div class="download-item-icon icon-linux">
                <i class="fa-brands fa-linux"></i>
              </div>
              <div class="download-item-body">
                <div class="download-item-title-row">
                  <span class="download-item-name">Linux</span>
                  <span class="badge-coming-soon">Coming Soon</span>
                </div>
                <span class="download-item-desc">Universal AppImage / .deb</span>
              </div>
            </div>

            <!-- Mac-i (Intel - Coming Soon) -->
            <div class="download-menu-item download-item-disabled" id="dl-opt-mac-i" title="Mac-i (Intel) - Coming Soon">
              <div class="download-item-icon icon-mac">
                <i class="fa-brands fa-apple"></i>
              </div>
              <div class="download-item-body">
                <div class="download-item-title-row">
                  <span class="download-item-name">Mac-i</span>
                  <span class="badge-coming-soon">Coming Soon</span>
                </div>
                <span class="download-item-desc">Intel Core (x86_64)</span>
              </div>
            </div>

            <!-- Mac-M (Apple Silicon - Coming Soon) -->
            <div class="download-menu-item download-item-disabled" id="dl-opt-mac-m" title="Mac-M (Apple Silicon) - Coming Soon">
              <div class="download-item-icon icon-mac">
                <i class="fa-brands fa-apple"></i>
              </div>
              <div class="download-item-body">
                <div class="download-item-title-row">
                  <span class="download-item-name">Mac-M</span>
                  <span class="badge-coming-soon">Coming Soon</span>
                </div>
                <span class="download-item-desc">Apple Silicon (M1–M5)</span>
              </div>
            </div>
          </div>

          <div class="download-menu-footer">
            <i class="fa-solid fa-shield-halved"></i>
            <span>100% Sovereign &amp; Air-Gapped Desktop IDE</span>
          </div>
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

    document.querySelectorAll('.site-header .dropdown-item, .site-header .mega-item-wireframe, .site-header .dropdown-wireframe-item, .site-header .download-item-active').forEach(link => {
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
      'windows': 'https://pub-35371afc7da748a481da639a4f0d486e.r2.dev/Hayagriva-Setup-1.17.0.exe',
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
