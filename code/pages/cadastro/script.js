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
const msg_erro_nome_usuario = document.getElementById("error-nome-usuario")
const msg_erro_email = document.getElementById("error-email")
const msg_erro_confirmar_email = document.getElementById("error-confirmar-email")
const msg_erro_dt_nascimento = document.getElementById("error-dt-nascimento")
const msg_erro_Senha = document.getElementById("error-senha")
const msg_erro_repete_senha = document.getElementById("error-repetir-senha")
const msg_erro_termo_de_uso = document.getElementById("error-termo-de-uso");
//formulario
const form = document.querySelector("form")
const btn_submit = document.getElementById("enviar_forms")

//status de todos os campos
const status_input = {
  nome: false,
  email: false,
  dt_nascimento: false,
  senha: false
}

/**
 * @returns(boolean) se todos os campos foram preenchidos corretamente
 */
function verificar_campos_preenchidos() {
  if (!(status_input.dt_nascimento && status_input.email && status_input.nome && status_input.senha)) {
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

/**
 * 
 * @returns {boolean} true os campos de senha e email estão corretos, além do usuário ter aceitado o termo e falso caso contrário
 */
function validar_campos_de_confirmacao() {
  if (input_email.value !== input_confirmar_email.value) {
    status_input.email = false

    if (!input_email.classList.contains("campo-errado")) {
      input_email.classList.add("campo-errado");
      msg_erro_email.style.display = "block";
    }
    if (!input_confirmar_email.classList.contains("campo-errado")) {
      input_confirmar_email.classList.add("campo-errado");
      msg_erro_confirmar_email.style.display = "block";
    }
    msg_erro_email.innerText = "os emails não são iguais";
    msg_erro_confirmar_email.innerText = "os emails não são iguais";
  } else {
    status_input.email = true

    if (input_email.classList.contains("campo-errado")) {
      input_email.classList.remove("campo-errado");
      msg_erro_email.style.display = "none";
    }
    if (input_confirmar_email.classList.contains("campo-errado")) {
      input_confirmar_email.classList.remove("campo-errado");
      msg_erro_confirmar_email.style.display = "none";
    }
  }

  if (input_Senha.value !== input_repete_Senha.value) {
    status_input.senha = false

    if (!input_Senha.classList.contains("campo-errado")) {
      input_Senha.classList.add("campo-errado")
      msg_erro_Senha.style.display = "block"
    }
    if (!input_Senha.classList.contains("campo-errado")) {
      input_repete_Senha.classList.add("campo-errado")
      msg_erro_repete_senha.style.display = "block"
    }
    msg_erro_Senha.innerText = "as senhas não são iguais";
    msg_erro_repete_senha.innerText = "as senhas não são iguais";
  } else {
    status_input.senha = true

    if (input_Senha.classList.contains("campo-errado")) {
      input_Senha.classList.remove("campo-errado")
      msg_erro_Senha.style.display = "none"
    }
    if (input_Senha.classList.contains("campo-errado")) {
      input_repete_Senha.classList.remove("campo-errado")
      msg_erro_repete_senha.style.display = "none"
    }
  }

  if (input_termo_de_uso.checked) {
    if (msg_erro_termo_de_uso.style.display === "block") msg_erro_termo_de_uso.style.display = "none"
  }

  validar_ativacao_do_botao()
  return status_input.senha && status_input.email && input_termo_de_uso.checked;
}

input_nome_usuario.addEventListener("change", () => {
  const value = "" + input_nome_usuario.value
  if (value.length === 0) {
    if (status_input.nome) status_input.nome = false;
    if (!input_nome_usuario.classList.contains("campo-errado")) {
      input_nome_usuario.classList.add("campo-errado")
      msg_erro_nome_usuario.style.display = "block"
    }
    msg_erro_nome_usuario.innerText = "Campo obrigatório"
  } else if (!validacao_input_nome_de_usuario(value)) {
    if (status_input.nome) status_input.nome = false;
    if (!input_nome_usuario.classList.contains("campo-errado")) {
      input_nome_usuario.classList.add("campo-errado")
      msg_erro_nome_usuario.style.display = "block"
    }
    msg_erro_nome_usuario.innerText = "Sintaxe incorreta, use apenas letras e/ou espaço em branco"
  } else {
    if (!status_input.nome) status_input.nome = true;
    if (input_nome_usuario.classList.contains("campo-errado")) {
      input_nome_usuario.classList.remove("campo-errado")
      msg_erro_nome_usuario.style.display = "none"
    }
  }
  verificar_campos_preenchidos()
  console.log(status_input)
})

input_email.addEventListener("change", () => {
  const value = "" + input_email.value

  if (value.length === 0) {
    if (status_input.email) status_input.email = false;
    if (!input_email.classList.contains("campo-errado")) {
      input_email.classList.add("campo-errado");
      msg_erro_email.style.display = "block";
    }
    msg_erro_email.innerText = "campo oobrigatório";
  } else if (!validacao_input_email(input_email.value)) {
    if (status_input.email) status_input.email = false;
    if (!input_email.classList.contains("campo-errado")) {
      input_email.classList.add("campo-errado");
      msg_erro_email.style.display = "block";
    }
    msg_erro_email.innerText = "formato de email incorreto. só sera aceito gmail, hotmail ou outlook."
  } else {
    if (!status_input.email) status_input.email = true;
    if (input_email.classList.contains("campo-errado")) {
      input_email.classList.remove("campo-errado");
      msg_erro_email.style.display = "none";
    }
  }

  validar_ativacao_do_botao()
})

input_confirmar_email.addEventListener("change", () => {
  const value = "" + input_confirmar_email.value

  if (value.length === 0) {
    if (status_input.email) status_input.email = false;
    if (!input_confirmar_email.classList.contains("campo-errado")) {
      input_confirmar_email.classList.add("campo-errado");
      msg_erro_confirmar_email.style.display = "block";
    }
    msg_erro_confirmar_email.innerText = "campo oobrigatório";
  } else if (!validacao_input_email(input_confirmar_email.value)) {
    if (status_input.email) status_input.email = false;
    if (!input_confirmar_email.classList.contains("campo-errado")) {
      input_confirmar_email.classList.add("campo-errado");
      msg_erro_confirmar_email.style.display = "block";
    }
    msg_erro_confirmar_email.innerText = "formato de email incorreto. só sera aceito gmail, hotmail ou outlook."
  } else {
    if (!status_input.email) status_input.email = true;
    if (input_confirmar_email.classList.contains("campo-errado")) {
      input_confirmar_email.classList.remove("campo-errado");
      msg_erro_confirmar_email.style.display = "none";
    }
  }
  validar_ativacao_do_botao()
})

input_dt_nasc.addEventListener("change", () => {
  if (!validacao_data(input_dt_nasc.value)) {
    if (!input_dt_nasc.classList.contains("campo-errado")) {
      msg_erro_dt_nascimento.style.display = "block"
      input_dt_nasc.classList.add("campo-errado")
    }
    status_input.dt_nascimento = false
  } else if (input_dt_nasc.classList.contains("campo-errado")) {
    status_input.dt_nascimento = true
    msg_erro_dt_nascimento.style.display = "none"
    input_dt_nasc.classList.remove("campo-errado")
  }
  validar_ativacao_do_botao()
})

input_Senha.addEventListener("change", () => {
  const value = input_Senha.value + "";
  if (value.length < 4) {
    if (status_input.senha) status_input.senha = false
    if (!input_Senha.classList.contains("campo-errado")) {
      msg_erro_Senha.style.display = "block"
      input_Senha.classList.add("campo-errado")
    }
    msg_erro_Senha.innerText = "A senha deve contém no mínimo 4 caracteres."
  } else if (!validacao_senha(value)) {
    if (status_input.senha) status_input.senha = false
    if (!input_Senha.classList.contains("campo-errado")) {
      msg_erro_Senha.style.display = "block"
      input_Senha.classList.add("campo-errado")
    }
    msg_erro_Senha.innerText = "A senha só pode conter A-Z, a-z, 0-9 e os seguintes caracteres especiais: @#$&%-_"
  } else {
    if (!status_input.senha) status_input.senha = true
    if (input_Senha.classList.contains("campo-errado")) {
      msg_erro_Senha.style.display = "none"
      input_Senha.classList.remove("campo-errado")
    }
  }
  validar_ativacao_do_botao()
})

input_repete_Senha.addEventListener("change", () => {
  const value = input_Senha.value + "";
  if (value.length < 4) {
    if (status_input.senha) status_input.senha = false
    if (!input_repete_Senha.classList.contains("campo-errado")) {
      msg_erro_repete_senha.style.display = "block"
      input_repete_Senha.classList.add("campo-errado")
    }
    msg_erro_repete_senha.innerText = "A senha deve contém no mínimo 4 caracteres."
  } else if (!validacao_senha(value)) {
    if (status_input.senha) status_input.senha = false
    if (!input_repete_Senha.classList.contains("campo-errado")) {
      msg_erro_repete_senha.style.display = "block"
      input_repete_Senha.classList.add("campo-errado")
    }
    msg_erro_repete_senha.innerText = "A senha só pode conter A-Z, a-z, 0-9 e os seguintes caracteres especiais: @#$&%-_"
  } else {
    if (!status_input.senha) status_input.senha = true
    if (input_repete_Senha.classList.contains("campo-errado")) {
      msg_erro_repete_senha.style.display = "none"
      input_repete_Senha.classList.remove("campo-errado")
    }
  }
  validar_ativacao_do_botao()
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (validar_campos_de_confirmacao()) { //se o usuario aceitar os termos de uso, ele irá cadastrar
    cadastro_usuario(input_nome_usuario.value, input_email.value, new Date(2001, 11, 16), input_Senha.value, input_aceitar_conteudos_extras.checked);
    console.log(JSON.parse(sessionStorage.getItem("usuarios")))
    exibir_mensagem_pupup("Mensagem do sistema", "Cadastro efetuado com sucesso", 5000)
    setTimeout(() => {
      window.location.href = localizacao_da_raiz() + "index.html"
    }, 5000);
  } else {
    msg_erro_termo_de_uso.style.display = "block"
  }
})