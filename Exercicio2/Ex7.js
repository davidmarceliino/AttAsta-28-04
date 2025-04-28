const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se é número
function ehNumero(valor) {
  return !isNaN(valor);
}

rl.question('Digite um valor: ', (valor) => {
  if (ehNumero(valor)) {
    console.log(`${valor} é um número.`);
  } else {
    console.log(`${valor} não é um número.`);
  }
  rl.close();
});
