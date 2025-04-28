const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se é fim de semana ou dia útil
function tipoDeDia(diaSemana) {
  const diasFimDeSemana = ["sábado", "domingo"];
  return diasFimDeSemana.includes(diaSemana.toLowerCase()) ? "Fim de semana" : "Dia útil";
}

// Perguntar o dia da semana ao usuário
rl.question('Qual o dia da semana? ', (diaSemana) => {
  const resultado = tipoDeDia(diaSemana);
  console.log(resultado);
  rl.close();
});
