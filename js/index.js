document.addEventListener(onload, function () {
    const getInputElements = document.getElementById("newtd");
    console.log(getInputElements);
    getInputElements.addEventListener("submit", (event) => {
        event.preventDefault();
    });
})