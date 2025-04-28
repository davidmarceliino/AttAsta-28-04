const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o preço total do pacote? R$ ', (precoTotalPacote) => {
  rl.question('Quantos itens há no pacote? ', (numeroItens) => {
    let precoUnitario = parseFloat(precoTotalPacote) / parseInt(numeroItens);
    console.log(`O preço unitário de cada item é R$ ${precoUnitario.toFixed(2)}`);
    rl.close();
  });
});
