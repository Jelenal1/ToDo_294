document.addEventListener("DOMContentLoaded", function () {
    const getInputElements = document.getElementById("newtd");
    const getSubmitElements = document.forms["addtodo"];
    getSubmitElements.addEventListener("submit", function (event) {
        event.preventDefault();
    })
})