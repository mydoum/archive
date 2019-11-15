AOS.init();

/**
 * Menu buttom mobile effect
 */
const drop = document.getElementById("dropDown");
drop.addEventListener("click", dropDown);

function dropDown() {
  const fnmap = {
    toggle: "toggle",
    show: "add",
    hide: "remove"
  };
  const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
      target.classList[fnmap[cmd]]("show");
    });
  };
  const attribute = drop.getAttribute("class");
  if (
    attribute === "menu-mobile" ||
    attribute === "menu-mobile-icon-bar" ||
    attribute === "menu-item-mobile" ||
    attribute === "menu-mobile-button"
  ) {
    const selector = ".collapse.first";
    collapse(selector, "toggle");
  }
}

/**
 * Reservation button fixed
 */

function addSlider() {
  document
    .getElementById("fixed-button-container")
    .classList.add("slide-right-resa-button");
}

/**
 * sliders buttons
 */

const next = document.getElementById("slider-fleche1");
if (next) {
  next.addEventListener("click", modifySlider);
}

function modifySlider() {
  let slideMini = document.getElementById("slideMini");
  if (slideMini.classList.contains("init-left")) {
    slideMini.classList.remove("init-left");
    slideMini.classList.add("left-100");
  } else if (slideMini.classList.contains("left-100")) {
    slideMini.classList.remove("left-100");
    slideMini.classList.add("left-200");
  } else if (slideMini.classList.contains("left-200")) {
    slideMini.classList.remove("left-200");
    slideMini.classList.add("init-left");
  }
}

function modifySliderreverse() {
  let slideMini = document.getElementById("slideMini");
  if (slideMini.classList.contains("init-left")) {
    slideMini.classList.remove("init-left");
    slideMini.classList.add("left-200");
  } else if (slideMini.classList.contains("left-200")) {
    slideMini.classList.remove("left-200");
    slideMini.classList.add("left-100");
  } else if (slideMini.classList.contains("left-100")) {
    slideMini.classList.remove("left-100");
    slideMini.classList.add("init-left");
  }
}

const next3 = document.getElementById("slider-fleche3");
if (next3) {
  next3.addEventListener("click", modifySliderreverse);
}
const next2 = document.getElementById("slider-fleche2");
if (next2) {
  next2.addEventListener("click", modifySlider2reverse);
}
const next4 = document.getElementById("slider-fleche4");
if (next4) {
  next4.addEventListener("click", modifySlider2);
}

function modifySlider2() {
  let slideMini = document.getElementById("slideMini2");
  if (slideMini.classList.contains("init-left")) {
    slideMini.classList.remove("init-left");
    slideMini.classList.add("left-100");
  } else if (slideMini.classList.contains("left-100")) {
    slideMini.classList.remove("left-100");
    slideMini.classList.add("left-200");
  } else if (slideMini.classList.contains("left-200")) {
    slideMini.classList.remove("left-200");
    slideMini.classList.add("init-left");
  }
}

function modifySlider2reverse() {
  let slideMini = document.getElementById("slideMini2");
  if (slideMini.classList.contains("init-left")) {
    slideMini.classList.remove("init-left");
    slideMini.classList.add("left-200");
  } else if (slideMini.classList.contains("left-200")) {
    slideMini.classList.remove("left-200");
    slideMini.classList.add("left-100");
  } else if (slideMini.classList.contains("left-100")) {
    slideMini.classList.remove("left-100");
    slideMini.classList.add("init-left");
  }
}
