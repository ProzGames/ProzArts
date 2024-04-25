function validacao_input_email(e) {
  //RegExp é um objeto para declarar expressões regulares em JS
  const exprRegular =
    new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9._]+@(gmail)|(hotmail)|(outlook).com/, 'g');

  return exprRegular.test(e);
}