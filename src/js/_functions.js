import  {burgerTrigger}  from './functions/burger';
import  {animationHeroBlock} from "./functions/animations";

burgerTrigger();
animationHeroBlock();

import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper(`.favorites-slider`, {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.favorites__btn-next',
    prevEl: '.favorites__btn-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }
});




