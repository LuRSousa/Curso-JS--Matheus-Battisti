var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});

title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
});

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){
    var hide = document.querySelector("#legenda");

    hide.classList.remove("hide");
});

subtitle.addEventListener("mouseout", function(){
    var hide = document.querySelector("#legenda");

    hide.classList.add("hide");
});