document.getElementById('calculate').addEventListener('click', () => {
    const operation = document.getElementById('operation').value;
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const resultElement = document.getElementById('result');
  
    if (operation === 'exit') {
      resultElement.textContent = 'Até a próxima!';
      return;
    }
  
    if (isNaN(value1) || isNaN(value2)) {
      resultElement.textContent = 'Por favor, insira dois números válidos.';
      return;
    }
  
    let result;
  
    switch (operation) {
      case 'sum':
        result = soma(value1, value2);
        break;
      case 'subtract':
        result = subtracao(value1, value2);
        break;
      case 'multiply':
        result = multiplicacao(value1, value2);
        break;
      case 'divide':
        result = divisao(value1, value2);
        break;
      default:
        result = 'Operação inválida.';
    }
  
    resultElement.textContent = `Resultado: ${result}`;
  });
  
  // Funções de operação
  function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      return 'Erro: divisão por zero.';
    }
    return a / b;
  }
  