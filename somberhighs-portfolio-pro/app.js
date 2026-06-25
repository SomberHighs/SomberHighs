const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

links?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
