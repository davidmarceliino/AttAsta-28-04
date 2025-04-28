const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perimetroQuadrado(lado) {
  return 4 * lado;
}

rl.question('Digite o tamanho do lado do quadrado: ', (lado) => {
  const ladoNum = parseFloat(lado);
  if (isNaN(ladoNum) || ladoNum <= 0) {
    console.log('Por favor, insira um número válido e maior que 0.');
  } else {
    console.log(`O perímetro do quadrado é: ${perimetroQuadrado(ladoNum)}`);
  }
  rl.close();
});
