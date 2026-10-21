// 1. Lista de colegas inicial
const colegas = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 28 }
];

// 2. ADICIONAR: O comando .push() coloca uma nova pessoa no final da lista
colegas.push({ nome: "Lucas", idade: 30 });

// 3. REMOVER: O comando .pop() remove a última pessoa da lista (no caso, o Lucas)
colegas.pop();

// 4. Mostra como a lista ficou no console
console.log(colegas);