/* ── Icons ── */
const ICONS = {
  Education: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/></svg>`,
  "Public Speaking": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="M12 16v5"/><path d="M8 21h8"/></svg>`,
  "University Partnership": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
};

/* ── Helpers ── */
function scoreUser(user, filters) {
  return user.activities
    .filter(a => matchesFilters(a, filters))
    .reduce((sum, a) => sum + a.points, 0);
}

function matchesFilters(activity, { year, quarter, category }) {
  const date = new Date(activity.date);
  if (year && date.getFullYear() !== Number(year)) return false;
  if (quarter) {
    const m = date.getMonth() + 1;
    const qMap = { Q1: [1,2,3], Q2: [4,5,6], Q3: [7,8,9], Q4: [10,11,12] };
    if (!qMap[quarter].includes(m)) return false;
  }
  if (category && activity.category !== category) return false;
  return true;
}

function getRanked(filters) {
  return USERS
    .map(u => ({ ...u, score: scoreUser(u, filters) }))
    .filter(u => u.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((u, i) => ({ ...u, rank: i + 1 }));
}

function getFilters() {
  return {
    year:     document.getElementById('filter-year').value,
    quarter:  document.getElementById('filter-quarter').value,
    category: document.getElementById('filter-category').value,
  };
}

/* ── Task 03 — Podium ── */
function renderPodium(ranked) {
  const section = document.getElementById('podium-section');
  const container = document.getElementById('podium');
  // top 3 from ranked list (may have score 0 but still shown)
  const top3 = ranked.slice(0, 3);
  // order: [1]=center, [0]=left, [2]=right → display order 2nd, 1st, 3rd
  const slots = [top3[1], top3[0], top3[2]];
  const slotRanks = [2, 1, 3];

  container.innerHTML = slots.map((u, i) => {
    if (!u) return '';
    const rank = slotRanks[i];
    return `
      <div class="podium-slot" data-rank="${rank}" data-name="${u.full_name}">
        <div class="podium-avatar-wrap">
          <img class="podium-avatar" src="${u.avatar}" alt="${u.full_name}" />
          <span class="rank-badge">${rank}</span>
        </div>
        <div class="podium-info">
          <div class="podium-name">${u.full_name}</div>
          <div class="podium-role">${u.role}</div>
          <div class="score-pill"><span class="star">★</span> ${u.score}</div>
        </div>
        <div class="podium-block">${rank}</div>
      </div>`;
  }).join('');

  section.classList.remove('hidden');
}

function applyPodiumSearch(query, top3Names) {
  const section = document.getElementById('podium-section');
  const slots = section.querySelectorAll('.podium-slot');
  if (!query) {
    slots.forEach(s => s.classList.remove('hidden'));
    section.classList.remove('hidden');
    return;
  }
  const q = query.toLowerCase();
  let anyVisible = false;
  slots.forEach(s => {
    const name = s.dataset.name || '';
    const match = name.toLowerCase().includes(q);
    s.classList.toggle('hidden', !match);
    if (match) anyVisible = true;
  });
  section.classList.toggle('hidden', !anyVisible);
}

/* ── Task 04 — Leaderboard list ── */
let expandedUser = null;

function rankColor(rank, total) {
  const minOpacity = 0.25;
  const opacity = 1 - ((rank - 1) / Math.max(total - 1, 1)) * (1 - minOpacity);
  return `rgba(107,114,128,${opacity.toFixed(2)})`;
}

function renderLeaderboard(ranked) {
  const section = document.getElementById('leaderboard-section');
  const total = ranked.length;

  section.innerHTML = ranked.map(u => {
    const catCounts = {};
    u.activities.forEach(a => { catCounts[a.category] = (catCounts[a.category] || 0) + 1; });
    const iconHtml = Object.entries(catCounts).map(([cat, count]) =>
      `<span class="lb-icon-item" data-tooltip="${cat}">${ICONS[cat]}<span>${count}</span></span>`
    ).join('');

    return `
      <div class="lb-item" data-item="${u.full_name}">
        <div class="lb-row" data-user="${u.full_name}" data-rank="${u.rank}">
          <span class="lb-rank" style="color:${rankColor(u.rank, total)}">${u.rank}</span>
          <img class="lb-avatar" src="${u.avatar}" alt="${u.full_name}" />
          <div class="lb-identity">
            <div class="lb-name">${u.full_name}</div>
            <div class="lb-role">${u.role}</div>
          </div>
          <div class="lb-icons">${iconHtml}</div>
          <div class="lb-divider"></div>
          <div class="lb-total">
            <span class="lb-total-label">TOTAL</span>
            <div class="lb-total-count">
              <span class="lb-total-star">★</span>
              <span class="lb-total-score">${u.score}</span>
            </div>
          </div>
          <button class="lb-chevron" aria-label="Expand">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
        <div class="activity-panel" data-panel="${u.full_name}">
          ${buildActivityPanel(u)}
        </div>
      </div>`;
  }).join('');

  attachRowListeners();
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function formatDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return `${String(d).padStart(2, '0')}-${MONTHS[m - 1]}-${y}`;
}

/* ── Task 05 — Activity panel ── */
function buildActivityPanel(u) {
  const sorted = [...u.activities].sort((a, b) => new Date(b.date) - new Date(a.date));
  const rows = sorted.map(a => {
    return `<tr>
      <td>${a.name}</td>
      <td><span class="cat-pill">${a.category}</span></td>
      <td>${formatDate(a.date)}</td>
      <td class="points-positive">+${a.points}</td>
    </tr>`;
  }).join('');
  return `
    <div class="activity-heading">RECENT ACTIVITY</div>
    <table class="activity-table">
      <thead><tr><th>ACTIVITY</th><th>CATEGORY</th><th>DATE</th><th>POINTS</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function attachRowListeners() {
  document.querySelectorAll('.lb-row').forEach(row => {
    row.addEventListener('click', () => togglePanel(row.dataset.user));
  });
}

function togglePanel(userName) {
  document.querySelectorAll('.lb-row').forEach(r => {
    const isTarget = r.dataset.user === userName;
    const item = r.closest('.lb-item');
    const panel = item && item.querySelector('.activity-panel');
    const chevron = r.querySelector('.lb-chevron');
    if (isTarget) {
      const opening = !r.classList.contains('expanded');
      r.classList.toggle('expanded', opening);
      chevron && chevron.classList.toggle('up', opening);
      if (panel) panel.classList.toggle('open', opening);
      if (item) item.classList.toggle('expanded-item', opening);
      expandedUser = opening ? userName : null;
    } else {
      r.classList.remove('expanded');
      chevron && chevron.classList.remove('up');
      if (panel) panel.classList.remove('open');
      if (item) item.classList.remove('expanded-item');
    }
  });
}

/* ── Task 06 — Search ── */
function applySearch(query) {
  const rows = document.querySelectorAll('.lb-row');
  const q = query.toLowerCase();

  document.querySelectorAll('.lb-item').forEach(item => {
    const name = (item.dataset.item || '').toLowerCase();
    const match = !q || name.includes(q);
    item.style.display = match ? '' : 'none';
  });

  // top-3 names from current ranked list
  applyPodiumSearch(query);
}

function initSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  input.addEventListener('input', () => {
    const q = input.value;
    clearBtn.classList.toggle('visible', q.length > 0);
    applySearch(q);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.remove('visible');
    applySearch('');
    input.focus();
  });
}

/* ── Task 07 — Filters ── */
function initYearFilter() {
  const years = [...new Set(
    USERS.flatMap(u => u.activities.map(a => new Date(a.date).getFullYear()))
  )].sort((a, b) => b - a);

  const sel = document.getElementById('filter-year');
  sel.innerHTML = `<option value="">All Years</option>` +
    years.map(y => `<option value="${y}">${y}</option>`).join('');
}

function applyFilters() {
  const filters = getFilters();
  const ranked = getRanked(filters);
  renderPodium(ranked);
  renderLeaderboard(ranked);
  // re-apply any active search on top
  const query = document.getElementById('search-input').value;
  if (query) applySearch(query);
}

function initFilters() {
  initYearFilter();
  ['filter-year', 'filter-quarter', 'filter-category'].forEach(id => {
    document.getElementById(id).addEventListener('change', applyFilters);
  });
}

/* ── Page title ── */
function setPageTitle() {
  const years = USERS.flatMap(u => u.activities.map(a => new Date(a.date).getFullYear()));
  const maxYear = Math.max(...years);
  document.getElementById('page-title').textContent = `Company Leader Board ${maxYear}`;
  document.title = `Company Leader Board ${maxYear}`;
}

/* ── Boot ── */
(function init() {
  setPageTitle();
  initFilters();
  initSearch();
  applyFilters();
})();
