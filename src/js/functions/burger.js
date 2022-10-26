import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

export const burgerTrigger = () => {
  const burger = document?.querySelector('[data-burger]');
  const close = document?.querySelector('[data-close]');
  const menu = document?.querySelector('[data-menu]');

  burger?.addEventListener('click', (e) => {
    menu?.classList.add('header__bottom--open');
    disableScroll();
  });

  close?.addEventListener('click', (e) => {
    menu?.classList.remove('header__bottom--open');
    enableScroll();
  });
}

