// 1. Lista de colegas com nome e idade
const colegas = [
  { nome: "Carlos", idade: 28 },
  { nome: "Ana", idade: 22 },
  { nome: "Pedro", idade: 35 },
  { nome: "Beatriz", idade: 19 }
];

// 2. Comando que organiza os colegas pela idade (menor para o maior)
colegas.sort((primeiro, segundo) => primeiro.idade - segundo.idade);

// 3. Mostra a lista já organizada no console
console.log(colegas);