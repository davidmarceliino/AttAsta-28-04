const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somarParesAteN(n) {
  let soma = 0;
  for (let i = 2; i <= n; i += 2) {
    soma += i;
  }
  return soma;
}

rl.question('Digite um número: ', (resposta) => {
  const n = Number(resposta);
  if (isNaN(n) || n < 2) {
    console.log('Digite um número válido maior ou igual a 2.');
  } else {
    console.log(`A soma dos pares até ${n} é: ${somarParesAteN(n)}`);
  }
  rl.close();
});
