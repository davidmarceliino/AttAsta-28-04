const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se o número é zero
function ehZero(numero) {
  return numero === 0;
}

// Perguntar o número ao usuário
rl.question('Digite um número: ', (numero) => {
  const resultado = ehZero(parseFloat(numero));
  console.log(resultado ? 'O número é zero.' : 'O número não é zero.');
  rl.close();
});
