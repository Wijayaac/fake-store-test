class ProgressContent {
  constructor() {
    this.wrapper = document.querySelectorAll(".step");
    this.DOM = [];
    window.scrollTo(0, 0); // prevent progress bar not filled when page load.
  }

  init() {
    if (!document.body.contains(this.wrapper[0])) {
      return;
    }

    this.wrapper.forEach((elm, key) => {
      this.DOM[key] = elm;
      elm.dataset.spcKey = key;

      this.setProgressLength(key);
      this.setProgressCheckpoint(key);
      this.setProgressBar(key);
    });
  }

  setProgressCheckpoint(key) {
    this.wrapper[key].querySelectorAll(".step__item-order").forEach((year) => {
      let topPos =
        year.getBoundingClientRect().top -
        document.querySelector(".header").offsetHeight -
        200;

      window.addEventListener("scroll", () => {
        let scrollPos =
          window.scrollY ||
          window.scrollTop ||
          document.getElementsByTagName("html")[0].scrollTop;

        if (scrollPos >= topPos) {
          year.classList.add("active");
        } else {
          year.classList.remove("active");
        }
      });
    });
  }

  setProgressBar(key) {
    const progressHeight =
      this.wrapper[key].querySelector(".step__bar").offsetHeight;
    const progressTopOffset =
      this.wrapper[key].querySelector(".step__bar").getBoundingClientRect()
        .top -
      document.querySelector(".header").offsetHeight -
      200;

    window.addEventListener("scroll", () => {
      let scrollPos =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

      if (
        scrollPos >= progressTopOffset &&
        scrollPos <= progressHeight + progressTopOffset
      ) {
        this.wrapper[key].querySelector(
          ".step__bar--current"
        ).style.height = `${scrollPos - progressTopOffset}px`;
      }
    });
  }

  setProgressLength(key) {
    let index = 0;
    const wrapperHeight = this.wrapper[key].offsetHeight;
    let firstYearOffset = 0;
    let lastYearOffset = 0;

    this.wrapper[key].querySelectorAll(".step__item-order").forEach((year) => {
      if (index == 0) {
        const firstParent = year.closest(".step__item").getBoundingClientRect();
        const firstChild = year.getBoundingClientRect();
        this.wrapper[key]
          .querySelector(".step__bar")
          .style.setProperty("--top", `${firstChild.top - firstParent.top}px`);
        firstYearOffset = firstChild.top - firstParent.top;
      }

      if (
        index ==
        this.wrapper[key].querySelectorAll(".step__item-order").length - 1
      ) {
        const lastParent = year.closest(".step").getBoundingClientRect();
        const lastChild = year.getBoundingClientRect();

        lastYearOffset = lastParent.bottom - lastChild.bottom;
      }
      this.wrapper[key]
        .querySelector(".step__bar")
        .style.setProperty(
          "--height",
          `${wrapperHeight - firstYearOffset - lastYearOffset}px`
        );

      index++;
    });
  }
}

let progressContent = new ProgressContent();
progressContent.init();
