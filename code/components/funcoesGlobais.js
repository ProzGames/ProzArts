//FUNÇÕES GLOBAIS CONTENDO ALGUMA LÓGICA OU REGRA DE NEGÓCIO

/**
 * Usado para retornar a URL atual
 * @returns String
 */
function urlLocal() {
  return window.location.href
}

/**
 * Usado para retornar o URI local
 * @returns String
 */
function uriLocal() {
  const urlLocal = window.location.href

  let array_caminho = urlLocal.split("/")

  //procurar a raiz do site
  let i = 0
  for (i = 0; i < array_caminho.length; i++) {
    if (array_caminho[i] === "code") break;
  }

  //concatenar o restante do vetor
  i += 1; let str = ""
  for (j = i; j < array_caminho.length; j++) {
    if (j < array_caminho.length && j !== i) {
      str += "/"
    }

    str += array_caminho[j]
  }

  return str;
}

/**
 * Usado para retornar a profundidade do arquivo index.html com relação a raiz do projeto (Site)
 * @returns Inteiro
 */
function profundidade() {
  return uriLocal().split("/").length - 1
}

/**
 * Usado para retornar a localização do diretorio raiz do projeto html
 * @returns String
 */
function localizacao_da_raiz() {
  const p = profundidade()
  if (p === 0) return "./"

  let str = ""
  for (let i = 0; i < p; i++)
    str += "../"

  return str
}