import { calcularFrete } from "./index.js";

// CT01: Peso até 5 kg e distância curta
test("CT01 - Deve calcular frete para 4kg e 200km", () => {
  const peso = 4;
  const distancia = 200;

  const resultado = calcularFrete(peso, distancia);
  console.log("CT01 Resultado:", resultado); // 👈 imprime no terminal

  expect(resultado).toBe(100.00);
});

// CT02: Peso médio (10kg) e distância média
test("CT02 - Deve calcular frete para 10kg e 300km", () => {
  const resultado = calcularFrete(10, 300);
  console.log("CT02 Resultado:", resultado);

  expect(resultado).toBe(225.00);
});

// CT03: Peso alto (25kg) e distância longa (>500 km)
test("CT03 - Deve calcular frete com taxa extra para 25kg e 600km", () => {
  const resultado = calcularFrete(25, 600);
  console.log("CT03 Resultado:", resultado);

  expect(resultado).toBe(610.00); // 600*1 + 10
});

// CT04: Peso inválido (0kg)
test("CT04 - Deve retornar erro se peso for inválido", () => {
  const resultado = calcularFrete(0, 200);
  console.log("CT04 Resultado:", resultado);

  expect(resultado).toBe("Valores inválidos");
});

// CT05: Distância inválida (-50km)
test("CT05 - Deve retornar erro se distância for inválida", () => {
  const resultado = calcularFrete(10, -50);
  console.log("CT05 Resultado:", resultado);

  expect(resultado).toBe("Valores inválidos");
});
