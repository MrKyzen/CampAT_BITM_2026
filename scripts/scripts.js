const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    menu.classList.toggle('open', !isOpen);
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      menu.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      menu.classList.remove('open');
      menuButton.focus();
    }
  });
}

// Reveal each marked element as it enters the viewport.
if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.intro .scroll-reveal', {
    y: 36,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.intro',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.from('.next-section .scroll-reveal', {
    y: 36,
    autoAlpha: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.next-section',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  });
}
