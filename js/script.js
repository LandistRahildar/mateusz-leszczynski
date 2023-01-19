{
    const buttonElement = document.querySelector(".js-button");

    buttonElement.addEventListener("click", () => {
        const body = document.querySelector(".body");
        const actionElement = document.querySelector(".js-buttonAction");
        body.classList.toggle("body--dark");
        actionElement.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    })

}