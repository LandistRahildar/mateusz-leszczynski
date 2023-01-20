// {
//     const buttonChangingBackground = document.querySelector(".js-button");
//     const body = document.querySelector(".body");
//     const buttonChangingBackgroundAction = document.querySelector(".js-buttonAction");

//     buttonChangingBackground.addEventListener("click", () => {
//         body.classList.toggle("body--dark");
//         buttonChangingBackgroundAction.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
//     })

// }

{
    const welcome = () => {
        console.log("Witam.");
    }

    welcome();
}

{
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const buttonChangingBackgroundAction = document.querySelector(".js-buttonAction");
        body.classList.toggle("body--dark");
        buttonChangingBackgroundAction.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    }

    const init = () => {
        const buttonChangingBackground = document.querySelector(".js-button");
        buttonChangingBackground.addEventListener("click", toggleBackground);
    }

    init();
}