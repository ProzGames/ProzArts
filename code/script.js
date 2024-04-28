document.addEventListener("DOMContentLoaded", function() {
  // Newsletter
  const newsletterBanner = document.getElementById("newsletterBanner");
  const closeButton = document.getElementById("closeButton");

  // "Fechar" o banner
  closeButton.addEventListener("click", function() {
    fecharBannerNewsletter();
  });

  // Validação Data de Nascimento
  const inputNascimento = document.getElementById("dataNascimento");

  inputNascimento.addEventListener("input", function(event) {
    // Restrição do campo nascimento
    const inputValue = event.target.value.replace(/\D/g, '').substring(0, 8);
    event.target.value = inputValue;

    // Verifica 9 caracteres
    if (inputValue.length < 8) {
        event.target.setCustomValidity("Por favor, insira uma data válida.");
        event.target.classList.add("input-error");
    } else {
        event.target.setCustomValidity("");
        event.target.classList.remove("input-error"); 
    }
  });

  // Adiciona um evento de envio ao formulário
  document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Validação dos campos do formulário
    if (validarFormulario()) {
      // Se o formulário for válido, mensagem de sucesso
      exibirMensagemSucesso();
      fecharBannerNewsletter();
    }
  });

  // Validar os campos do formulário
  function validarFormulario() {
    const email = document.getElementById('texto').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const pais = document.getElementById('primeiro').value;
    const concordouTermos = document.getElementById('concordouTermos').checked;

    if (!email || !dataNascimento || !pais || !concordouTermos) {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    if (!validarEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }

    return true;
  }

  // Validação e-mail
  const inputEmail = document.getElementById("texto");

  inputEmail.addEventListener("input", function(event) {
    const emailValue = event.target.value;
    
    // E-mail é válido usando uma expressão regular
    if (!validarEmail(emailValue)) {
        event.target.setCustomValidity("Por favor, insira um e-mail válido.");
        event.target.classList.add("input-error"); 
    } else {
        event.target.setCustomValidity("");
        event.target.classList.remove("input-error"); 
    }
  });

// Validar o formato de e-mail
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

  // Mensagem de sucesso
  function exibirMensagemSucesso() {
    alert('Formulário enviado com sucesso!');
  }

  // Fechar o banner da newsletter
  function fecharBannerNewsletter() {
    newsletterBanner.style.display = "none";
    document.cookie = "newsletterClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }
});