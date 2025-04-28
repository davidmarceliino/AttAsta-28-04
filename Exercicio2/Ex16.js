const readline = require('readline');

function simularElevador() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Para qual andar você deseja ir? (1 a 5) ', (input) => {
    const destino = parseInt(input);

    if (isNaN(destino) || destino < 1 || destino > 5) {
      console.log('Andar inválido. Por favor, escolha um andar entre 1 e 5.');
      rl.close();
      return;
    }

    for (let andar = 1; andar <= destino; andar++) {
      console.log(`Subindo para o andar ${andar}`);
    }

    console.log(`Chegamos ao andar ${destino}!`);
    rl.close();
  });
}

// Chamando a função
simularElevador();
