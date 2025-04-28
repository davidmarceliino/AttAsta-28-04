const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar a aprovação
function checarAprovacao(nota) {
  return nota >= 7 ? "Aprovado" : "Reprovado";
}

// Perguntar a nota do aluno
rl.question('Qual a sua nota? ', (nota) => {
  const resultado = checarAprovacao(parseFloat(nota));
  console.log(resultado);
  rl.close();
});
