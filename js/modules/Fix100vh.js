class Fix100vh {
  constructor() {
    this.vh = window.innerHeight * 0.01
    this.events()
  }

  events() {
    window.addEventListener("DOMContentLoaded", this.fix100vh.bind(this))
  }

  fix100vh() {
    const onEvents = ["load", "resize"]
    onEvents.forEach(evt => window.addEventListener(evt, fixHeight, false))
    function fixHeight() {
      var vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
  }
}

export default Fix100vh
