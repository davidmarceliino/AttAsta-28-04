const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o nome de usuário? ', (nomeUsuario) => {
  console.log(`${nomeUsuario}@exemplo.com`);
  rl.close();
});
