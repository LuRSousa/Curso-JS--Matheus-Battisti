// criar elemento
var el = document.createElement("h3");
el.classList = "testandoClasse";
var texto = document.createTextNode("Texto do H3");
el.appendChild(texto);

//selecionar elemento
var title = document.querySelector("#title");

//seleecionar pai
var pai = title.parentNode;

//trocar elementos
pai.replaceChild(el, title);