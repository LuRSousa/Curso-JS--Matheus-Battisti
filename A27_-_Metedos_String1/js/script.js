// length
var nome = "Matheus"
console.log(nome.length);

// indexOf

console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de roma";
console.log(frase.indexOf("roeu"));

// slice

var roeu = frase.slice(7, 11);
console.log(roeu);

// replace
var novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);