// ── Mobile nav toggle ────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) nav.classList.remove('open');
    });
  }

  // ── Active nav link ────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page || (page === 'index.html' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Scroll reveal ──────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  }

  // ── Accordion (confession / teach page) ───────
  document.querySelectorAll('.belief-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.belief-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.belief-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
});
