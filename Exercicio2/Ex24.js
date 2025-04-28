const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function metade(numero) {
  return numero / 2;
}

rl.question('Digite um número: ', (numero) => {
  const numeroNum = parseFloat(numero);
  if (isNaN(numeroNum)) {
    console.log('Por favor, insira um número válido.');
  } else {
    console.log(`A metade do número é: ${metade(numeroNum)}`);
  }
  rl.close();
});
