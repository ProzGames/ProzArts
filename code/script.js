document.addEventListener("DOMContentLoaded", function() {
    // Newsletter
    const newsletterBanner = document.getElementById("newsletterBanner");
    const closeButton = document.getElementById("closeButton");
  
    // Verificação do reegistro para feechamento
    if (document.cookie.indexOf("newsletterClosed=true") !== -1) {
      newsletterBanner.style.display = "none";
    }
  
    // Fecha e mantem o registro
    closeButton.addEventListener("click", function() {
      newsletterBanner.style.display = "none";
      document.cookie = "newsletterClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });
  
    // Reseta a função de Fechamento da Newsletter
    window.addEventListener("load", function() {
      document.cookie = "newsletterClosed=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    });
  
    // Validação para o formato do campo de Data de Nascimento
    const inputNascimento = document.getElementById("dataNascimento");
  
    inputNascimento.addEventListener("input", function(event) {
      // Pega o valor atual
      let inputValue = event.target.value;
  
      // Restrição do campo, somente números
      inputValue = inputValue.replace(/\D/g, '');
  
      // Formato "DD MMM AAAA"
      inputValue = formatarData(inputValue);
  
      // Atualiza o valor 
      event.target.value = inputValue;
    });
  
    function formatarData(data) {
      // Verificação de tamanho do campo - 8 (DDMMAAAA)
      if (data.length >= 8) {
        const dia = data.substring(0, 2);
        const mes = obterNomeMes(data.substring(2, 4));
        const ano = data.substring(4, 8);
        return `${dia} ${mes} ${ano}`;
      }
      return data;
    }
  
    function obterNomeMes(mes) {
      // Lista de Meses
      const meses = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
      ];
      // Mês de número para Nome
      return meses[parseInt(mes, 10) - 1];
    }
  
    // Verificação de e-mail
    const inputEmail = document.getElementById("texto");
  
    inputEmail.addEventListener("input", function(event) {
      let email = event.target.value;
      let emailValido = validarEmail(email);
  
      if (!emailValido) {
        event.target.setCustomValidity("Por favor, insira um e-mail válido.");
      } else {
        event.target.setCustomValidity("");
      }
    });
  
    function validarEmail(email) {
      // Validação de e-mail
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexEmail.test(email);
    }
  });

  