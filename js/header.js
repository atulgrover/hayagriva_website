/**
 * AgenticProfessionals.Net - Shared Site Header Component
 * Dynamically loads header.html as the SINGLE SOURCE OF TRUTH across all pages.
 * Handles active route detection and dropdown interactivity.
 */

(function () {
  const fallbackHTML = `<!-- ======================================================================
     AgenticProfessionals.Net - Shared Site Header Component
     Brand: Agentic Professionals (Sovereign Intelligence)
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

    <!-- Brand Identity -->
    <a href="index.html#home" class="brand-block-wireframe" id="header-brand-logo" aria-label="Agentic Professionals Home">
      <img src="branding/hayagriva_knight_light.png" alt="Hayagriva Knight Logo" class="brand-logo-img" />
      <div class="brand-text-block">
        <span class="brand-main-title">AGENTIC PROFESSIONALS</span>
        <span class="brand-sub-url">SOVEREIGN INTELLIGENCE (AIR-GAPPED)</span>
      </div>
    </a>

    <!-- Primary Navigation Menu -->
    <ul class="nav-menu" id="header-nav-menu">

      <!-- 0. Home Icon Link -->
      <li class="nav-item">
        <a href="index.html#home" class="nav-icon-wireframe" id="nav-home" aria-label="Home" title="Home">
          <i class="fa-solid fa-house nav-home-icon"></i>
        </a>
      </li>


      <!-- 2. KNOWLEDGE (Legal Vaults) -->
      <li class="nav-item">
        <a href="knowledge.html" class="nav-link nav-link-wireframe" id="nav-knowledge">
          <span class="nav-title-row">KNOWLEDGE</span>
          <span class="nav-subtitle-row">Legal Vaults</span>
        </a>
      </li>

      <!-- 3. INTELLIGENCE (Sovereign AI) -->
      <li class="nav-item">
        <a href="intelligence.html" class="nav-link nav-link-wireframe" id="nav-intelligence">
          <span class="nav-title-row">INTELLIGENCE</span>
          <span class="nav-subtitle-row">Sovereign AI</span>
        </a>
      </li>

      <!-- 4. CO-COUNSEL (Chamber Personas) -->
      <li class="nav-item">
        <a href="agents.html" class="nav-link nav-link-wireframe" id="nav-agents">
          <span class="nav-title-row">CO-COUNSEL</span>
          <span class="nav-subtitle-row">Chamber Personas</span>
        </a>
      </li>

      <!-- 5. DIRECTORY (Agentic Professionals) -->
      <li class="nav-item">
        <a href="community.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">DIRECTORY</span>
          <span class="nav-subtitle-row">Agentic Professionals</span>
        </a>
      </li>

      <!-- 6. Portal Login CTA -->
      <li class="nav-item">
        <a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer" class="portal-cta-main" id="nav-portal-login">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          <span>LOGIN</span>
        </a>
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
      const currentHeader = mountContainer.querySelector('#site-header');
      const temp = document.createElement('div');
      temp.innerHTML = htmlContent.trim();
      const newHeader = temp.querySelector('#site-header');

      // If header is already populated and matches, avoid DOM teardown to prevent jump/shake
      if (currentHeader && newHeader && currentHeader.innerHTML.trim() === newHeader.innerHTML.trim()) {
        updateActiveNav();
        return;
      }

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
      if (hash.startsWith('#home') || hash.startsWith('#context') || hash === '') {
        setActive('nav-home');
      } else if (hash.startsWith('#knowledge')) {
        setActive('nav-knowledge');
      } else if (hash.startsWith('#intelligence') || hash.startsWith('#workbench') || hash.startsWith('#models')) {
        setActive('nav-intelligence');
      } else if (hash.startsWith('#cocounsel') || hash.startsWith('#co-counsel') || hash.startsWith('#agents') || hash.startsWith('#coworkers') || hash.startsWith('#actions')) {
        setActive('nav-agents');
      } else if (hash.startsWith('#directory') || hash.startsWith('#directories') || hash.startsWith('#community') || hash.startsWith('#network')) {
        setActive('nav-community');
      }
    } else if (path === 'knowledge.html' || path.startsWith('vaults_')) {
      setActive('nav-knowledge');
    } else if (path === 'intelligence.html' || path.startsWith('models_') || path.startsWith('harness_haya_')) {
      setActive('nav-intelligence');
    } else if (path === 'agents.html' || path === 'cocounsel.html' || path === 'co-counsel.html' || path.startsWith('agents_') || path.startsWith('marketplace_reporting_') || path.includes('telephone_cables')) {
      setActive('nav-agents');
    } else if (path === 'community.html' || path === 'directory.html' || path.startsWith('directories_') || path === 'directory_listing.html' || path === 'resolutionbazaar.html' || path === 'pipie_assets.html' || path.includes('FINAL_29A')) {
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
  // Unified Practitioner Authentication & SSO Controller
  // =========================================================================
  let currentModalIntent = 'download'; // 'download' | 'directory' | 'account'

  function ensureAuthLoaded() {
    if (!window.HayagrivaAuth && !document.querySelector('script[src*="js/auth.js"]')) {
      const s = document.createElement('script');
      s.src = 'js/auth.js';
      document.head.appendChild(s);
    }
  }
  ensureAuthLoaded();

  function detectClientOS() {
    const ua = navigator.userAgent || '';
    if (/Macintosh|Mac OS X/.test(ua)) {
      return (navigator.userAgentData?.architecture === 'arm' || /ARM/.test(ua) || (navigator.maxTouchPoints > 0 && !window.MSStream)) ? 'mac-arm' : 'mac-intel';
    }
    if (/Windows/.test(ua)) return 'windows';
    if (/Linux/.test(ua)) return 'linux-appimage';
    return 'mac-arm';
  }

  function highlightDetectedOS() {
    const detected = detectClientOS();
    ['mac-arm', 'mac-intel', 'windows', 'linux-appimage'].forEach(function(os) {
      const card = document.getElementById('card-' + os);
      if (card) {
        if (os === detected) {
          card.classList.add('detected-os');
        } else {
          card.classList.remove('detected-os');
        }
      }
    });
  }

  window.switchAuthTab = function(tabName) {
    const btnSignin = document.getElementById('tab-btn-signin');
    const btnReg = document.getElementById('tab-btn-register');
    const paneSignin = document.getElementById('auth-subpane-signin');
    const paneReg = document.getElementById('auth-subpane-register');
    const alertBox = document.getElementById('auth-alert-box');
    if (alertBox) alertBox.style.display = 'none';

    if (tabName === 'register') {
      if (btnReg) btnReg.classList.add('active');
      if (btnSignin) btnSignin.classList.remove('active');
      if (paneReg) paneReg.style.display = 'block';
      if (paneSignin) paneSignin.style.display = 'none';
    } else {
      if (btnSignin) btnSignin.classList.add('active');
      if (btnReg) btnReg.classList.remove('active');
      if (paneSignin) paneSignin.style.display = 'block';
      if (paneReg) paneReg.style.display = 'none';
    }
  };

  function updateModalHeaders(intent, isAuthenticated, user) {
    const titleEl = document.getElementById('unified-modal-title');
    const subEl = document.getElementById('unified-modal-subtitle');
    const badgeEl = document.getElementById('unified-modal-badge');

    if (!isAuthenticated) {
      if (intent === 'download') {
        if (titleEl) titleEl.textContent = 'Unlock Hayagriva Controller';
        if (subEl) subEl.textContent = 'Sign in or register once to access sovereign installer binaries for Mac, Windows & Linux.';
        if (badgeEl) badgeEl.innerHTML = '<i class="fa-solid fa-gift"></i> FREE PROMOTION';
      } else if (intent === 'directory') {
        if (titleEl) titleEl.textContent = 'Accredited Practitioner Directory';
        if (subEl) subEl.textContent = 'Sign in or register to verify your professional credentials and join the national map.';
        if (badgeEl) badgeEl.innerHTML = '<i class="fa-solid fa-address-card"></i> DIRECTORY INTAKE';
      } else if (intent === 'chat') {
        if (titleEl) titleEl.textContent = 'Access Co-Counsel Advisory';
        if (subEl) subEl.textContent = 'Sign in or register to unlock live LightRAG precedent graphs and confidential queries.';
        if (badgeEl) badgeEl.innerHTML = '<i class="fa-solid fa-brain"></i> COGNITIVE ADVISORY';
      } else {
        if (titleEl) titleEl.textContent = 'Practitioner Chamber Sign In';
        if (subEl) subEl.textContent = 'Universal Single Sign-On across Controller Desktop, Knowledge Graph & National Directory.';
        if (badgeEl) badgeEl.innerHTML = '<i class="fa-solid fa-shield-halved"></i> SOVEREIGN SSO';
      }
    } else {
      if (intent === 'download') {
        if (titleEl) titleEl.textContent = 'Hayagriva Controller Binaries';
        if (subEl) subEl.textContent = '100% Air-Gapped & Local-First Desktop Runtime for Insolvency Professionals.';
        if (badgeEl) badgeEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> LICENSED RUNTIME';
      } else if (intent === 'directory') {
        if (titleEl) titleEl.textContent = 'Accredited Directory Profile';
        if (subEl) subEl.textContent = 'Your verified national profile & bench map status.';
        if (badgeEl) badgeEl.innerHTML = '<i class="fa-solid fa-id-badge"></i> DIRECTORY MEMBER';
      } else {
        if (titleEl) titleEl.textContent = 'Practitioner Chamber Account';
        if (subEl) subEl.textContent = 'Central Identity, Active Licenses & Single Sign-On Entitlements.';
        if (badgeEl) badgeEl.innerHTML = '<i class="fa-solid fa-user-shield"></i> ACTIVE SESSION';
      }
    }

    // Update display name across all views
    const displayName = (user && (user.name || user.email?.split('@')[0])) || 'Practitioner';
    document.querySelectorAll('.auth-user-display-name').forEach(function(el) {
      el.textContent = displayName;
    });

    const userEmail = (user && user.email) || '';
    const accEmail = document.getElementById('account-user-email');
    if (accEmail) accEmail.textContent = userEmail;
    const dirEmail = document.getElementById('directory-user-email');
    if (dirEmail) dirEmail.textContent = userEmail;
  }

  window.openUnifiedAuthModal = function(intent = 'download') {
    currentModalIntent = intent;
    const modal = document.getElementById('unified-auth-modal');
    if (!modal) return;

    const isAuth = window.HayagrivaAuth ? window.HayagrivaAuth.isAuthenticated() : false;
    const user = window.HayagrivaAuth ? window.HayagrivaAuth.getUser() : null;

    updateModalHeaders(intent, isAuth, user);

    const unauthPane = document.getElementById('auth-unauthenticated-pane');
    const authPane = document.getElementById('auth-authenticated-pane');
    const viewDl = document.getElementById('unified-view-downloads');
    const viewDir = document.getElementById('unified-view-directory');
    const viewAcc = document.getElementById('unified-view-account');

    if (!isAuth) {
      if (unauthPane) unauthPane.style.display = 'block';
      if (authPane) authPane.style.display = 'none';
      window.switchAuthTab(intent === 'account' ? 'signin' : 'register');
    } else {
      if (unauthPane) unauthPane.style.display = 'none';
      if (authPane) authPane.style.display = 'block';

      if (viewDl) viewDl.style.display = (intent === 'download') ? 'block' : 'none';
      if (viewDir) viewDir.style.display = (intent === 'directory') ? 'block' : 'none';
      if (viewAcc) viewAcc.style.display = (intent === 'account') ? 'block' : 'none';

      if (intent === 'download') {
        highlightDetectedOS();
      }
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  window.closeUnifiedAuthModal = function() {
    const modal = document.getElementById('unified-auth-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  function showAlert(msg, isError = true) {
    const box = document.getElementById('auth-alert-box');
    if (!box) return;
    box.style.display = 'block';
    box.style.background = isError ? '#fef2f2' : '#f0fdf4';
    box.style.color = isError ? '#991b1b' : '#166534';
    box.style.border = isError ? '1px solid #fecaca' : '1px solid #bbf7d0';
    box.innerHTML = (isError ? '<i class="fa-solid fa-triangle-exclamation"></i> ' : '<i class="fa-solid fa-circle-check"></i> ') + msg;
  }

  window.handleUnifiedSignIn = async function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('signin-email')?.value?.trim();
    const password = document.getElementById('signin-password')?.value;
    const submitBtn = document.getElementById('btn-signin-submit');

    if (!email || !password) {
      showAlert('Please enter both your email address and password.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';
    }

    try {
      const res = await window.HayagrivaAuth.login(email, password);
      if (res.success) {
        if (currentModalIntent === 'chat') {
          window.closeUnifiedAuthModal();
          window.open('https://chats.agenticprofessionals.net/workspace/', '_blank');
          return;
        }
        window.openUnifiedAuthModal(currentModalIntent);
      }
    } catch (err) {
      showAlert(err.message || 'Login failed. Please check your credentials.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-unlock-keyhole"></i> Sign In &amp; Continue ➔';
      }
    }
  };

  window.handleUnifiedRegister = async function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById('reg-name')?.value?.trim();
    const role = document.getElementById('reg-role')?.value || 'ip';
    const email = document.getElementById('reg-email')?.value?.trim();
    const password = document.getElementById('reg-password')?.value;
    const regNo = document.getElementById('reg-ibbi-no')?.value?.trim();
    const city = document.getElementById('reg-city')?.value || 'New Delhi';
    const address = document.getElementById('reg-address')?.value?.trim() || '';
    const submitBtn = document.getElementById('btn-register-submit');

    if (!name || !email || !password) {
      showAlert('Please complete all required fields.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Registering Account...';
    }

    try {
      const res = await window.HayagrivaAuth.register({
        name: name,
        role: role,
        email: email,
        password: password,
        reg_no: regNo,
        city: city,
        address: address
      });
      if (res.success) {
        if (currentModalIntent === 'chat') {
          window.closeUnifiedAuthModal();
          window.open('https://chats.agenticprofessionals.net/workspace/', '_blank');
          return;
        }
        window.openUnifiedAuthModal(currentModalIntent);
      }
    } catch (err) {
      showAlert(err.message || 'Registration failed.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-user-check"></i> Register &amp; Continue ➔';
      }
    }
  };

  window.handleUpdateDirectoryProfile = function() {
    if (!window.HayagrivaAuth) return;
    const user = window.HayagrivaAuth.getUser();
    if (!user) return;

    const city = document.getElementById('auth-update-city')?.value || 'New Delhi';
    const regNo = document.getElementById('auth-update-regno')?.value?.trim() || '';
    const address = document.getElementById('auth-update-address')?.value?.trim() || '';

    user.city = city;
    user.reg_no = regNo;
    user.address = address;
    user.is_directory_listed = true;

    window.HayagrivaAuth.setSession(window.HayagrivaAuth.getToken(), user);

    // If on directory page, refresh the map and roster immediately
    if (typeof reloadDirectoryData === 'function') {
      reloadDirectoryData();
    }

    alert('Your chamber profile and NCLT bench pin have been updated successfully!');
    window.openUnifiedAuthModal('directory');
  };

  window.handleAuthLogout = function() {
    if (window.HayagrivaAuth) {
      window.HayagrivaAuth.logout();
    }
    window.openUnifiedAuthModal('account');
  };

  // Close on outside click & Escape
  document.addEventListener('click', function(e) {
    const modal = document.getElementById('unified-auth-modal');
    if (modal && modal.style.display === 'flex' && e.target === modal) {
      window.closeUnifiedAuthModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.closeUnifiedAuthModal();
    }
  });

  // Seamless Legacy Bridges
  window.openIdeDownloadModal = function() { window.openUnifiedAuthModal('download'); };
  window.closeIdeDownloadModal = function() { window.closeUnifiedAuthModal(); };
  window.openAddMeModal = function() { window.openUnifiedAuthModal('directory'); };
  window.closeAddMeModal = function() { window.closeUnifiedAuthModal(); };
  window.openAccountModal = function() { window.openUnifiedAuthModal('account'); };
  window.closeAccountModal = function() { window.closeUnifiedAuthModal(); };
  window.openChatWorkspace = function() {
    if (window.HayagrivaAuth && window.HayagrivaAuth.isAuthenticated()) {
      window.open('https://chats.agenticprofessionals.net/workspace/', '_blank');
    } else {
      window.openUnifiedAuthModal('chat');
    }
  };

  // Auto-open modal if URL hash is #download or #login
  if (window.location.hash === '#download' || window.location.search.includes('download=1')) {
    setTimeout(function() { window.openUnifiedAuthModal('download'); }, 300);
  } else if (window.location.hash === '#login' || window.location.hash === '#account') {
    setTimeout(function() { window.openUnifiedAuthModal('account'); }, 300);
  }

})();
