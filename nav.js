/* nav.js — Shared navigation behavior */

// Dynamic copyright year
document.querySelectorAll('.copyright-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Mobile toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // Mark active nav link
  const links = document.querySelectorAll('.nav__links a, .nav__mobile a');
  const path = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Contact form handler (no backend — mailto fallback)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = form.querySelector('[name="name"]').value.trim();
      const email   = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      const subject = encodeURIComponent('Website Inquiry from ' + name);
      const body    = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
      window.location.href = 'mailto:info@richardsonresources.com?subject=' + subject + '&body=' + body;
    });
  }
});
