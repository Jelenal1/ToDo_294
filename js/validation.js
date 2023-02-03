const USERS = [{"email": "example@example.com", "password": "password"}];



document.addEventListener("DOMContentLoaded", () => {
    const getEmailaddress = document.getElementById("InputEmail");
    const getPassword = document.getElementById("PasswordOne");
    const getPasswordTwo = document.getElementById("PasswordTwo");
    const getSubmit = document.getElementById("Signup");

    getSubmit.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Hello")
       if (getPassword.value == getPasswordTwo.value && getPassword.value != "") {
            const newUser = {
                "email": getEmailaddress.value,
                "password": getPassword.value
            }
            USERS.push(newUser);
            console.log(newUser);
            console.log(USERS);
            getPassword.classList.remove("glowred")
    } else {
        getPassword.classList.add("glowred");
    }
});

})