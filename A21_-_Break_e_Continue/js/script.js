for(var i = 10; i > 0; i--){
    console.log(i);

    if (i === 5){
        break;
    }   
}

console.log("Break");

var x = 10

while(x < 100){
    
    x += 10

    if(x === 60 || x === 90){
        console.log("continue")
        continue;
    }
    
    console.log("Testando continue " + x)
}