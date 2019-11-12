/**
 * Menu buttom mobile effect
 */

window.addEventListener(
  'click',
  ev => {
    const elm = ev.target
    const attribute = elm.getAttribute('class')
    if (
      attribute === 'menu-mobile' ||
      attribute === 'menu-mobile-icon-bar' ||
      attribute === 'menu-item-mobile' ||
      attribute === 'menu-mobile-button'
    ) {
      const selector = '.collapse.first'
      collapse(selector, 'toggle')
    }
  },
  false
)

const fnmap = {
  toggle: 'toggle',
  show: 'add',
  hide: 'remove'
}
const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector))
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show')
  })
}

/**
 * Reservation button fixed
 */

function addSlider() {
  document
    .getElementById('fixed-button-container')
    .classList.add('slide-right-resa-button')
}

window.addEventListener('click', ev => {
  const element = ev.target
  const attribute = element.getAttribute('class')
  if (attribute === 'slider-fleche') {
    //left = getComputedStyle(element)
    const figure = document.getElementsByClassName('slider-figure')
    console.log(getComputedStyle(figure[0]).left)
    const leftS = getComputedStyle(figure[0]).left
    let regex = /[+-]?\d+(?:\.\d+)?/g

    let leftInt = regex.exec(leftS)[0]
    console.log(leftInt)
    if (leftInt === 0) {
      figure[0].className = figure[0].className.replace(
        ' init-left',
        ' left-100'
      )
    } else if (leftInt === -610) {
      figure[0].className = figure[0].className.replace(
        ' left-100',
        ' left-200'
      )
    } else {
      figure[0].className = figure[0].className.replace(
        ' left-200',
        ' init-left'
      )
    }
  }
})
