
// Global Chambers Contact Submission Handler
function handleContactSubmit(e) {
  if (e) e.preventDefault();
  const name    = document.getElementById('contactName')?.value.trim();
  const contact = document.getElementById('contactContact')?.value.trim();
  const msgText = document.getElementById('contactMsg')?.value.trim();
  const msgEl   = document.getElementById('contact-status-msg');

  if (name && contact && msgText) {
    if (msgEl) {
      msgEl.className = 'contact-status-msg success';
      msgEl.innerText = '✨ Message sent to Chambers! We will respond promptly.';
      msgEl.style.display = 'block';
    }
    if (document.getElementById('contactName')) document.getElementById('contactName').value = '';
    if (document.getElementById('contactContact')) document.getElementById('contactContact').value = '';
    if (document.getElementById('contactMsg')) document.getElementById('contactMsg').value = '';
  }
}
window.handleContactSubmit = handleContactSubmit;

/**
 * AgenticProfessionals.Net - Shared Footer Component (Hayagriva 3-Column Sacred Footer)
 * Automatically injects and controls the unified footer across all pages (index.html, etc.)
 */

// Global Volunteer Submission Handler
function handleVolunteerSubmit(e) {
  if (e) e.preventDefault();
  const name  = document.getElementById('volName')?.value.trim();
  const email = document.getElementById('volEmail')?.value.trim();
  const phone = document.getElementById('volPhone')?.value.trim();
  const msg   = document.getElementById('volunteer-msg');

  if (name && email && phone) {
    if (msg) {
      msg.className = 'volunteer-status-msg success';
      msg.innerText = '✨ Thank you for volunteering! Our team will contact you shortly.';
      msg.style.display = 'block';
    }
    if (document.getElementById('volName')) document.getElementById('volName').value = '';
    if (document.getElementById('volEmail')) document.getElementById('volEmail').value = '';
    if (document.getElementById('volPhone')) document.getElementById('volPhone').value = '';
  }
}
window.handleVolunteerSubmit = handleVolunteerSubmit;

(function () {
  // Ensure footer stylesheet is loaded
  if (!document.querySelector('link[href*="footer.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/footer.css?v=20260915_v3';
    document.head.appendChild(link);
  }

  const fallbackFooterHTML = `<!-- ======================================================================
     Shared Site Footer Component - Hayagriva 3-Column Architecture (40% : 20% : 40%)
     ====================================================================== -->
<link rel="stylesheet" href="css/footer.css?v=20260915_v3">

<footer class="compact-footer" id="site-footer">
  
  <div class="footer-single-row-grid">
    
    <!-- Section 1 (40%): Unified Sacred Card (Emblem ~135px + Single-Line Shloka & Meaning) -->
    <div class="footer-col-sacred">
      <div class="sacred-emblem-wrap">
        <img src="branding/hayagriva_multi_arm_white.png" alt="Lord Hayagriva Sacred Multi-Armed Icon" class="footer-logo-img" width="140" height="155" loading="eager" />
      </div>
      <div class="sacred-shloka-wrap">
        <p class="shloka-devanagari-banner">ज्ञानानन्दमयं देवं निर्मलस्फटिकाकृतिम् ।<br>आधारं सर्वविद्यानां हयग्रीवमुपास्महे ॥</p>
        <p class="shloka-meaning-banner">
          &ldquo;We meditate upon Lord Hayagriva, the embodiment of knowledge, possessor of radiant form clear as crystal, and ultimate founder of all knowledge and sciences.&rdquo;
        </p>
      </div>
    </div>

    <!-- Section 2 (62%): 4-Tree Site Navigation Hub -->
    <div class="footer-col-nav-hub">
      <div class="footer-tree-grid">

        <!-- Column 1: knowledge -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-agents"><i class="fa-solid fa-scale-balanced"></i></span>
            <span class="tree-root-name">knowledge</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="knowledge.html">Legal Vaults</a></li>
            <li class="tree-item"><a href="index.html#home">Sovereign Context</a></li>
            <li class="tree-item"><a href="vaults_law.html">Statutory Acts</a></li>
            <li class="tree-item"><a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer">Legal Graph Search <i class="fa-solid fa-arrow-up-right-from-square footer-ext-icon"></i></a></li>
          </ul>
        </div>

        <!-- Column 2: intelligence -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-harness"><i class="fa-solid fa-brain"></i></span>
            <span class="tree-root-name">intelligence</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="intelligence.html">Sovereign AI</a></li>
            <li class="tree-item"><a href="models_domain_slms.html">BharatGen SLMs</a></li>
            <li class="tree-item"><a href="#" onclick="openIdeDownloadModal(); return false;"><i class="fa-solid fa-download"></i> Download Controller</a></li>
            <li class="tree-item"><a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer">Inference Portal <i class="fa-solid fa-arrow-up-right-from-square footer-ext-icon"></i></a></li>
          </ul>
        </div>

        <!-- Column 3: co-counsels -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-turbine"><i class="fa-solid fa-user-tie"></i></span>
            <span class="tree-root-name">co-counsels</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="counsels.html">Chamber Agents</a></li>
            <li class="tree-item"><a href="marketplace_reporting_resolution_compliance.html">Sec 29A Screening</a></li>
            <li class="tree-item"><a href="marketplace_reporting_assignment_forensics.html">Forensic Inquest</a></li>
            <li class="tree-item"><a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer">Co-Counsel Studio <i class="fa-solid fa-arrow-up-right-from-square footer-ext-icon"></i></a></li>
          </ul>
        </div>

        <!-- Column 4: professionals -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-network"><i class="fa-solid fa-address-book"></i></span>
            <span class="tree-root-name">professionals</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="professionals.html">Directory Listing</a></li>
            <li class="tree-item"><a href="professionals.html">National Bench Map</a></li>
            <li class="tree-item"><a href="#" onclick="openAddMeModal(); return false;"><i class="fa-solid fa-user-plus"></i> Join Directory</a></li>
            <li class="tree-item"><a href="https://app-apnet-net.onrender.com/login" target="_blank" rel="noopener noreferrer">Member Login <i class="fa-solid fa-arrow-up-right-from-square footer-ext-icon"></i></a></li>
          </ul>
        </div>

      </div>
    </div>

  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-left">
      <span>© 2026 Agentic Professionals Network &amp; Hayagriva. All rights reserved.</span>
    </div>
  </div>

</footer>
`;

  function applyFooter(htmlContent) {
    const container = document.getElementById('shared-footer') ||
                      document.getElementById('site-footer-container') ||
                      document.getElementById('site-footer') ||
                      document.querySelector('site-footer') ||
                      document.querySelector('footer.site-footer') ||
                      document.querySelector('footer.compact-footer');

    if (container) {
      container.outerHTML = htmlContent;
    } else {
      const mainEl = document.getElementById('app-main') || document.querySelector('main');
      if (mainEl && mainEl.parentNode) {
        mainEl.insertAdjacentHTML('afterend', htmlContent);
      } else {
        document.body.insertAdjacentHTML('beforeend', htmlContent);
      }
    }
  }

  function init() {
    // Immediate fallback
    applyFooter(fallbackFooterHTML);

    // Live sync via fetch on HTTP - avoid re-replacing DOM if already matching
    if (window.location.protocol.startsWith('http')) {
      fetch('footer.html?v=' + Date.now())
        .then(res => {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(html => {
          const currentFooter = document.getElementById('site-footer');
          const temp = document.createElement('div');
          temp.innerHTML = html.trim();
          const newFooter = temp.querySelector('#site-footer');

          // If footer is already rendered and identical, DO NOT replace DOM!
          if (currentFooter && newFooter && currentFooter.innerHTML.trim() === newFooter.innerHTML.trim()) {
            return;
          }
          if (!currentFooter && html && html.trim().length > 50) {
            applyFooter(html);
          }
        })
        .catch(() => {});
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
