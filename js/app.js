/**
 * AgenticProfessionals.Net - Single Page Application Router & State Manager
 * Handles Header Navigation, Dropdowns, Agent Filters, Directory Deep-linking, and Login Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupAgentFilters();
  setupLoginModal();
  setupClaimModal();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
});

/**
 * Route switcher supporting:
 * #home
 * #chats (ChatIBC)
 * #engine (Haya Engine)
 * #vaults (Haya Vaults)
 * #models (Haya Models)
 * #agents?type=process|reporting
 * #listing?category=ip|rv|counsel
 * #login-licenses, #login-payments, #login-profile
 */
function handleRoute() {
  const rawHash = window.location.hash || '#home';
  const cleanHash = rawHash.replace('#', '');
  const [routePart, queryPart] = cleanHash.split('?');
  const route = routePart.toLowerCase();
  const params = new URLSearchParams(queryPart || '');

  // Handle Login Modal direct hash triggers
  if (route.startsWith('login-')) {
    const tabName = route.replace('login-', '');
    openLoginModal(tabName);
    return;
  }

  // Hide all sections
  document.querySelectorAll('.view-section').forEach(el => {
    el.classList.remove('active');
  });

  // Clear active links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Toggle body fullscreen class for full-viewport views
  if (route === 'chats' || route === 'listing') {
    document.body.classList.add('view-fullscreen-active');
  } else {
    document.body.classList.remove('view-fullscreen-active');
  }

  // Activate matching view
  let targetViewId = 'view-home';
  let activeNavId = 'nav-home';

  if (route === 'home') {
    targetViewId = 'view-home';
    activeNavId = 'header-brand-logo';
  } else if (route === 'chats' || route === 'workspace') {
    targetViewId = 'view-chats';
    activeNavId = 'nav-workspace';
  } else if (route === 'engine') {
    targetViewId = 'view-engine';
    activeNavId = 'nav-agents';
  } else if (route === 'vaults') {
    targetViewId = 'view-vaults';
    activeNavId = 'nav-agents';
  } else if (route === 'models') {
    targetViewId = 'view-models';
    activeNavId = 'nav-agents';
  } else if (route === 'agents') {
    targetViewId = 'view-agents';
    activeNavId = 'nav-agents';
    const agentType = params.get('type') || 'all';
    filterAgents(agentType);
  } else if (route === 'skills') {
    targetViewId = 'view-home';
    activeNavId = 'nav-skills';
  } else if (route === 'listing') {
    targetViewId = 'view-listing';
    activeNavId = 'nav-directories';
    const category = params.get('category');
    if (category) {
      const categorySelect = document.getElementById('dir-category-filter');
      if (categorySelect) {
        categorySelect.value = category;
        categorySelect.dispatchEvent(new Event('change'));
      }
    }
    // Initialize Leaflet map on route entrance
    setTimeout(() => {
      if (typeof initDirectory === 'function') {
        initDirectory();
        if (typeof mapInstance !== 'undefined' && mapInstance) {
          mapInstance.invalidateSize();
        }
      }
    }, 100);
  } else if (route === 'blogs' || route === 'articles') {
    targetViewId = 'view-blogs';
    activeNavId = 'nav-directories';
  } else if (route === 'forums') {
    targetViewId = 'view-home';
    activeNavId = 'nav-forums';
  } else {
    targetViewId = 'view-home';
    activeNavId = 'header-brand-logo';
  }

  const targetView = document.getElementById(targetViewId);
  if (targetView) targetView.classList.add('active');

  const activeNav = document.getElementById(activeNavId);
  if (activeNav) activeNav.classList.add('active');

  // Close any open dropdown menus
  closeAllDropdowns();
}

/**
 * Navbar dropdowns are centrally managed by js/header.js.
 * closeAllDropdowns closes any open header dropdowns during SPA route transitions.
 */
function closeAllDropdowns() {
  document.querySelectorAll('.site-header .nav-item-dropdown').forEach(item => {
    item.classList.remove('dropdown-open');
    const toggleBtn = item.querySelector('.nav-link');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  });
}

/**
 * Filter CIRP Agents by type: 'all', 'process', 'reporting'
 */
function setupAgentFilters() {
  const filterBtns = document.querySelectorAll('.agent-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterType = btn.getAttribute('data-agent-filter') || 'all';
      filterAgents(filterType);
    });
  });
}

function filterAgents(type) {
  // Update button active state
  document.querySelectorAll('.agent-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-agent-filter') === type) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Show/hide cards
  const cards = document.querySelectorAll('#agents-catalog-grid .catalog-card');
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-agent-category');
    if (type === 'all' || cardCategory === type) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Login / Account Modal Controller (Licenses, Payments, Profile)
 */
function setupLoginModal() {
  const modal = document.getElementById('login-account-modal');
  const closeBtn = document.getElementById('btn-close-login-modal');
  const tabBtns = document.querySelectorAll('.modal-tab-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLoginModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLoginModal();
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      switchLoginTab(tabName);
    });
  });

  // Copy License Key Button
  const copyBtn = document.getElementById('btn-copy-license');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('HAYA-ENT-2026-X892-CIRP-SOV-91A7');
      const origHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#10b981;"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = origHtml;
      }, 1500);
    });
  }
}

function openLoginModal(tabName = 'licenses') {
  const modal = document.getElementById('login-account-modal');
  if (!modal) return;

  switchLoginTab(tabName);
  modal.classList.add('active');
}

function closeLoginModal() {
  const modal = document.getElementById('login-account-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function switchLoginTab(tabName) {
  // Update tabs
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update panes
  document.querySelectorAll('.modal-tab-pane').forEach(pane => {
    if (pane.getAttribute('data-tab-pane') === tabName) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });
}

function setupNavigation() {
  // Reload iframe button if present
  const reloadChatsBtn = document.getElementById('btn-reload-chats');
  if (reloadChatsBtn) {
    reloadChatsBtn.addEventListener('click', () => {
      const iframe = document.getElementById('iframe-lightrag');
      if (iframe) {
        iframe.src = iframe.src;
      }
    });
  }

  // Reload forums button if present
  const reloadForumsBtn = document.getElementById('btn-reload-forums');
  if (reloadForumsBtn) {
    reloadForumsBtn.addEventListener('click', () => {
      const iframe = document.getElementById('iframe-discourse');
      if (iframe) {
        iframe.src = iframe.src;
      }
    });
  }
}

/**
 * PIPIE-IDE Gold Member Claim & Download Modal Controller
 */
function setupClaimModal() {
  const modal = document.getElementById('claim-ide-modal');
  const closeBtn = document.getElementById('btn-close-claim-modal');
  const cancelBtn = document.getElementById('btn-cancel-claim');
  const finishBtn = document.getElementById('btn-finish-claim');
  const form = document.getElementById('pipie-claim-form');
  const formPane = document.getElementById('claim-form-pane');
  const successPane = document.getElementById('claim-success-pane');
  const triggers = document.querySelectorAll('.btn-claim-ide-trigger');

  function openClaimModal(selectedOs = null) {
    if (!modal) return;
    if (formPane) formPane.style.display = 'block';
    if (successPane) successPane.style.display = 'none';

    if (selectedOs) {
      const osSelect = document.getElementById('claim-os');
      if (osSelect) osSelect.value = selectedOs;
    }

    modal.classList.add('active');
  }

  function closeClaimModal() {
    if (modal) modal.classList.remove('active');
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const os = btn.getAttribute('data-os');
      openClaimModal(os);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeClaimModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeClaimModal);
  if (finishBtn) finishBtn.addEventListener('click', closeClaimModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeClaimModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeClaimModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('claim-name');
      const osSelect = document.getElementById('claim-os');
      const nameVal = nameInput ? nameInput.value.trim() : 'Practitioner';
      const osVal = osSelect ? osSelect.value : 'mac-arm';

      const osLabels = {
        'mac-arm': 'PIPIE-IDE v1.0.0 (Apple Silicon M1-M4) · pipie-ide-arm64.dmg',
        'mac-intel': 'PIPIE-IDE v1.0.0 (Intel Mac) · pipie-ide-x64.dmg',
        'windows': 'PIPIE-IDE v1.0.0 (Windows 64-bit) · pipie-ide-setup.exe',
        'linux': 'PIPIE-IDE v1.0.0 (Linux) · pipie-ide.AppImage'
      };

      const nameEl = document.getElementById('success-user-name');
      if (nameEl) nameEl.textContent = nameVal;

      const osEl = document.getElementById('success-os-label');
      if (osEl) osEl.textContent = osLabels[osVal] || 'PIPIE-IDE Desktop Sovereign Build';

      if (formPane) formPane.style.display = 'none';
      if (successPane) successPane.style.display = 'block';
    });
  }

  const downloadBinaryBtn = document.getElementById('btn-download-binary');
  if (downloadBinaryBtn) {
    downloadBinaryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const origText = downloadBinaryBtn.innerHTML;
      downloadBinaryBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mirroring...';
      setTimeout(() => {
        downloadBinaryBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#10b981;"></i> Download Started (Cloudflare CDN)';
        alert('Connecting to Cloudflare Fast CDN Mirror... The PIPIE-IDE binary is downloading to your computer.\n\nBe sure to log into forums.agenticprofessionals.net to receive your Gold Member token!');
        setTimeout(() => {
          downloadBinaryBtn.innerHTML = origText;
        }, 3000);
      }, 700);
    });
  }
}
