function exibir_mensagem_pupup(titulo, descricao, tempo_duracao) {
  const criar_component = () => {
    const area = document.createElement("div");
    area.id = "msg-popup"
    area.innerHTML = `
      <h1>${titulo}</h1>
      <p>${descricao}</p>
    `

    const tudo = document.createElement("section")
    tudo.id = "component-msg-popup"
    tudo.appendChild(area)
    return tudo;
  }
  document.querySelector("body").appendChild(criar_component());

  const popup = document.getElementById("component-msg-popup")
  popup.style.display = "flex"
  setTimeout(() => {
    popup.style.display = "none"
  }, tempo_duracao);
}