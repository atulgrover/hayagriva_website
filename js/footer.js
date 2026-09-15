
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

        <!-- Section 3 (40%): ResolutionBazaar Statutory Inquests & Reports Hub -->
    <div class="footer-col-nav-hub">
      <div class="footer-nav-columns">
        <!-- Pillar 1: Intake & Forensics -->
        <div class="footer-nav-col">
          <h4 class="footer-nav-heading">Intake &amp; Forensics</h4>
          <ul class="footer-nav-links">
            <li><a href="resolutionbazaar.html#rate-card"><span class="promo-mini-badge">FREE</span> AS-18 Connected Audit</a></li>
            <li><a href="marketplace_reporting_assignment_forensics.html">Assignment Forensics Dossier</a></li>
            <li><a href="marketplace_reporting_assignment_forensics.html">Section 65 Collusive Inquest</a></li>
            <li><a href="agents_financial.html">Multi-Bank Forensic Audit</a></li>
          </ul>
        </div>

        <!-- Pillar 2: §29A Eligibility -->
        <div class="footer-nav-col">
          <h4 class="footer-nav-heading">§29A Eligibility</h4>
          <ul class="footer-nav-links">
            <li><a href="resolutionbazaar.html#rate-card">Director §29A Disqualification</a></li>
            <li><a href="resolutionbazaar.html#rate-card">CIBIL &amp; RBI Wilful Defaulters</a></li>
            <li><a href="marketplace_reporting_resolution_compliance.html">Form H Section 29A Dossier</a></li>
            <li><a href="docs/FINAL_29A_COMPLIANCE_REPORT_APOGEE_ENTERPRISES.html" target="_blank" rel="noopener noreferrer">Apogee 29A Dossier <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.65rem; color:#38bdf8;"></i></a></li>
          </ul>
        </div>

        <!-- Pillar 3: Plan Audit & Shields -->
        <div class="footer-nav-col">
          <h4 class="footer-nav-heading">Plan Audit &amp; Shields</h4>
          <ul class="footer-nav-links">
            <li><a href="marketplace_reporting_resolution_compliance.html">Section 30(2) Compliance Audit</a></li>
            <li><a href="marketplace_reporting_resolution_compliance.html">Reg 38 Mandatory Contents</a></li>
            <li><a href="marketplace_reporting_liability_shields.html">Section 32A Liability Shields</a></li>
            <li><a href="resolution_plan_verification_telephone_cables.html" target="_blank" rel="noopener noreferrer">TCL Plan Audit Docket <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.65rem; color:#38bdf8;"></i></a></li>
          </ul>
        </div>
      </div>
    </div>

  </div><div class="footer-bottom">
    <div class="footer-bottom-left">
      <span>© 2026 Agentic Professionals Network &amp; Hayagriva. All rights reserved.</span>
      <span class="footer-bottom-divider">•</span>
      <a href="pricing.html" class="footer-legal-link" style="color:#38bdf8; font-weight:600;"><i class="fa-solid fa-cubes" style="margin-right:4px;"></i> Plans &amp; Pricing</a>
      <span class="footer-bottom-divider">•</span>
      <a href="https://forums.agenticprofessionals.net" target="_blank" rel="noopener noreferrer" class="footer-legal-link">APNET Forums</a>
      <span class="footer-bottom-divider">•</span>
      <a href="https://hayagriva.app" target="_blank" rel="noopener noreferrer" class="footer-legal-link">MSME-Sahyog</a>
    </div>
    <div class="footer-bottom-right">Zero Cloud Data Transmission • Air-Gapped Local AI Compliance</div>
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
