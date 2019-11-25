class Dropdown {
  constructor() {
    this.dropdownItems = [...document.querySelectorAll(".dropdown")]
    this.events();
  }

  events() {
    this.dropdownItems.forEach((el) =>
      el.addEventListener("click", (e) => this.toggleDropdown(e))
    )
  }

  toggleDropdown(e) {
    e.target.childNodes[1].classList.toggle("rot-90")
    e.target.nextSibling.nextSibling.classList.toggle("hidden")
  }
}

export default Dropdown;
