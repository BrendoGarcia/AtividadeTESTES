function calcularFrete(peso, distancia) {
  // Arrange - validação
  if (peso <= 0 || distancia <= 0) {
    return "Valores inválidos";
  }

  let custoPorKm = 0;

  // Arrange - determinar custo por faixa
  if (peso <= 5) {
    custoPorKm = 0.50;
  } else if (peso <= 20) {
    custoPorKm = 0.75;
  } else {
    custoPorKm = 1.00;
  }

  // Act - calcular valor base
  let valorFrete = custoPorKm * distancia;

  if (distancia > 500) {
    valorFrete += 10;
  }

  // Assert - formatar saída
  return Number(valorFrete.toFixed(2));
}

export { calcularFrete };
