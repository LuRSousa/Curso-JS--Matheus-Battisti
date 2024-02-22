function primeiraFuncao(){
    console.log("Hello World da Função");
}

primeiraFuncao();

function dizerNome(nome){
    console.log("O nome é: " + nome);
}

dizerNome("Matheus");
dizerNome("Pedro");
dizerNome("Xavier");

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm);

console.log(soma(4, 5));