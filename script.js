function validatePassword() {
    const password = document.getElementById("user-password");
    // const passwordConfirmation = document.getElementById("password-confirmation");
    password.addEventListener("keyup", checkConditions);
}
validatePassword();

function checkConditions() {
    let userInput = document.getElementById("user-password").value;

    /[a-z]/.test(userInput) ? document.getElementById("small-letter").style.display = "none" :
        document.getElementById("small-letter").style.display = "block";


    /[A-Z]/.test(userInput) ? document.getElementById("capital-letter").style.display = "none" :
        document.getElementById("capital-letter").style.display = "block";

    userInput.length >= 8 ? document.getElementById("eight-symbols").style.display = "none"
        : document.getElementById("eight-symbols").style.display = "block";

    /[!@#$%^&*(),.?":{}|<>]/.test(userInput) ? document.getElementById("special-character").style.display = "none"
        : document.getElementById("special-character").style.display = "block";

    const passwordConfirmation = document.getElementById("password-confirmation");
    passwordConfirmation.addEventListener("keyup", () => {
        passwordConfirmation.value === userInput
            ? document.getElementById("password-confirmation-error-message").style.display = "none" :
            document.getElementById("password-confirmation-error-message").style.display = "block";
    })
}