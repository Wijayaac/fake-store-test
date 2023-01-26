import Swiper, { EffectFade, Autoplay } from "swiper";

Swiper.use([EffectFade, Autoplay]);

const CategorySlider = {
  sliderElms: document.querySelectorAll(
    "section.text-media.text-media--slider"
  ),
  init: () => {
    CategorySlider.sliderElms.forEach((elm, key) => {
      CategorySlider.startSlider(key);
    });
  },
  startSlider: (index) => {
    const targetSwiper =
      CategorySlider.sliderElms[index].querySelector(".swiper");

    const swiperElm = new Swiper(targetSwiper, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  },
};

CategorySlider.init();
