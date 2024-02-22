// Sempre começa a contar do 0
var arr = [5, "Matheus", true, {teste:1, teste2:2}]; //obj => {}

console.log(arr);

var arr2 = [2,3,4,5,6];

console.log(arr2);

console.log(arr[1]);
console.log(arr2[0]);

//add ou subscrever elementos em um array
arr[4] = 10;
arr[0] = "Teste";

console.log(arr);

// Arrays são tratados como arrays no JS
console.log(typeof arr);