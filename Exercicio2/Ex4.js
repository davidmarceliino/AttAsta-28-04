const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos anos você tem? ', (idadeAnos) => {
  let dias = parseFloat(idadeAnos) * 365;
  console.log(`Você tem aproximadamente ${dias} dias de vida.`);
  rl.close();
});
