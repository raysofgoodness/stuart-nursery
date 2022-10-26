export const toggleShowSubmenu = () => {
  const subOpenTrigger =  document.querySelector('[data-sub-open]');
  const subMenu =  document.querySelector('[data-sub-menu]');

  subOpenTrigger.addEventListener('click', () => {
    subMenu.classList.toggle('sub-list--active');
  });
};
