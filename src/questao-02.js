function QuantidadePares(lista) {
  var x = 2;

  lista.sort();

  var cont1 = 0;
  var quantidade = lista.length;
  let qtdePares = 0;

  for (cont1; cont1 < quantidade; cont1++) {
    var valorposicao = lista[cont1];
    var numeroproximo = valorposicao + x;

    var cont2 = cont1 + 1;
    for (cont2; cont2 < quantidade; cont2++) {
      if (lista[cont2] == numeroproximo) {
        qtdePares++;
        break;
      }
    }
  }
  return qtdePares;
}

module.exports = QuantidadePares;
