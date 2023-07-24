
{
    const welcome = () => {
        console.log("Hello!");
    };


    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".button__themeName");
        body.classList.toggle("body__dark");
        themeName.innerText = body.classList.contains("body__dark") ? "ciemny" : "jasny"
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);
        welcome();
    };

    
    init();
};