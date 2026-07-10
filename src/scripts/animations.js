/* Scroll-triggered reveal */
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);
document.querySelectorAll('.anim').forEach((el) => revealObs.observe(el));

/* Navbar scroll opacity */
const navPill = document.getElementById('navbarPill');
if (navPill) {
  window.addEventListener(
    'scroll',
    () => navPill.classList.toggle('scrolled', window.scrollY > 60),
    { passive: true }
  );
}

/* Hero parallax */
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  window.addEventListener(
    'scroll',
    () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight * 1.5) {
        heroBg.style.transform = `translateY(${scrolled * 0.28}px)`;
      }
    },
    { passive: true }
  );
}

/* Gold bar scroll reveal */
const goldBar = document.getElementById('goldBar');
if (goldBar) {
  const gbObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          goldBar.style.animation = 'scaleReveal 0.8s cubic-bezier(.16,1,.3,1) both';
          gbObs.unobserve(goldBar);
        }
      });
    },
    { threshold: 0.3 }
  );
  gbObs.observe(goldBar);
}

/* Ecosistema sticky stack scale */
const ecoCards = [...document.querySelectorAll('.eco-wrap > .eco-card')];
const ecoTops  = [80, 90, 100];

function updateEcoStack() {
  ecoCards.forEach((card, i) => {
    let scaleDown = 0;
    for (let j = i + 1; j < ecoCards.length; j++) {
      const nextRect = ecoCards[j].getBoundingClientRect();
      const cardH    = card.offsetHeight;
      const stuckTop = ecoTops[j];
      const raw      = 1 - Math.max(0, Math.min(1, (nextRect.top - stuckTop) / cardH));
      scaleDown     += raw * 0.03;
    }
    card.style.transform = `scale(${Math.max(0.91, 1 - scaleDown)})`;
  });
}
window.addEventListener('scroll', updateEcoStack, { passive: true });
updateEcoStack();

/* Counter animation */
const counterObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.target, 10);
      if (!target) return;
      const prefix   = el.dataset.prefix || '';
      const suffix   = el.dataset.suffix || '';
      const duration = 1400;
      const start    = performance.now();
      (function tick(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        const val      = Math.floor(ease * target);
        const display  = prefix && val < 10 ? '0' + val : String(val);
        el.textContent = display + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      })(start);
      counterObs.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.stat__num[data-target]').forEach((el) => counterObs.observe(el));

/* Carousel drag-to-scroll */
const track = document.querySelector('.carousel-track');
if (track) {
  let isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX     = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mouseup',    () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mousemove',  (e) => {
    if (!isDown) return;
    e.preventDefault();
    track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.5;
  });
  track.style.cursor = 'grab';
}
