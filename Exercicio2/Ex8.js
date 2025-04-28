const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let portaAberta = false;  // Porta inicialmente fechada

function verificarPorta() {
  return portaAberta;
}

function alterarEstadoPorta(estado) {
  portaAberta = estado === 'aberta';
}

rl.question('A porta está aberta ou fechada? ', (resposta) => {
  alterarEstadoPorta(resposta.toLowerCase());
  console.log('A porta está aberta?', verificarPorta());
  rl.close();
});
