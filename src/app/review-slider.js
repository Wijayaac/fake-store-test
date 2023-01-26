import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

const ReviewSlider = {
  sliderElms: document.querySelectorAll("section.review-slider"),
  DOM: [],
  init: () => {
    ReviewSlider.sliderElms.forEach((elm, key) => {
      ReviewSlider.DOM[key] = elm;
      ReviewSlider.startSwiper(key);
    });
  },
  startSwiper: (key) => {
    const swiperTarget = ReviewSlider.sliderElms[key].querySelector(".swiper");

    const swiperELm = new Swiper(swiperTarget, {
      slidesPerView: 1.1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 40,
        },
      },
    });
  },
};

ReviewSlider.init();
