import  {burgerTrigger}  from './functions/burger';
import  {animationHeroBlock} from "./functions/animations";

burgerTrigger();
animationHeroBlock();

import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

const favoriteSlider = new Swiper(`.favorites-slider`, {
  slidesPerView: 1,
  spaceBetween: 5,
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

const reviewSlider = new Swiper(`.review-slider`, {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.review__btn-next',
    prevEl: '.review__btn-prev',
  },
});




