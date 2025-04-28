const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos minutos? ', (minutos) => {
  console.log(`${minutos} minutos são ${minutos * 60} segundos.`);
  rl.close();
});
