const input_email = document.getElementById("email")
const msg_erro_email = document.getElementById("error-email")
const form = document.querySelector("form")
const btn_submit = document.getElementById("enviar_forms")

//status de todos os campos
const status_input = {
  nome: false,
  email: false,
  dt_nascimento: false,
  senha: false,
  termo_uso_e_privacidade: false
}

input_email.addEventListener("change", () => {
  if (validacao_input_email(input_email.value)) {
    status_input.email = true;

    if (input_email.classList.contains("campo-errado")) {
      input_email.classList.remove("campo-errado");
      msg_erro_email.style.display = "none";
    }

    btn_submit.removeAttribute("disabled")
  } else {
    status_input.email = false;

    if (!input_email.classList.contains("campo-errado")) {
      input_email.classList.add("campo-errado");
      msg_erro_email.style.display = "block";
    }
    btn_submit.disabled = "true"
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  /*
  if (!(status_input.dt_nascimento && status_input.email && status_input.nome && status_input.senha && status_input.termo_uso_e_privacidade)) {
    //tem algum campo invalido
    alert("Preencha o campo corretamente");
    btn_submit.disabled = "true"
  }*/

  cadastro_usuario("", input_email.value, new Date(2001, 11, 16), "", false);
  console.log(JSON.parse(sessionStorage.getItem("usuarios")))
  setTimeout(() => {
    alert("Usuário cadastrado com sucesso.");
    window.location.href = localizacao_da_raiz() + "index.html"
  }, 5000);
})