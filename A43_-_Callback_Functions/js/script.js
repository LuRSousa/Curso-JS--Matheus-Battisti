function exibir(num){
    console.log("A operação é igual a " + num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function mult(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);
mult(2, 4, exibir);