document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        console.log("Apertou enter");
    }
});

document.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        console.log("Soltou o Enter");
    }
});