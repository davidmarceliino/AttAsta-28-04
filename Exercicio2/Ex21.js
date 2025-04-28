const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function despedida(nome) {
  return `Até logo, ${nome}!`;
}

rl.question('Qual é o seu nome? ', (nome) => {
  console.log(despedida(nome));
  rl.close();
});
