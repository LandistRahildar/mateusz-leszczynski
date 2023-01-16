let body = document.querySelector (".body");
let buttonElement = document.querySelector(".js-button");
let actionElement = document.querySelector(".js-buttonAction");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    actionElement.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
})
