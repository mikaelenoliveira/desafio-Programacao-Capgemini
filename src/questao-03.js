function Criptografartexto() {
  var texto = "tenha um bom dia";

  var textoSemEspaco = texto.replace(/ /g, "");

  var quantidadeCaracter = textoSemEspaco.length;

  var raizCaracter = Math.ceil(Math.sqrt(quantidadeCaracter));

  let linha = 0;
  let coluna = 0;
  let contadorLetra = 0;

  let matriz = new Array(raizCaracter);

  for (linha = 0; linha < raizCaracter; linha++) {
    let letra = "";
    let arrayColunas = [];
    for (
      coluna = 0;
      coluna < raizCaracter && contadorLetra < quantidadeCaracter;
      coluna++
    ) {
      letra += textoSemEspaco[contadorLetra] + " ";
      arrayColunas[coluna] = textoSemEspaco[contadorLetra];
      contadorLetra++;
    }
    matriz[linha] = arrayColunas;
  }
  var textoCriptografado = "";

  for (let coluna = 0; coluna < matriz.length; coluna++) {
    let letra = "";
    for (let linha = 0; linha < matriz.length; linha++) {
      if (!matriz[linha][coluna]) break;
      letra += matriz[linha][coluna];
    }
    if (textoCriptografado != "") {
      textoCriptografado += " " + letra;
    } else {
      textoCriptografado += letra;
    }
  }
  return textoCriptografado;
}
module.exports = Criptografartexto;
