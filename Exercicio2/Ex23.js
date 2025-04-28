const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reaisParaDolares(valorReais) {
  return valorReais / 5;
}

rl.question('Digite o valor em reais: ', (valor) => {
  const valorNum = parseFloat(valor);
  if (isNaN(valorNum) || valorNum <= 0) {
    console.log('Por favor, insira um valor válido e maior que 0.');
  } else {
    console.log(`O valor em dólares é: $${reaisParaDolares(valorNum).toFixed(2)}`);
  }
  rl.close();
});
