import { gsap } from "gsap";

export const animationHeroBlock = () => {
  const heroRight = document.querySelector(`[data-hero="right"]`);
  const contentSplit = document.querySelector(`[data-hero="split"]`);
  const tl = gsap.timeline();

  function heroLoadAnimation(right) {
      tl.set(right, {
        width: '0',
      }).to(right, {
        duration: 3,
        width: '52%',
        ease: 'power4.out',
        clipPath: 'polygon(9% 0, 100% 0%, 100% 100%, 0% 100%)',
      });
  }

  function heroTextSplit(content) {
    tl.set(content, {
      yPercent: 50,
      opacity: 0,
    }).to(content, {
      duration: 2,
      yPercent: 0,
      stagger: 0.05,
      opacity: 1,
      ease: 'expo.inOut',
    });
  }

  window.addEventListener('load', () => {
    heroTextSplit(contentSplit);
    heroLoadAnimation(heroRight);
  });
}

