class AppearElements {
  constructor() {
    // this.vh = window.innerHeight * 0.01
    this.events()
  }

  events() {
    window.addEventListener("load", this.showElements.bind(this))
  }

  showElements() {
    console.log("show")

    document.addEventListener("DOMContentLoaded", function (event) {
      // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
      window.onload = function () {
        // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
        window.requestAnimationFrame(function () {
          // GSAP custom code goes here

          document.querySelector(".preloader").classList.add("is-hidden")

          tl = new TimelineMax({})

          tl.staggerFrom(".hero__slogan-hidden", 1.5, { y: "100%", opacity: 0, ease: Power4.easeOut }, 0.1)
          tl.staggerFrom(".tiles__single", 1.5, { y: "15%", opacity: 0, ease: Power4.easeOut }, 0.2, "-=1.5")
          tl.from(".hero__desc", 0.75, { opacity: 0, ease: Sine.easeOut }, "-=1.5")
          tl.staggerFrom(".cover", 1.5, { x: "-200%", ease: Power4.easeOut }, 0.2, "-=1.5")
          tl.from(".btn__inner", 0.1, { visibility: "hidden", ease: Power4.easeOut }, "-=1.4")
          tl.from(".btn svg rect", 1.5, { opacity: 0, ease: Power4.easeOut }, "-=1")
        })
      }
    })
  }
}

export default AppearElements
