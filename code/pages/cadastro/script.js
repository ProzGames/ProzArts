const input_email = document.getElementById("email")
const input_confirmar_email = document.getElementById("confirmar_email")
const input_dt_nasc = document.getElementById("data_nascimento")
const msg_erro_email = document.getElementById("error-email")
const msg_erro_confirmar_email = document.getElementById("error-confirmar-email")
const form = document.querySelector("form")
const btn_submit = document.getElementById("enviar_forms")

//status de todos os campos
const status_input = {
  nome: true,
  email: false,
  email_confirmado: false,
  dt_nascimento: true,
  senha: true,
  termo_uso_e_privacidade: true
}

function verificar_campos_preenchidos() {
  if (!(status_input.dt_nascimento && status_input.email && status_input.nome && status_input.senha && status_input.termo_uso_e_privacidade && status_input.email_confirmado)) {
    btn_submit.disabled = "true"
  } else {
    btn_submit.removeAttribute("disabled")
  }
}

input_email.addEventListener("change", () => {
  if (validacao_input_email(input_email.value)) {
    status_input.email = true;

    if (input_email.classList.contains("campo-errado")) {
      input_email.classList.remove("campo-errado");
      msg_erro_email.style.display = "none";
    }
  } else {
    status_input.email = false;
    if (!input_email.classList.contains("campo-errado")) {
      input_email.classList.add("campo-errado");
      msg_erro_email.style.display = "block";
    }
  }

  verificar_campos_preenchidos()
})

input_confirmar_email.addEventListener("change", () => {
  if (validacao_input_email(input_confirmar_email.value)) {
    if (input_confirmar_email.value === input_email.value) {
      status_input.email_confirmado = true;

      if (input_confirmar_email.classList.contains("campo-errado")) {
        input_confirmar_email.classList.remove("campo-errado");
        msg_erro_confirmar_email.style.display = "none";
      }
    } else {
      status_input.email_confirmado = false;

      if (!input_confirmar_email.classList.contains("campo-errado")) {
        input_confirmar_email.classList.add("campo-errado");
        msg_erro_confirmar_email.style.display = "block";
      }
    }
  } else {
    status_input.email_confirmado = false;

    if (!input_confirmar_email.classList.contains("campo-errado")) {
      input_confirmar_email.classList.add("campo-errado");
      msg_erro_confirmar_email.style.display = "block";
    }
  }
  verificar_campos_preenchidos()
})


form.addEventListener("submit", (e) => {
  e.preventDefault()


  cadastro_usuario("", input_email.value, new Date(2001, 11, 16), "", false);
  console.log(JSON.parse(sessionStorage.getItem("usuarios")))
  setTimeout(() => {
    alert("Usuário cadastrado com sucesso.");
    window.location.href = localizacao_da_raiz() + "index.html"
  }, 5000);
})