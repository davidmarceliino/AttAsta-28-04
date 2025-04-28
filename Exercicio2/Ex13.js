const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se tem entrada gratuita
function temEntradaGratuita(idade) {
  return idade >= 65;
}

// Pedir a idade ao usuário
rl.question('Qual a sua idade? ', (idade) => {
  if (temEntradaGratuita(parseInt(idade))) {
    console.log('Você tem entrada gratuita!');
  } else {
    console.log('Você não tem entrada gratuita.');
  }
  rl.close();
});
