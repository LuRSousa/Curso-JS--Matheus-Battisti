var teste = 1;

// Sem o 'var' vira uma variável global, pode dar problema as vezes
nome = 'João'

console.log(teste);

// Pode-se alterar o tipo da variável sem problemas, mas pode dificultar uma futura manutenção
teste = 'Matheus'

console.log(teste);

console.log(nome);

// Variáveis só podem iniciar com letras ou os caracteres '_' ou '$'
/* 
var @nome = 'ASD' 
var 5nome = 'ASD'
*/
var _nome = 'ASD';

console.log(_nome);

// Variáveis com mais de uma palavra serão escritas toda junta e com a primeira palavra começando com letra minúscula, as seguintes palavras começaram com letra maiúscula
var meuPrimeiroNome = 'Matheus';

console.log(meuPrimeiroNome);

// let e const funcionam como variáveis normais porém tem suas particularidades
let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

// Pode-se declarar uma variável e atribuir um valor para ela à qualquer momento no código
var meuNome;

console.log(meuNome);

meuNome = 'Matheus';

console.log(meuNome);