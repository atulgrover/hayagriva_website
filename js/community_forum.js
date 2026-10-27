/**
 * AgenticProfessionals.Net - IBC Community Forum Client Script
 * Connects to shared Neon PostgreSQL database & Azure LightRAG knowledge graph.
 */

(function () {
  // Resolve API Base URL (Local dev fallback to localhost:3000 / localhost:3300, Prod to portal)
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const API_BASE = isLocal
    ? 'http://localhost:3000' // Live Next.js dev server with shared Neon DB
    : 'https://app-apnet-net.onrender.com';

  let currentCategory = 'all';
  let currentSearch = '';
  let threadsList = [];
  let remainingQuota = 3;

  // Formatting strictly in Indian Standard Time (IST)
  function formatIndianTime(dateStr) {
    try {
      return new Date(dateStr).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    } catch (e) {
      return dateStr;
    }
  }

  // Load threads from shared API
  async function fetchThreads() {
    const listEl = document.getElementById('thread-list-stream');
    if (!listEl) return;

    listEl.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #64748b;">
        <i class="fa-solid fa-spinner fa-spin" style="font-size: 24px; margin-bottom: 12px; color: #0284c7;"></i>
        <p style="font-size: 13px;">Retrieving statutory inquiries from shared knowledge base...</p>
      </div>
    `;

    try {
      const url = new URL(`${API_BASE}/api/community/threads`);
      if (currentCategory !== 'all') url.searchParams.set('category', currentCategory);
      if (currentSearch) url.searchParams.set('search', currentSearch);

      const res = await fetch(url.toString(), { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      threadsList = data.threads || [];
      renderThreads();
    } catch (err) {
      console.warn('[Forum] API fetch failed, falling back:', err);
      listEl.innerHTML = `
        <div style="padding: 30px; text-align: center; background: #fff1f2; border: 1px solid #fecdd3; border-radius: 12px; color: #e11d48;">
          <i class="fa-solid fa-triangle-exclamation" style="font-size: 22px; margin-bottom: 8px;"></i>
          <p style="font-size: 13px; font-weight: 600;">Unable to connect to shared forum database.</p>
          <p style="font-size: 11px; margin-top: 4px; color: #be123c;">Please ensure backend service is running on ${API_BASE}.</p>
        </div>
      `;
    }
  }

  // Render threads list
  function renderThreads() {
    const listEl = document.getElementById('thread-list-stream');
    if (!listEl) return;

    if (threadsList.length === 0) {
      listEl.innerHTML = `
        <div style="padding: 48px 20px; text-align: center; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
          <i class="fa-solid fa-comments" style="font-size: 32px; color: #94a3b8; margin-bottom: 12px;"></i>
          <h4 style="font-size: 15px; font-weight: 700; color: #1e293b; margin: 0 0 6px 0;">No inquiries found</h4>
          <p style="font-size: 12px; color: #64748b; margin: 0;">Be the first practitioner to pose a CIRP question to our Azure LightRAG knowledge graph.</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = threadsList.map(thread => {
      const isAnswered = thread.has_ai_answer || thread.ai_status === 'COMPLETED';
      const isQueued = thread.ai_status === 'QUEUED';
      const preview = (thread.body || '').replace(/<[^>]*>/g, '').substring(0, 160);
      const originDomain = thread.origin_domain === 'resolutionbazaar' ? 'resolutionbazaar.com' : 'agenticprofessionals.net';

      return `
        <div class="thread-card-item" onclick="openThreadDrawer('${thread.id}')">
          <div class="thread-card-header">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="thread-category-badge">${escapeHtml(thread.category || 'General')}</span>
              <span class="thread-origin-badge">${originDomain}</span>
            </div>
            ${isAnswered ? `
              <span class="ai-answered-badge">
                <i class="fa-solid fa-sparkles"></i> AI Answered
              </span>
            ` : isQueued ? `
              <span class="ai-queued-badge">
                <i class="fa-solid fa-clock"></i> AI Queued
              </span>
            ` : ''}
          </div>

          <h3 class="thread-card-title">${escapeHtml(thread.title)}</h3>
          <p class="thread-card-preview">${escapeHtml(preview)}...</p>

          <div class="thread-card-footer">
            <div class="thread-author-row">
              <div class="thread-author-avatar">${escapeHtml((thread.author_name || 'U')[0].toUpperCase())}</div>
              <span style="font-weight: 600; color: #334155;">${escapeHtml(thread.author_name || 'Advocate')}</span>
              <span>•</span>
              <span>${formatIndianTime(thread.created_at)} (IST)</span>
            </div>
            <div class="thread-badges-right">
              <span><i class="fa-regular fa-comment"></i> ${thread.reply_count || 0}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Open Thread Detail Drawer
  window.openThreadDrawer = async function (threadId) {
    const backdrop = document.getElementById('thread-drawer-backdrop');
    const panel = document.getElementById('thread-drawer-panel');
    const titleEl = document.getElementById('drawer-thread-title');
    const metaEl = document.getElementById('drawer-thread-meta');
    const streamEl = document.getElementById('drawer-body-stream');

    if (!backdrop || !panel) return;

    backdrop.classList.add('active');
    panel.classList.add('active');
    streamEl.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #64748b;">
        <i class="fa-solid fa-spinner fa-spin" style="font-size: 24px; color: #0284c7;"></i>
      </div>
    `;

    try {
      const res = await fetch(`${API_BASE}/api/community/threads/${threadId}`);
      if (!res.ok) throw new Error('Failed to load thread');
      const { thread, replies } = await res.json();

      titleEl.innerText = thread.title;
      metaEl.innerText = `Posted by ${thread.author_name} • ${formatIndianTime(thread.created_at)} (IST)`;

      // Separate AI reply and human replies
      const aiReply = (replies || []).find(r => r.is_ai_generated || r.author_role === 'AI_BOT');
      const humanReplies = (replies || []).filter(r => !r.is_ai_generated && r.author_role !== 'AI_BOT');

      let citationsHtml = '';
      if (aiReply && aiReply.ai_citations && aiReply.ai_citations.length > 0) {
        citationsHtml = `
          <div class="citations-wrap">
            <span style="font-size: 11px; font-weight: 700; color: #475569; display: flex; align-items: center; gap: 4px;">
              <i class="fa-solid fa-scale-balanced"></i> Citations:
            </span>
            ${aiReply.ai_citations.map(c => `
              <span class="citation-pill">${escapeHtml(c.title || c.section || c.act)}</span>
            `).join('')}
          </div>
        `;
      }

      streamEl.innerHTML = `
        <!-- Original Inquiry -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
          <div style="font-size: 11px; font-weight: 700; color: #64748b; margin-bottom: 8px; text-transform: uppercase;">
            Original Inquiry
          </div>
          <div style="font-size: 13px; line-height: 1.7; color: #1e293b; white-space: pre-wrap;">${escapeHtml(thread.body)}</div>
        </div>

        <!-- Verified Sovereign AI Reply -->
        ${aiReply ? `
          <div class="ai-reply-container">
            <div class="ai-reply-author-row">
              <div class="ai-bot-ident">
                <div class="ai-bot-avatar">
                  <img src="branding/unicorn_emblem.png" alt="emblem" onerror="this.innerText='ॐ'" />
                </div>
                <div>
                  <div class="ai-bot-title">Hayagriva Sovereign Bot</div>
                  <div style="font-size: 10px; color: #059669; font-weight: 600;">
                    <i class="fa-solid fa-circle-check"></i> Azure Knowledge Graph • 64k Entity Legal Analysis
                  </div>
                </div>
              </div>
              <button onclick="navigator.clipboard.writeText(document.getElementById('ai-ans-text').innerText); alert('Copied statutory analysis!');" style="background: none; border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px 8px; font-size: 11px; color: #475569; cursor: pointer;">
                <i class="fa-regular fa-copy"></i> Copy
              </button>
            </div>

            ${citationsHtml}

            <div class="ai-answer-markdown" id="ai-ans-text">${escapeHtml(aiReply.body).replace(/\n/g, '<br/>')}</div>
          </div>
        ` : `
          <div style="padding: 20px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; text-align: center; color: #b45309;">
            <i class="fa-solid fa-hourglass-half" style="margin-bottom: 6px;"></i>
            <p style="font-size: 12px; margin: 0; font-weight: 600;">Azure LightRAG is synthesizing knowledge graph citations for this inquiry...</p>
          </div>
        `}

        <!-- Follow-up Replies Header -->
        <div style="font-size: 12px; font-weight: 700; color: #475569; margin-top: 10px;">
          Replies (${humanReplies.length})
        </div>

        ${humanReplies.map(r => `
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; font-size: 11px;">
              <span style="font-weight: 700; color: #0f172a;">${escapeHtml(r.author_name)}</span>
              <span style="color: #64748b;">${formatIndianTime(r.created_at)}</span>
            </div>
            <div style="font-size: 12px; color: #334155; line-height: 1.6;">${escapeHtml(r.body)}</div>
          </div>
        `).join('')}
      `;
    } catch (err) {
      streamEl.innerHTML = `<p style="color: #e11d48; text-align: center;">Failed to load thread details.</p>`;
    }
  };

  // Close Drawer
  window.closeThreadDrawer = function () {
    const backdrop = document.getElementById('thread-drawer-backdrop');
    const panel = document.getElementById('thread-drawer-panel');
    if (backdrop) backdrop.classList.remove('active');
    if (panel) panel.classList.remove('active');
  };

  // Open / Close Inquiry Composer Modal
  window.openAskModal = function () {
    if (remainingQuota <= 0) {
      openDailyLimitModal();
      return;
    }
    const modal = document.getElementById('ask-question-modal');
    if (modal) modal.classList.add('active');
  };

  window.closeAskModal = function () {
    const modal = document.getElementById('ask-question-modal');
    if (modal) modal.classList.remove('active');
  };

  window.openDailyLimitModal = function () {
    const modal = document.getElementById('daily-limit-modal');
    if (modal) modal.classList.add('active');
  };

  window.closeDailyLimitModal = function () {
    const modal = document.getElementById('daily-limit-modal');
    if (modal) modal.classList.remove('active');
  };

  // Submit Inquiry Handler
  window.submitQuestion = async function (e) {
    if (e) e.preventDefault();
    const titleInput = document.getElementById('inquiry-title');
    const categorySelect = document.getElementById('inquiry-category');
    const bodyInput = document.getElementById('inquiry-body');
    const authorInput = document.getElementById('inquiry-author');
    const btnSubmit = document.getElementById('btn-submit-inquiry');

    const title = (titleInput?.value || '').trim();
    const category = categorySelect?.value || 'insolvency-ibc';
    const body = (bodyInput?.value || '').trim();
    const authorName = (authorInput?.value || '').trim() || 'Advocate';

    if (title.length < 5) {
      alert('Inquiry title must be at least 5 characters');
      return;
    }
    if (body.length < 10) {
      alert('Inquiry details must be at least 10 characters');
      return;
    }

    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
    }

    try {
      const res = await fetch(`${API_BASE}/api/community/threads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          body,
          category,
          authorName,
          turnstileToken: 'test-token',
        }),
      });

      if (res.status === 429) {
        closeAskModal();
        openDailyLimitModal();
        return;
      }

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to submit inquiry');
      }

      const data = await res.json();
      if (typeof data.remaining === 'number') {
        remainingQuota = data.remaining;
        updateQuotaDisplay();
      }

      closeAskModal();
      titleInput.value = '';
      bodyInput.value = '';
      await fetchThreads();

      if (data.thread && data.thread.id) {
        openThreadDrawer(data.thread.id);
      }
    } catch (err) {
      alert(err.message || 'Failed to submit inquiry');
    } finally {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `Submit Question`;
      }
    }
  };

  function updateQuotaDisplay() {
    const el = document.getElementById('quota-val');
    if (el) el.innerText = `${remainingQuota}/3`;
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Setup Category Pills and Search
  document.addEventListener('DOMContentLoaded', () => {
    fetchThreads();

    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.dataset.category || 'all';
        fetchThreads();
      });
    });

    const searchInput = document.getElementById('forum-search-box');
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          currentSearch = e.target.value.trim();
          fetchThreads();
        }, 300);
      });
    }
  });
})();
