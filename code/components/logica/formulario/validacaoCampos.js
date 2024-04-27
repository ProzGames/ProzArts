/**
 * 
 * @param {string} e 
 * @returns {boolean}
 */
function validacao_input_email(e) {
  //RegExp é um objeto para declarar expressões regulares em JS
  const exprRegular =
    new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9._]+@((gmail)|(hotmail)|(outlook)).com/, 'g');

  return exprRegular.test(e);
}

function validacao_data(e) {
  const data = e.split("-")
  const dia = data[2]; const mes = data[1]; const ano = data[0]

  const dia_correto = dia > 0 && dia < 32;
  const mes_correto = mes > 0 && mes < 13;
  const ano_correto = ano > 1900 && ano < (new Date(Date.now()).getFullYear() - 6)

  //console.log(dia_correto + " " + mes_correto + " " + ano_correto)
  return dia_correto && mes_correto && ano_correto;
}