//ja esta declarado em arquivo.js que esta sendo carregado na pagina html

// const raiz = localizacao_da_raiz()

// const uriSobre = raiz + "pages/sobre/index.html";
// const uriCompromisso = raiz + "pages/compromissos/index.html";
// const uriJogos = raiz + "pages/jogos/index.html";
// const uriComunidade = raiz + "pages/comunidade/index.html";

function montarAreaAside(){
  const div_links = document.createElement("div")
  div_links.id = "links-e-configs"
  div_links.innerHTML = `
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
        <img src="${raiz}images/bd-br.jfif" alt="bandeira do brasil">
        <select name="lg" id="lg-select">
          <option value="pt-br">BRASIL</option>
        </select>
      </div>
    </div>
  </div>
  `
  return div_links;
}

function montarAreaInformativa(){
  const div_informacoes = document.createElement("div")
  div_informacoes.id = "informacao"
  div_informacoes.innerHTML = `
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
    <img src="${raiz}images/seal_PSV_ru_l.svg" alt="selo TRUSTe">
    <div id="faixa-etaria">
      <h1>16</h1>
    </div>
  </div>
  `
  return div_informacoes;
}

const footer = document.querySelector("footer")
footer.appendChild(montarAreaAside())
footer.appendChild(montarAreaInformativa())