const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantas polegadas? ', (polegadas) => {
  let centimetros = parseFloat(polegadas) * 2.54;
  console.log(`${polegadas} polegadas é igual a ${centimetros.toFixed(2)} centímetros.`);
  rl.close();
});
