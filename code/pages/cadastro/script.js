const input_email = document.getElementById("email")
const form = document.querySelector("form")

//status de todos os campos
const status_input = {
  nome: false,
  email: false,
  dt_nascimento: false,
  senha: false,
  termo_uso_e_privacidade: false
}

input_email.addEventListener("change", () => {
  console.log(validacao_input_email(input_email.value))
  if (validacao_input_email(input_email.value)) {
    status_input.email = true;
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Usuário cadastrado com sucesso.");

  setTimeout(() => {
    window.location.href = localizacao_da_raiz() + "index.html"
  }, 3000);
})