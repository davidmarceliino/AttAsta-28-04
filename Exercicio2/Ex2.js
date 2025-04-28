const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o valor da refeição? R$ ', (valorRefeicao) => {
  let gorjeta = parseFloat(valorRefeicao) * 0.10;
  console.log(`A gorjeta de 10% é R$ ${gorjeta.toFixed(2)}`);
  rl.close();
});
