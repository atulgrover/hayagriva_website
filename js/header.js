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

      <!-- 1. CONTROLLER (Sovereign Harness) -->
      <li class="nav-item">
        <a href="harness_haya_workbench.html" class="nav-link nav-link-wireframe" id="nav-controller">
          <span class="nav-title-row">CONTROLLER</span>
          <span class="nav-subtitle-row">Sovereign Harness</span>
        </a>
      </li>

      <!-- 2. CO-WORKERS (Custom Agents) -->
      <li class="nav-item">
        <a href="agents_insolvency.html" class="nav-link nav-link-wireframe" id="nav-coworkers">
          <span class="nav-title-row">CO-WORKERS</span>
          <span class="nav-subtitle-row">Custom Agents</span>
        </a>
      </li>

      <!-- 3. CO-COUNSEL (Confidential Advice) -->
      <li class="nav-item">
        <a href="chatroom.html" class="nav-link nav-link-wireframe" id="nav-cocounsel">
          <span class="nav-title-row">CO-COUNSEL</span>
          <span class="nav-subtitle-row">Confidential Advice</span>
        </a>
      </li>

      <!-- 4. COLLECTIVE (Discussion Forum) -->
      <li class="nav-item">
        <a href="collective.html" class="nav-link nav-link-wireframe" id="nav-collective">
          <span class="nav-title-row">COLLECTIVE</span>
          <span class="nav-subtitle-row">Discussion Forum</span>
        </a>
      </li>

      <!-- 5. COMMUNITY (Directory Listing) -->
      <li class="nav-item">
        <a href="directory_listing.html" class="nav-link nav-link-wireframe" id="nav-community">
          <span class="nav-title-row">COMMUNITY</span>
          <span class="nav-subtitle-row">Directory Listing</span>
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
      } else if (hash.startsWith('#controller') || hash.startsWith('#workbench') || hash.startsWith('#harness')) {
        setActive('nav-controller');
      } else if (hash.startsWith('#coworkers') || hash.startsWith('#agents')) {
        setActive('nav-coworkers');
      } else if (hash.startsWith('#cocounsel') || hash.startsWith('#chats') || hash.startsWith('#counsel')) {
        setActive('nav-cocounsel');
      } else if (hash.startsWith('#collective') || hash.startsWith('#forums')) {
        setActive('nav-collective');
      } else if (hash.startsWith('#community') || hash.startsWith('#directories') || hash.startsWith('#listing')) {
        setActive('nav-community');
      }
    } else if (path.startsWith('harness_haya_') || path === 'controller.html' || path.startsWith('models_') || path.startsWith('vaults_')) {
      setActive('nav-controller');
    } else if (path.startsWith('agents_') || path.startsWith('marketplace_reporting_') || path.includes('telephone_cables')) {
      setActive('nav-coworkers');
    } else if (path === 'chatroom.html') {
      setActive('nav-cocounsel');
    } else if (path === 'collective.html') {
      setActive('nav-collective');
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
