const pagina = document.querySelector("title").textContent

//diretorio onde se encontra o html que está usando este componente levando em consideração a araiz do projeto
var uriDoIndexAtual = "";
if (pagina === "Inicio") uriDoIndexAtual = "./"
else uriDoIndexAtual = "../../"

//colocar a localização do html das paginas
const uriComunidade = uriDoIndexAtual + "pages/comunidade/comunidade.html";

document.querySelector("header")
  .innerHTML = `
  <h1>Proz Arts</h1>
  <nav id="menuBar">
    <ul>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Compromisso</a></li>
      <li><a href="#">Jogos</a></li>
      <li><a href="${uriComunidade}">Comunidade</a></li>
    </ul>
  </nav>
  <div id="login">
    <button>LOGIN</button>
  </div>
`

document.querySelector("footer")
  .innerHTML = `<div id="links-e-configs">
  <div id="site">
    <h3>Proz Arts</h3>
    <aside>
      <ul>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Compromisso</a></li>
        <li><a href="#">Jogos</a></li>
        <li><a href="${uriComunidade}">Comunidade</a></li>
      </ul>
    </aside>
  </div>
  <div id="contato">
    <h3>Nossas Redes</h3>
    <aside>
      <ul>
        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitch"></i></a></li>
      </ul>
    </aside>
  </div>
  <div id="idiomas">
    <div id="caixa-de-idioma">
      <p>Language</p>
      <span>
        <img src="${uriDoIndexAtual}images/bd-br.jfif" alt="bandeira do brasil">
        <select name="" id="">
          <option value="pt-br">Brazil</option>
        </select>
      </span>
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
    <img id="selo" src="${uriDoIndexAtual}images/seal_PSV_ru_l.svg" alt="selo TRUSTe">
    <div id="faixa-etaria">
      <h1>16</h1>
    </div>
  </div>
</div>`
