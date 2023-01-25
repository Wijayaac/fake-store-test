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
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};

ReviewSlider.init();
