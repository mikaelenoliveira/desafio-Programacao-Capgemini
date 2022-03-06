const { expect } = require("@jest/globals");
const Criptografartexto = require("./questao-03");

test("Criptograr texto", () => {
  var textoCriptografado = Criptografartexto();
  expect(textoCriptografado).toBe("taoa eum nmd hbi");
});
