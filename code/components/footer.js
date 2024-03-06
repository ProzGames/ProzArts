

const pagina = document.querySelector("title").textContent

//diretorio onde se encontra o html que está usando este componente levando em consideração a araiz do projeto
var uriDoIndexAtual = "";
if (pagina === "Inicio") uriDoIndexAtual = "./"
else uriDoIndexAtual = "../../"

//colocar a localização do html das paginas;
const uriHome = uriDoIndexAtual + "index.html";
const uriComunidade = uriDoIndexAtual + "pages/comunidade/index.html";
const uriSobre = uriDoIndexAtual + "pages/Sobre/index.html";
const uriCompromisso = uriDoIndexAtual + "pages/Compromissos/index.html";
const uriJogos = uriDoIndexAtual + "pages/jogos/index.html";
const uriLogin = uriDoIndexAtual + "pages/login/index.html";

function onClickLogin() {
  window.location.href = uriLogin;
}

document.querySelector("header")
  .innerHTML = `
  <h1><a href="${uriHome}">Proz Arts</a></h1>
  <nav id="menuBar">
    <ul>
      <li><a href="${uriSobre}">Sobre</a></li>
      <li><a href="${uriCompromisso}">Compromisso</a></li>
      <li><a href="${uriJogos}">Jogos</a></li>
      <li><a href="${uriComunidade}">Comunidade</a></li>
    </ul>
  </nav>
  <div id="login">
    <button onClick="onClickLogin()">LOGIN</button>
  </div>
`

document.querySelector("footer")
  .innerHTML = `<div id="links-e-configs">
  <aside id="site">
    <h3>Proz Arts</h3>
    <ul>
      <li><a href="${uriSobre}">Sobre</a></li>
      <li><a href="${uriCompromisso}">Compromisso</a></li>
      <li><a href="${uriJogos}">Jogos</a></li>
      <li><a href="${uriComunidade}">Comunidade</a></li>
    </ul>
  </aside>
  <aside id="contato">
    <h3>Nossas Redes</h3>
    <ul>
      <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-twitch"></i></a></li>
    </ul>
  </aside>
  <div id="idiomas">
    <div id="caixa-de-idioma">
      <label for="lg-select">Language</label>
      <div>
        <img src="${uriDoIndexAtual}images/bd-br.jfif" alt="bandeira do brasil">
        <select name="lg" id="lg-select">
          <option value="pt-br">BRASIL</option>
        </select>
      </div>
    </div>
  </div>
</div>
<div id="informacao">
  <div id="links">
    <p>
      Avisos legais e privacidade <br>
      Contrato de usuário - NOVO <br>
      Your privacity choices <br>
      2024 Eletronic Arts inc.
    </p>
    <p>
      Atualizações do serviço online <br>
      Política de privacidade e Cookies - NOVO <br>
      Cookies preferences
    </p>
  </div>
  <div id="imgs">
    <img src="${uriDoIndexAtual}images/seal_PSV_ru_l.svg" alt="selo TRUSTe">
    <div id="faixa-etaria">
      <h1>16</h1>
    </div>
  </div>
</div>`
