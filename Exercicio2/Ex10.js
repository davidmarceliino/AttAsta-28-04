const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantas páginas você já leu? ', (paginasLidas) => {
  rl.question('Quantas páginas o livro tem? ', (totalPaginas) => {
    console.log(`Faltam ${totalPaginas - paginasLidas} páginas.`);
    rl.close();
  });
});
