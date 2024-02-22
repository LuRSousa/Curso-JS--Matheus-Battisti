var x = 1;
var y = 3;

console.log(x, y);

function teste(){
    var z = 0;
    console.log(z);
    console.log(x);
}

teste();

// Apenas variáveis de escopo global podem ser utilizadas em qualquer escopo

// Quando uma variável declarada dentro de uma função é utilizada fora dela, temos um erro, pois ela mudou de escopo
/* console.log(z); */

function testando(){
    var z = 5;
    console.log(z);
}

testando();

if(true){
    var p = 1
}

console.log(p);