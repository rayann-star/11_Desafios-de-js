// 1. Lista de colegas
const colegas = [
  { nome: "Carlos", idade: 28 },
  { nome: "Ana", idade: 22 },
  { nome: "Pedro", idade: 35 },
  { nome: "Beatriz", idade: 19 }
];

// 2. Comando que organiza por ordem alfabética (A-Z)
colegas.sort((primeiro, segundo) => {
  if (primeiro.nome < segundo.nome) return -1;
  if (primeiro.nome > segundo.nome) return 1;
  return 0;
});

// 3. Mostra a lista organizada por nome no console
console.log(colegas);