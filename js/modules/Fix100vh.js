class Fix100vh {
  constructor() {
    this.vh = window.innerHeight * 0.01
    this.events()
  }

  events() {
    window.addEventListener("load", this.fix100vh.bind(this))
  }

  fix100vh() {
    var calcHeight = ["load", "resize"]
    calcHeight.forEach(evt => window.addEventListener(evt, fix100vh, false))
    function fix100vh() {
      var vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${this.vh}px`)
    }
  }
}

export default Fix100vh
