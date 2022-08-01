let menu_icon = document.querySelector(".float-icon");
let container = document.querySelector("header .links");
let items = document.querySelector("header .links .items");
let close = document.querySelector(".close");


menu_icon.onclick = function(){
   container.classList.remove("small");
   close.classList.add("active");

}
close.onclick = function(){
    container.classList.add("small"); 
    close.classList.remove("active");
}
