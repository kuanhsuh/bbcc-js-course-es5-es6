class Form {
  constructor() {
    this.nameField = document.querySelector("#name");
    this.emailField = document.querySelector("#email");
    this.messageField = document.querySelector("#message");
    this.form = document.querySelector("#form");
    this.events();
  }
  events() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.checkForm(event);
    })

  }

  checkForm(event) {
    if (this.nameField.lastElementChild.value === "") {
      this.nameField.appendChild(this.CreateErrorMessage());
    }
    if (this.emailField.lastElementChild.value === "") {
      this.emailField.appendChild(this.CreateErrorMessage());
    }
    if (this.messageField.lastElementChild.value === "") {
      this.messageField.appendChild(this.CreateErrorMessage());
    }
  }

  CreateErrorMessage() {
    var createError = document.createElement("p");
    createError.innerText = "Please choose a password.";
    createError.classList.add("text-red-500", "text-xs", "italic");
    return createError;
  }
}

export default Form;