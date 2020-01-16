class Modal {
  constructor() {
    this.modalBtnsArray = [...document.querySelectorAll("#myBtn")];
    this.closeBtnsArray = [...document.querySelectorAll(".close")];
    this.events();
  }
  events() {
    this.modalBtnsArray.forEach(modalBtn => {
      modalBtn.addEventListener("click", () => {
        this.openModal(modalBtn);
      });
    });

    this.closeBtnsArray.forEach(closeBtn => {
      closeBtn.addEventListener("click", event => {
        this.closeModal(event)
      })
    });

    window.addEventListener("click", event => {
      if (event.target.id === "myModal" && event.target.style.display === "block") {
        event.target.style.display = "";
      }
    });
  }

  openModal(modalBtn) {
    modalBtn.nextElementSibling.style.display = "block";
  }

  closeModal(event) {
    event.target.parentElement.parentElement.style.display = "";
  }
}

export default Modal;