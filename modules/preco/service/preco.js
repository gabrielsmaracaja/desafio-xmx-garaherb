export function initPreco(root) {
  const preco = root.querySelector('.preco-module');

  if (!preco) {
    return;
  }

  window.requestAnimationFrame(() => {
    preco.classList.add('is-ready');
  });
}
