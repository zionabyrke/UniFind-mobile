
const burger = document.getElementById('navBurger');
const links = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('nav-open');
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('nav-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', false);
  })
);
