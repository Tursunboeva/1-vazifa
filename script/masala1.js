const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const exit = document.querySelector(".exit");




btn.onclick = function () {
    wrapper.classList.add("show")
}
exit.onclick = function () {
    wrapper.classList.remove("show")
}