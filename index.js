let $hamburgerMenu = document.getElementById("hamburgerMenu")
let $menuUl = document.getElementById("menu-ul")

$hamburgerMenu.addEventListener("click", ()=>{
    $menuUl.classList.contains("displayNone") ? $menuUl.classList.remove("displayNone")  : $menuUl.classList.add("displayNone")
})
window.addEventListener("resize",()=>{
   window.innerWidth >= 768 ? $menuUl.classList.add("displayBlock") / $menuUl.classList.remove("displayNone") : $menuUl.classList.add("displayNone") / $menuUl.classList.remove("displayBlock")
})