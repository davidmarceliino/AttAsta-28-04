const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function adicionarCor(cores, novaCor) {
  cores.push(novaCor); // Adiciona a nova cor ao final do array
  return cores; // Retorna o array modificado
}

const minhasCores = ["azul", "verde", "preto"];

rl.question('Digite a cor que deseja adicionar: ', (novaCor) => {
  const listaAtualizada = adicionarCor(minhasCores, novaCor);
  console.log(`A nova lista de cores é: ${listaAtualizada}`);
  rl.close();
});
