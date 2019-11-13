/**
 * Menu buttom mobile effect
 */
const next = document.getElementById("slider-fleche1");
next.addEventListener("click", modifySlider);

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

const next2 = document.getElementById("slider-fleche2");
next2.addEventListener("click", modifySlider2);

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

window.addEventListener(
  "click",
  ev => {
    const elm = ev.target;
    const attribute = elm.getAttribute("class");
    if (
      attribute === "menu-mobile" ||
      attribute === "menu-mobile-icon-bar" ||
      attribute === "menu-item-mobile" ||
      attribute === "menu-mobile-button"
    ) {
      const selector = ".collapse.first";
      collapse(selector, "toggle");
    }
  },
  false
);

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

/**
 * Reservation button fixed
 */

function addSlider() {
  document
    .getElementById("fixed-button-container")
    .classList.add("slide-right-resa-button");
}

// Get the container element
var btnContainer = document.getElementsByClassName("menu-items")[0];
console.log(btnContainer);
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu-item-active");
    current[0].className = current[0].className.replace(
      " menu-item-active",
      ""
    );
    this.className += " menu-item-active";
  });
}
