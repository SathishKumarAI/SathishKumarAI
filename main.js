/* main.js — the only behaviour on the page: the appearance switch and the rail
   that tracks which stage you are reading. Owns no styling and no markup. */

const root = document.documentElement;

/* --- appearance --------------------------------------------------------- */

const toggle = document.getElementById('theme');

function paint(theme) {
  root.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', String(theme === 'light'));
}

paint(root.dataset.theme || 'dark');

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  paint(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

/* --- rail: mark the stage currently on screen --------------------------- */

const links = new Map(
  [...document.querySelectorAll('[data-rail]')].map(a => [a.dataset.rail, a])
);

const seen = new Set();

const spy = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) seen.add(entry.target.id);
    else seen.delete(entry.target.id);
  }
  // Several stages can be on screen at once; the topmost one wins.
  const current = [...links.keys()].find(id => seen.has(id));
  for (const [id, link] of links) {
    link.setAttribute('aria-current', String(id === current));
  }
}, { rootMargin: '-20% 0px -60% 0px' });

document.querySelectorAll('.stage').forEach(stage => spy.observe(stage));
