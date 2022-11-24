const price = document.querySelectorAll(".amount");
const pageviews = document.querySelector(".pageviews");
const sliderFull = document.querySelector(".slider-full");
const positionSlider = document.querySelectorAll(".position-slider");
const slider = document.querySelector(".icon-slider");
const monthlyPricing = document.querySelector(".position-monthly");
const yearlyPricing = document.querySelector(".position-yearly");
const toggler = document.querySelector(".toggler");

function eightBucks() {
  price[0].innerText = "8.00";
  price[1].innerText = "8.00";
}

function twelveBucks() {
  price[0].innerText = "12.00";
  price[1].innerText = "12.00";
}

function sixteenBucks() {
  price[0].innerText = "16.00";
  price[1].innerText = "16.00";
}

function twentyFourBucks() {
  price[0].innerText = "24.00";
  price[1].innerText = "24.00";
}

function thirtySixBucks() {
  price[0].innerText = "36.00";
  price[1].innerText = "36.00";
}

positionSlider[0].addEventListener("click", () => {
  sliderFull.style.width = "0%";
  pageviews.innerText = "10k pageviews";
eightBucks()
  monthlyPricing.addEventListener("click", () => {
    eightBucks()
  });
  slider.style.left = "-2.5%";
});

positionSlider[1].addEventListener("click", () => {
  sliderFull.style.width = "25%";
  pageviews.innerText = "50k pageviews";
  twelveBucks()
  monthlyPricing.addEventListener("click", () => {
    twelveBucks()
  });
  slider.style.left = "21.75%";
  if (window.innerWidth < 600) {
    slider.style.left = "20.25%";
  }
});

positionSlider[2].addEventListener("click", () => {
  sliderFull.style.width = "50%";
  pageviews.innerText = "100k pageviews";
  sixteenBucks()
  monthlyPricing.addEventListener("click", () => {
    sixteenBucks()
  });
  slider.style.left = "45%";
  if (window.innerWidth < 600) {
    slider.style.left = "43%";
  }
});

positionSlider[3].addEventListener("click", () => {
  sliderFull.style.width = "75%";
  pageviews.innerText = "500k pageviews";
 twentyFourBucks()
  monthlyPricing.addEventListener("click", () => {
    twentyFourBucks()
  });
  slider.style.left = "68.25%";
  if (window.innerWidth < 600) {
    slider.style.left = "66.5%";
  }
});

positionSlider[4].addEventListener("click", () => {
  sliderFull.style.width = "100%";
  pageviews.innerText = "1m pageviews";
 thirtySixBucks()
  monthlyPricing.addEventListener("click", () => {
    thirtySixBucks()
  });
  slider.style.left = "92.5%";
  if (window.innerWidth < 600) {
    slider.style.left = "89%";
  }
});

monthlyPricing.addEventListener("click", () => {
  toggler.style.transform = "translateX(0)";
  sixteenBucks()

  positionSlider[0].addEventListener("click", () => {
    eightBucks()
  });

  positionSlider[1].addEventListener("click", () => {
    twelveBucks()
  });

  positionSlider[2].addEventListener("click", () => {
    sixteenBucks()
  });

  positionSlider[3].addEventListener("click", () => {
    twentyFourBucks()
  });

  positionSlider[4].addEventListener("click", () => {
    thirtySixBucks()
  });
});

function priceWithDiscount() {
  price[0].innerText =
    parseInt(price[0].innerText) - parseInt(price[0].innerText) * 0.25 + ".00";
  price[1].innerText =
    parseInt(price[1].innerText) - parseInt(price[1].innerText) * 0.25 + ".00";
}

yearlyPricing.addEventListener("click", () => {
  toggler.style.transform = "translateX(24px)";
  priceWithDiscount();

  positionSlider[0].addEventListener("click", () => {
    priceWithDiscount();
  });

  positionSlider[1].addEventListener("click", () => {
    priceWithDiscount();
  });

  positionSlider[2].addEventListener("click", () => {
    priceWithDiscount();
  });

  positionSlider[3].addEventListener("click", () => {
    priceWithDiscount();
  });

  positionSlider[4].addEventListener("click", () => {
    priceWithDiscount();
  });
});
