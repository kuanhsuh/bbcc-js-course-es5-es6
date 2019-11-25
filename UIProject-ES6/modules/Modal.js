class Modal {
  constructor() {
    this.modalBtns = document.querySelectorAll("#myBtn")
    this.closeBtns = document.querySelectorAll(".close");
    this.events();
  }
  events() {
    this.modalBtns.forEach((modalBtn) =>
      modalBtn.addEventListener("click", () => this.openModal(modalBtn))
    )

    this.closeBtns.forEach((closeBtn) =>
      closeBtn.addEventListener("click", (event) => this.closeModal(event)))

    window.onclick = event => {
      if (event.target.id == "myModal" && event.target.style.display === "block") {
        event.target.style.display = "";
      }
    }
  }

  openModal(modalBtn) {
    modalBtn.nextElementSibling.style.display = "block";
  }
  closeModal(event) {
    event.target.parentElement.parentElement.style.display = "";
  }
}

export default Modal;



// var modalBtns = document.querySelectorAll("#myBtn")
// var closeBtns = document.querySelectorAll(".close");

// modalBtns.forEach(function (modalBtn) {
//   modalBtn.addEventListener("click", function () {
//     modalBtn.nextElementSibling.style.display = "block";
//   })
// })

// closeBtns.forEach(function (closeBtn) {
//   closeBtn.addEventListener("click", function (event) {
//     event.target.parentElement.parentElement.style.display = "";
//   })
// })

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target.id == "myModal" && event.target.style.display === "block") {
//     event.target.style.display = "";
//   }
// }