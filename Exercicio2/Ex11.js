const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual a temperatura? ', (temperatura) => {
  const resultado = temperatura >= 20 && temperatura <= 25;
  console.log(resultado ? 'Temperatura agradável!' : 'Temperatura não agradável.');
  rl.close();
});
