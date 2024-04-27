//inputs
const input_nome_usuario = document.getElementById("nome_usuario")
const input_email = document.getElementById("email")
const input_confirmar_email = document.getElementById("confirmar_email")
const input_dt_nasc = document.getElementById("data_nascimento")
const input_Senha = document.getElementById("senha")
const input_repete_Senha = document.getElementById("repete_senha")
const input_termo_de_uso = document.getElementById("termos_check")
const input_aceitar_conteudos_extras = document.getElementById("conteudo_check")
//msg de erro
const msg_erro_email = document.getElementById("error-email")
const msg_erro_confirmar_email = document.getElementById("error-confirmar-email")
const msg_erro_dt_nascimento = document.getElementById("error-dt-nascimento")
const msg_erro_termo_de_uso = document.getElementById("error-termo-de-uso");
//formulario
const form = document.querySelector("form")
const btn_submit = document.getElementById("enviar_forms")

//status de todos os campos
const status_input = {
  nome: true,
  email: false,
  email_confirmado: false,
  dt_nascimento: false,
  senha: true
}

/**
 * @returns(boolean) se todos os campos foram preenchidos corretamente
 */
function verificar_campos_preenchidos() {
  if (!(status_input.dt_nascimento && status_input.email && status_input.nome && status_input.senha && status_input.email_confirmado)) {
    return false
  } else {
    return true
  }
}

/**
 * Altera o status do botão de enviar formulario
 */
function validar_ativacao_do_botao() {
  if (!verificar_campos_preenchidos()) {
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

  validar_ativacao_do_botao()
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
  validar_ativacao_do_botao()
})

input_dt_nasc.addEventListener("change", () => {
  if (validacao_data(input_dt_nasc.value)) {
    if (input_dt_nasc.classList.contains("campo-errado")) {
      msg_erro_dt_nascimento.style.display = "none"
      input_dt_nasc.classList.remove("campo-errado")
    }
    status_input.dt_nascimento = true
  } else {
    if (!input_dt_nasc.classList.contains("campo-errado")) {
      msg_erro_dt_nascimento.style.display = "block"
      input_dt_nasc.classList.add("campo-errado")
    }
    status_input.dt_nascimento = false
  }
  validar_ativacao_do_botao()
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (input_termo_de_uso.checked) { //se o usuario aceitar os termos de uso, ele irá cadastrar
    cadastro_usuario(input_nome_usuario.value, input_email.value, new Date(2001, 11, 16), input_Senha.value, input_aceitar_conteudos_extras.checked);
    console.log(JSON.parse(sessionStorage.getItem("usuarios")))
    setTimeout(() => {
      alert("Usuário cadastrado com sucesso.");
      window.location.href = localizacao_da_raiz() + "index.html"
    }, 5000);
  } else {
    msg_erro_termo_de_uso.style.display = "block"
  }
})