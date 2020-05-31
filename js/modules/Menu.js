class Menu {
  constructor() {
    this.body = document.querySelector("body")
    this.burger = document.querySelector(".burger")
    this.tlMenu = new TimelineMax({ paused: true, reversed: true })

    this.events()
  }

  events() {
    window.addEventListener("load", this.setupStyles.bind(this))
    this.burger.addEventListener("click", this.showMenu.bind(this))
  }

  setupStyles() {
    this.tlMenu.to(".nav", 0, { visibility: "visible", ease: Power4.easeOut })
    this.tlMenu.to(".nav__bg--hill", 1, { opacity: 1, visibility: "visible", transform: "scale(1)", ease: Power4.easeOut })
    this.tlMenu.staggerFrom(".nav__list-link", 1, { x: "-15%", opacity: 0, "pointer-events": "none", ease: Power4.easeOut }, 0.1, "-=1")
    this.tlMenu.from(".nav__list-social, .nav__list-contact", 0.1, { opacity: 0, "pointer-events": "none", ease: Power4.easeOut }, "-=0.8")
    this.tlMenu.staggerFrom(".nav__bg--pines", 1, { opacity: 0, y: 50, ease: Power4.easeOut }, 0.1, "-=1.2")
    this.tlMenu.to(".hero__cta", 1, { opacity: 0, ease: Power4.easeOut }, "-=1.6")
    this.tlMenu.to(".nav__bg--moon", 1.5, { opacity: 1, ease: Power4.easeOut }, "-=1")
  }

  showMenu() {
    this.tlMenu.reversed() ? this.tlMenu.timeScale(1).play() : this.tlMenu.timeScale(2).reverse()
    this.burger.classList.toggle("is-open")
    this.body.style.overflow = "hidden"
  }
}

export default Menu

// function letsAnimate() {
//   this.classList.toggle("is-open")

// }
