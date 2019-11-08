/**
 * Menu buttom mobile effect
 */

window.addEventListener('click', (ev) => {
  const elm = ev.target;
  const attribute = elm.getAttribute('class')
  if (attribute === 'menu-mobile'
    || attribute === 'menu-mobile-icon-bar'
    || attribute === 'menu-item-mobile'
    || attribute === 'menu-mobile-button') {
    const selector = '.collapse.first';
    collapse(selector, 'toggle');
  }
}, false);


const fnmap = {
  'toggle': 'toggle',
  'show': 'add',
  'hide': 'remove'
};
const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show');
  });
}

/**
 * Reservation button fixed
 */

function addSlider(){
  document.getElementById('fixed-button-container').classList.add('slide-right-resa-button');
}

