export function initFaq(root) {
  const faq = root.querySelector('.faq-module');

  if (!faq) {
    return;
  }

  const items = faq.querySelectorAll('.faq-module__item');

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-module__trigger');
    const answer = item.querySelector('.faq-module__answer');

    if (!trigger || !answer) {
      return;
    }

    const isOpen = item.classList.contains('is-open');

    trigger.setAttribute('aria-expanded', String(isOpen));
    answer.hidden = !isOpen;

    trigger.addEventListener('click', () => {
      const willOpen = answer.hidden;

      items.forEach((currentItem) => {
        const currentTrigger = currentItem.querySelector('.faq-module__trigger');
        const currentAnswer = currentItem.querySelector('.faq-module__answer');

        currentItem.classList.remove('is-open');

        if (currentTrigger) {
          currentTrigger.setAttribute('aria-expanded', 'false');
        }

        if (currentAnswer) {
          currentAnswer.hidden = true;
        }
      });

      if (!willOpen) {
        return;
      }

      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    });
  });
}