function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let captcha = document.getElementById("captcha");

    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");
    let captchaError = document.getElementById("captchaError");


    emailError.innerHTML = "";
    passError.innerHTML = "";
    captchaError.innerHTML = "";

    let isValid = true;

    // Email validation
    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.innerHTML = "Enter a valid email";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passError.innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passError.innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    // Captcha validation
    if (!captcha.checked) {
        captchaError.innerHTML = "Please verify that you are not a robot.";
        captchaError.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
    }

    return isValid;
}
