const { expect } = require("@jest/globals");
const QuantidadePares = require("./questao-02");

test("Teste de função quantidade pares", () => {
  const lista2 = [1, 5, 3, 4, 2];
  const resultado = QuantidadePares(lista2);
  expect(resultado).toEqual(3);
});
