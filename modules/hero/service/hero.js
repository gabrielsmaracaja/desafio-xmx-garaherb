export function initHero(root) {
  const hero = root.querySelector('.hero-module');

  if (!hero) {
    return;
  }

  window.requestAnimationFrame(() => {
    hero.classList.add('is-ready');
  });
}