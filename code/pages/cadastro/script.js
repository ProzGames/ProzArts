const input_email = document.getElementById("email")
const form = document.querySelector("form")

input_email.addEventListener("change", (e) => {
  console.log(validacao_input_email(input_email.value))
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target[1].value)
})