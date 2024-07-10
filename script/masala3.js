const sidebarEL =document.querySelector(".sidebar")
const menu =document.querySelector(".menu-btn")
const sidebarBtn =document.querySelector(".sidebar-btn")

menu.onclick=function(){
sidebarEL.style.left="0"
}

sidebarBtn.onclick=function(){
    sidebarEL.style.left="-100%"
}

