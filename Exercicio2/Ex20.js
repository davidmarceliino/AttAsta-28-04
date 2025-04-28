const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function linhaDeAsteriscos(quantidade) {
  let resultado = '';
  for (let i = 0; i < quantidade; i++) {
    resultado += '*';
  }
  return resultado;
}

rl.question('Digite a quantidade de asteriscos: ', (resposta) => {
  const quantidade = Number(resposta);
  if (isNaN(quantidade) || quantidade < 1) {
    console.log('Digite um número válido maior que 0.');
  } else {
    console.log(linhaDeAsteriscos(quantidade));
  }
  rl.close();
});
