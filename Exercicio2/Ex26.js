const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function acessarCor(cores) {
  console.log(`Sua lista de cores favoritas tem ${cores.length} cores.`);
  rl.question(`Qual cor você quer acessar? Digite o número correspondente (1 a ${cores.length}): `, (numero) => {
    const index = parseInt(numero) - 1; // Ajusta o índice para começar de 0
    if (index >= 0 && index < cores.length) {
      console.log(`A cor que você escolheu é: ${cores[index]}`);
    } else {
      console.log('Número inválido, escolha um número entre 1 e ' + cores.length);
    }
    rl.close();
  });
}

const minhasCores = ["azul", "verde", "preto", "amarelo", "rosa", "prata"];
acessarCor(minhasCores);
