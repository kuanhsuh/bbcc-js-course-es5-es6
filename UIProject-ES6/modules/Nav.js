class Nav {
  constructor() {
    this.toggleMenu = document.querySelectorAll("#toggleMenu");
    this.navMenu = document.querySelector("#responsive");
    this.events();
  }

  events() {
    // this.toggleMenu.forEach(function (toggleMenuElement) {
    //   toggleMenuElement.addEventListener("click", function () {
    //     this.toggleMenuAction();
    //   }.bind(this))
    // }, this)
    this.toggleMenu.forEach(toggleMenuElement => {
      toggleMenuElement.addEventListener("click", () => {
        this.toggleMenuAction();
      })
    })
  }

  toggleMenuAction() {
    this.navMenu.classList.toggle("hidden");
  }

}

export default Nav;