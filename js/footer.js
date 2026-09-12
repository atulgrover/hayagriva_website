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
    link.href = 'css/footer.css?v=20260911_v1';
    document.head.appendChild(link);
  }

  const fallbackFooterHTML = `
  <footer class="compact-footer" id="site-footer">
    <div class="footer-single-row-grid">
      
      <!-- Section 1 (20%): Full HAYAGRIVA Logo -->
      <div class="footer-col-logo">
        <img src="branding/hayagriva_multi_arm_white.png" alt="Lord Hayagriva Sacred Multi-Armed Icon" class="footer-logo-img" />
      </div>

      <!-- Section 2 (52%): Sanskrit Shloka & English Meaning -->
      <div class="footer-col-shloka">
        <p class="shloka-devanagari-banner">ज्ञानानन्दमयं देवं निर्मलस्फटिकाकृतिम् ।<br>आधारं सर्वविद्यानां हयग्रीवमुपास्महे ॥</p>
        <p class="shloka-meaning-banner">&ldquo;We meditate upon Lord Hayagriva, who is the very embodiment of knowledge and pure bliss, who possesses a radiant form as clear as a blemishless crystal, and who is the ultimate foundation of all learning and sciences.&rdquo;</p>
      </div>

      <!-- Section 3 (28%): Compact 3-Field Volunteer Form -->
      <div class="footer-col-volunteer">
        <h3 class="footer-volunteer-title">Volunteer With Us</h3>
        <form class="footer-volunteer-form" onsubmit="handleVolunteerSubmit(event)">
          <div class="volunteer-field-group">
            <input type="text" id="volName" class="volunteer-input" placeholder="Full Name *" required />
          </div>
          <div class="volunteer-field-group">
            <input type="email" id="volEmail" class="volunteer-input" placeholder="Email Address *" required />
          </div>
          <div class="volunteer-field-group">
            <input type="tel" id="volPhone" class="volunteer-input" placeholder="Phone Number *" required />
          </div>
          <button type="submit" class="volunteer-submit-btn">Join as Volunteer</button>
        </form>
        <div id="volunteer-msg" class="volunteer-status-msg"></div>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <span>© 2026 Agentic Professionals Network &amp; Hayagriva. All rights reserved.</span>
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
