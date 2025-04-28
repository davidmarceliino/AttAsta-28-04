const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual a distância total da viagem (em km)? ', (distanciaTotal) => {
  rl.question('Quantos quilômetros você já percorreu? ', (distanciaPercorrida) => {
    let restante = parseFloat(distanciaTotal) - parseFloat(distanciaPercorrida);
    console.log(`Distância restante: ${restante} km`);
    rl.close();
  });
});
