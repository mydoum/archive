window.addEventListener('click', (ev) => {
  const elm = ev.target;
  const attribute = elm.getAttribute('class')
  if (attribute === 'menu-mobile' || attribute === 'menu-mobile-icon-bar') {
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
