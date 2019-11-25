class Nav {
  constructor() {
    this.navMenu = document.querySelector("#responsive");
    this.events();
  }

  events() {
    // document.querySelector("#toggleMenu").addEventListener("click", function () {
    //   this.toggleMenu();
    // }.bind(this))
    // document.querySelectorAll("#toggleMenu").forEach(function (toggleMenuElement) {
    //   toggleMenuElement.addEventListener("click", function () {
    //     this.toggleMenu();
    //   }.bind(this))
    // }, this)
    document.querySelectorAll("#toggleMenu")
      .forEach(toggleMenuElement =>
        toggleMenuElement.addEventListener("click",
          () => this.toggleMenu())
      )
  }

  toggleMenu() {
    this.navMenu.classList.toggle("hidden");
  }

}

export default Nav;
