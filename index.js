const CalcularMediana = require("./src/questao-01");
const QuantidadePares = require("./src/questao-02");
const Criptografartexto = require("./src/questao-03");

const lista1 = [9, 2, 1, 4, 6];
const mediana = CalcularMediana(lista1);
console.log(`Resultado da questão 01: ${mediana}`);

const lista2 = [1, 5, 3, 4, 2];
const qtdePares = QuantidadePares(lista2);
console.log(`Resultado da questão 02: ${qtdePares}`);

var texto = "tenha um bom dia";
var textoCriptografado = Criptografartexto();
console.log(`Resultado da questão 03: ${textoCriptografado}`);
