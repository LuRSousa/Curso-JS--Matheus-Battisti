//clearTimeout
var x = 0;

var myTimer = setTimeout(function(){

    console.log("o x é 0");

}, 1500);

x = 5;

if (x > 0){
    clearTimeout(myTimer);
    console.log("o x passou de 0");
}

//clearInterval
var myinterval = setInterval(function(){

    console.log("imprimindo interval")

}, 500);

setTimeout(function(){
    
    console.log("não precisa mais repetir");
    clearInterval(myinterval);

}, 1500)