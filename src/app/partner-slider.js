import Swiper, { Grid, Autoplay, FreeMode } from "swiper";
Swiper.use([Grid, Autoplay, FreeMode]);

const PartnerSlider = {
  partnerWrapper: document.querySelectorAll("section.partner"),
  init: () => {
    if (!PartnerSlider.partnerWrapper[0]) {
      return;
    }

    PartnerSlider.partnerWrapper.forEach((elm, key) => {
      PartnerSlider.startSwiper(key);
    });
  },
  startSwiper: (index) => {
    const targetSwiper =
      PartnerSlider.partnerWrapper[index].querySelector(".swiper");
    const swiperElm = new Swiper(targetSwiper, {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: {
        enabled: true,
        sticky: true,
      },
      grid: {
        rows: 2,
        fill: "row",
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        768: {
          spaceBetween: 0,
          slidesPerView: 6,
        },
      },
    });
  },
};

PartnerSlider.init();
