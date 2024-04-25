const input_email = document.getElementById("email")

input_email.addEventListener("change", (e) => {
  console.log(validacao_input_email(input_email.value))
})