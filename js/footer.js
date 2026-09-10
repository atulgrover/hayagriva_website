/**
 * AgenticProfessionals.Net - Shared Footer Component
 * Automatically injects and controls the unified footer across all pages (index.html, vaults.html, etc.)
 *
 * Links included:
 *  - Forums - apnet.co.in (https://apnet.co.in)
 *  - MSME-Sahyog (https://hayagriva.app)
 *  - WhatsApp (https://wa.me/...)
 */

(function () {
  const footerHTML = `
  <footer class="site-footer" id="site-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand & Platform Identity -->
        <div class="footer-brand-col">
          <div class="footer-brand">
            <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span style="font-weight: 700; color: #0f172a; font-size: 1rem;">AgenticProfessionals.Net</span>
          </div>
          <p class="footer-tagline">Institutional Insolvency & Restructuring Operating System</p>
        </div>

        <!-- Shared Footer Links -->
        <ul class="footer-links">
          <!-- Link 1: Forums -->
          <li>
            <a href="https://forums.agenticprofessionals.net" target="_blank" rel="noopener noreferrer" class="footer-link">
              <i class="fa-solid fa-comments" style="color: #2563eb; font-size: 1rem;"></i>
              <span style="font-weight: 600;">Forums - Zulip Community</span>
              <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.65rem; color: #94a3b8; margin-left: 2px;"></i>
            </a>
          </li>

          <!-- Link 2: MSME-Sahyog -->
          <li>
            <a href="https://hayagriva.app" target="_blank" rel="noopener noreferrer" class="footer-link footer-link-msme">
              <i class="fa-solid fa-handshake-angle" style="color: #0d9488; font-size: 1.05rem;"></i>
              <span style="font-weight: 600;">MSME-Sahyog</span>
              <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.65rem; color: #94a3b8; margin-left: 2px;"></i>
            </a>
          </li>

          <!-- Link 3: WhatsApp -->
          <li>
            <a href="https://wa.me/?text=Inquiry%20regarding%20AgenticProfessionals.Net" target="_blank" rel="noopener noreferrer" class="footer-link footer-link-whatsapp">
              <i class="fa-brands fa-whatsapp" style="color: #22c55e; font-size: 1.15rem;"></i>
              <span style="font-weight: 600;">WhatsApp</span>
              <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.65rem; color: #94a3b8; margin-left: 2px;"></i>
            </a>
          </li>
        </ul>
      </div>

      <!-- Bottom Attribution Row -->
      <div class="footer-bottom-row">
        <div class="footer-copyright">
          &copy; 2026 AgenticProfessionals.Net. All rights reserved. Sovereign Air-Gapped Infrastructure.
        </div>
        <div class="footer-badges">
          <span class="badge badge-subtle"><i class="fa-solid fa-shield-halved" style="color: #16a34a;"></i> AES-256 Air-Gapped</span>
          <span class="badge badge-subtle"><i class="fa-solid fa-building-columns" style="color: #2563eb;"></i> IBBI Compliant</span>
        </div>
      </div>
    </div>
  </footer>
  `;

  function initFooter() {
    // 1. If explicit mount point exists
    const container = document.getElementById('shared-footer') ||
                      document.getElementById('site-footer-container') ||
                      document.querySelector('site-footer');

    if (container) {
      container.outerHTML = footerHTML;
      return;
    }

    // 2. If existing static footer exists, replace it to ensure links are in sync
    const existingFooter = document.querySelector('footer.site-footer');
    if (existingFooter) {
      existingFooter.outerHTML = footerHTML;
      return;
    }

    // 3. Otherwise append before closing script or body
    const mainEl = document.getElementById('app-main') || document.querySelector('main');
    if (mainEl && mainEl.parentNode) {
      mainEl.insertAdjacentHTML('afterend', footerHTML);
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();
