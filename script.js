function validatePassword() {
    const password = document.getElementById("user-password");
    password.addEventListener("keyup", checkConditions);
}
validatePassword();

function confirmPassword () {
const passwordConfirmation = document.getElementById("password-confirmation");
    passwordConfirmation.addEventListener("keyup", () => {
    let userInput = document.getElementById("user-password").value;
    let passwordConfirmationStyle = document.getElementById("password-confirmation-error-message").style;
    let passwordConfirmationValue = passwordConfirmation.value;
    passwordConfirmationStyle.display = passwordConfirmationValue && passwordConfirmationValue === userInput ? "none" : "block";
    })
}
confirmPassword();

function checkConditions() {
    let userInput = document.getElementById("user-password").value;

    let smallLetterStyle = document.getElementById("small-letter").style;
    smallLetterStyle.display = /[a-z]/.test(userInput) ? "none" : "block";

    let capitalLetterStyle = document.getElementById("capital-letter").style;
    capitalLetterStyle.display = /[A-Z]/.test(userInput) ?"none": "block";

    let eightSymbolsStyle = document.getElementById("eight-symbols").style;
    eightSymbolsStyle.display = userInput.length >= 8 ? "none" : "block";

    let specialCharacterStyle = document.getElementById("special-character").style;
    specialCharacterStyle.display = /[!@#$%^&*(),.?":{}|<>]/.test(userInput) ? "none" : "block";
}