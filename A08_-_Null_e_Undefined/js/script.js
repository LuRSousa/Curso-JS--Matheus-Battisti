//Hoisting = Içamento (pré-inicialização da variável), será tratada como undefined
console.log(sobrenome);

var nome = null;
var sobrenome;

console.log(nome);
console.log(sobrenome);

nome = "Matheus";
sobrenome = "Battisti"

console.log(nome);
console.log(sobrenome);