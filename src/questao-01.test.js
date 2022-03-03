const { expect } = require("@jest/globals");
const CalcularMediana = require("./questao-01");

it("Testando função calcular mediana", () => {
  const lista = [9, 2, 1, 4, 6];

  const mediana = CalcularMediana(lista);

  expect(mediana).toBe(4);
});

it("Testando função calcular mediana quando o tamanho do array for par", () => {
  const lista = [8, 2, 1, 3, 6, 16];

  const mediana = CalcularMediana(lista);

  expect(mediana).toBe(4.5);
});
