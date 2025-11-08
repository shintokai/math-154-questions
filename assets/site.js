/* =========================================================
   MATH 154 — Site JS (clean)
   ========================================================= */

/* ---------- Mobile sidebar toggle ---------- */
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const btn = document.querySelector('.menu-btn');
  if (!sidebar) return;

  const isOpen = sidebar.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', String(isOpen));
}

/* Close sidebar when a link is clicked (mobile) */
(function closeSidebarOnNavClick(){
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  sidebar.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!target) return;
    if (window.matchMedia('(max-width: 900px)').matches) {
      sidebar.classList.remove('open');
      const btn = document.querySelector('.menu-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ---------- Smooth header hide on scroll ---------- */
(function smoothHeaderHide(){
  const header = document.querySelector('.header');
  if (!header) return;

  let lastY = window.pageYOffset || document.documentElement.scrollTop || 0;
  let ticking = false;

  const MIN_OFFSET = 32;  // start hiding only after user scrolls this much
  const DELTA = 4;        // ignore tiny jiggles

  const onScroll = () => {
    const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;

    // add shadow state when off top
    if (currentY > 2) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    const diff = currentY - lastY;
    if (Math.abs(diff) <= DELTA) {
      lastY = currentY;
      ticking = false;
      return;
    }

    if (diff > 0 && currentY > MIN_OFFSET) {
      header.classList.add('hide');   // scrolling down: hide
    } else {
      header.classList.remove('hide'); // scrolling up or near top: show
    }

    lastY = currentY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(onScroll);
  }, { passive: true });
})();

/* ---------- Enhance in-page anchor scrolling ---------- */
(function enableAnchorScroll(){
  // optional: smooth-scroll to anchors with built-in browser behavior
  // You can also set in CSS: html { scroll-behavior: smooth; }
  document.documentElement.style.scrollBehavior = 'smooth';
})();

/* ---------- Mark active link in sidebar TOC ---------- */
(function markActiveTOC(){
  const links = document.querySelectorAll('.toc a[href]');
  if (!links.length) return;

  const here = location.pathname.replace(/\/+$/, '');
  links.forEach(a => {
    try{
      const url = new URL(a.href);
      if (url.pathname.replace(/\/+$/, '') === here) {
        a.setAttribute('aria-current','page');
      } else {
        a.removeAttribute('aria-current');
      }
    }catch(_){}
  });
})();

