const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
function show(){
    nav.classList.toggle("show");
}
menu.addEventListener("click",show);