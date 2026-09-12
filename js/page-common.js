/**
 * AgenticProfessionals.Net - Inner Pages Shared Runtime Logic
 * Handles interactive elements, table row highlights, and external link security.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure all external links have rel="noopener noreferrer"
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if (!link.getAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Table row highlight on click (focus inspection)
  document.querySelectorAll('.forensic-table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      document.querySelectorAll('.forensic-table tbody tr').forEach(r => r.classList.remove('selected-row'));
      row.classList.add('selected-row');
    });
  });
});
