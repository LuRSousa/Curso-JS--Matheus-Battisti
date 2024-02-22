// criar elemento

var el = document.createElement("div");
el.classList = "divCriada";
console.log(el);

var container = document.querySelector("#container");

//inserindo elemento filho
container.appendChild(el);

// insertBefore
var el2 = document.createElement("div");
el2.classList = "div-Before";

var el3 = document.querySelector("#container .divCriada");
container.insertBefore(el2, el3);