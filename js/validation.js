const USERS = {"example@example.com": "0039829837498983749823"}

function SignUpPasswordIsIdentical(PasswordOne, PasswordTwo){
     const identicalpassword = PasswordOne.value == PasswordTwo.value;
     return identicalpassword;
}


document.addEventListener("DOMContentLoaded", () => {
    const getEmailaddress = document.getElementById("InputEmail");
    const getPassword = document.getElementById("PasswordOne");
    const getPasswordTwo = document.getElementById("PasswordTwo");
    const getSubmit = document.getElementById("Signup");

    getSubmit.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Hello")
       if (SignUpPasswordIsIdentical(getPassword, getPasswordTwo)) {
            const newUser = {
                "email": getEmailaddress.value,
                "password": getPassword.value
            }
            console.log(newUser);
            console.log(USERS);
    }
});

})