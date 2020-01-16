class Dropdown {
  constructor() {
    this.dropdownArray = [...document.getElementsByClassName("dropdown")];
    this.events();
  }

  events() {
    this.dropdownArray.forEach(el =>
      el.addEventListener('click', event =>
        this.toggleDropdown(event)
      )
    )
  }

  toggleDropdown(event) {
    event.target.childNodes[1].classList.toggle('rot-90')
    event.target.nextElementSibling.classList.toggle('hidden');
  }

}

export default Dropdown;