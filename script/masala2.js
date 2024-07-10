const btn = document.querySelector(".btn");
const $wrapCard = document.querySelector(".wrap-card");
const exit = document.querySelector(".exit");
const $wrapBtn= document.querySelector(".wrap-btn")



btn.onclick = function () {
    $wrapCard.classList.add("show",)
    $wrapBtn.classList.add("show2",)
}
 
exit.onclick = function () {
    $wrapCard.classList.remove("show")
}