const raiz = localizacao_da_raiz()

const uriHome = raiz + "index.html";
const uriSobre = raiz + "pages/sobre/index.html";
const uriCompromisso = raiz + "pages/compromissos/index.html";
const uriJogos = raiz + "pages/jogos/index.html";
const uriComunidade = raiz + "pages/comunidade/index.html";
const uriLogin = () => {window.location.href = raiz + "pages/login/index.html"};

const montarLogo = () => {
  const logo = document.createElement("h1")
  logo.innerHTML = `<a href="${uriHome}">Proz Arts</a>`
  return logo
}

const montarMenuBar = () => {
  const nav = document.createElement("div")

  const links_das_paginas = document.createElement("ul")
  links_das_paginas.id = "links-pages"
  links_das_paginas.innerHTML = `
    <li><a href="${uriSobre}">Sobre</a></li>
    <li><a href="${uriCompromisso}">Compromisso</a></li>
    <li><a href="${uriJogos}">Jogos</a></li>
    <li><a href="${uriComunidade}">Comunidade</a></li>
  `
  nav.appendChild(links_das_paginas)

  const btn_login = document.createElement("button")
  btn_login.onclick = uriLogin
  btn_login.innerText = "LOGIN"
  nav.appendChild(btn_login)

  return nav
}

const header = document.querySelector("header");
header.appendChild(montarLogo())
header.appendChild(montarMenuBar())