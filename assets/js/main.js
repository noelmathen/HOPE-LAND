// Mobile menu toggle (if you add one later)
// Smooth scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      const offset = document.querySelector('.navbar').offsetHeight;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });

  // — Mobile menu toggle —
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Animate hamburger to “X”
navToggle.addEventListener('click', () => {
  const bar = navToggle.querySelector('.hamburger');
  bar.classList.toggle('transform');
});

// — Shrink navbar on scroll —
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

