
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
        <img src="branding/hayagriva_multi_arm_white.png" alt="Lord Hayagriva Sacred Multi-Armed Icon" class="footer-logo-img" />
      </div>
      <div class="sacred-shloka-wrap">
        <p class="shloka-devanagari-banner">ज्ञानानन्दमयं देवं निर्मलस्फटिकाकृतिम् । आधारं सर्वविद्यानां हयग्रीवमुपास्महे ॥</p>
        <p class="shloka-meaning-banner">
          &ldquo;We meditate upon Lord Hayagriva, who is the very embodiment of knowledge and pure bliss, who possesses a radiant form as clear as a blemishless crystal, and who is the ultimate foundation of all learning and sciences.&rdquo;
        </p>
      </div>
    </div>

    <!-- Section 2 (20%): Contact Us / Chambers Enquiry Form -->
    <div class="footer-col-contact-form">
      <h3 class="footer-form-title"><i class="fa-solid fa-envelope" style="color:#38bdf8; margin-right:6px;"></i> Contact Us</h3>
      <form class="footer-contact-form" onsubmit="handleContactSubmit(event)">
        <div class="contact-field-group">
          <input type="text" id="contactName" class="contact-input" placeholder="Your Name *" required />
        </div>
        <div class="contact-field-group">
          <input type="text" id="contactContact" class="contact-input" placeholder="Email or Phone *" required />
        </div>
        <div class="contact-field-group">
          <textarea id="contactMsg" class="contact-input contact-textarea" rows="2" placeholder="Brief Query / Case Note *" required></textarea>
        </div>
        <button type="submit" class="contact-submit-btn">Send Message ➔</button>
      </form>
      <div id="contact-status-msg" class="contact-status-msg"></div>
    </div>

    <!-- Section 3 (40%): Compact L-Tree Site Navigation Hub -->
    <div class="footer-col-nav-hub">
      <div class="footer-tree-grid">

        <!-- Column 1: HARNESS -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-harness"><i class="fa-solid fa-microchip"></i></span>
            <span class="tree-root-name">HARNESS</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="vaults_law.html">Statutory Law</a></li>
            <li class="tree-item"><a href="vaults_formats.html">Verified Formats</a></li>
            <li class="tree-item"><a href="vaults_suites.html">Process Playbooks</a></li>
            <li class="tree-item"><a href="chatroom.html">Chat Agents</a></li>
            <li class="tree-item"><a href="harness_haya_studio.html">Drafting Agents</a></li>
            <li class="tree-item"><a href="agents_claims.html">Verification Agents</a></li>
            <li class="tree-item"><a href="models_domain_slms.html#legal">Haya-Legal SLM</a></li>
            <li class="tree-item"><a href="models_domain_slms.html#finance">Haya-Finance SLM</a></li>
          </ul>
        </div>

        <!-- Column 2: TURBINE -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-turbine"><i class="fa-solid fa-bolt"></i></span>
            <span class="tree-root-name">TURBINE</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="marketplace_reporting_assignment_forensics.html">Section 65 Inquest</a></li>
            <li class="tree-item"><a href="marketplace_reporting_resolution_compliance.html">Section 29A Screening</a></li>
            <li class="tree-item"><a href="marketplace_reporting_liability_shields.html">Section 36 Shields</a></li>
            <li class="tree-item"><a href="agents_claims.html">Claim Preparation</a></li>
            <li class="tree-item"><a href="resolutionbazaar.html">Plan Preparation</a></li>
            <li class="tree-item"><a href="harness_haya_vaults.html">Virtual Dataroom</a></li>
            <li class="tree-item"><a href="agents_insolvency.html">Process Advisory</a></li>
            <li class="tree-item"><a href="agents_legal.html">Legal Advisory</a></li>
          </ul>
        </div>

        <!-- Column 3: NETWORK -->
        <div class="footer-tree-col">
          <div class="tree-root-head">
            <span class="tree-root-badge badge-network"><i class="fa-solid fa-network-wired"></i></span>
            <span class="tree-root-name">NETWORK</span>
          </div>
          <ul class="footer-tree-list">
            <li class="tree-item"><a href="directory_listing.html">Directory Listing</a></li>
            <li class="tree-item"><a href="https://forums.agenticprofessionals.net" target="_blank" rel="noopener noreferrer">Discussion Forums <i class="fa-solid fa-arrow-up-right-from-square footer-ext-icon"></i></a></li>
            <li class="tree-item"><a href="https://hayagriva.app" target="_blank" rel="noopener noreferrer">Enterprise Training <i class="fa-solid fa-arrow-up-right-from-square footer-ext-icon"></i></a></li>
            <li class="tree-item"><a href="index.html#home">Home Portal</a></li>
            <li class="tree-item"><a href="pricing.html">Plans &amp; Pricing</a></li>
            <li class="tree-item"><a href="#" onclick="openIdeDownloadModal(); return false;"><span class="promo-mini-badge">FREE</span> Chamber IDE</a></li>
            <li class="tree-item"><a href="#" onclick="openAddMeModal(); return false;">Join Directory</a></li>
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

    // Live sync via fetch on HTTP
    if (window.location.protocol.startsWith('http')) {
      fetch('footer.html?v=' + Date.now())
        .then(res => {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(html => {
          if (html && html.trim().length > 50) {
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
