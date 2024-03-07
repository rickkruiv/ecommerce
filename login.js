function toggleForm() {
    var loginForm = document.getElementById("signin");
    var registerForm = document.getElementById("signup");
    var loginDesc = document.getElementById("loginDesc");
    var registerDesc = document.getElementById("registerDesc");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none"
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    if (loginDesc.style.display === "none") {
        loginDesc.style.display = "block";
        registerDesc.style.display = "none"
    } else {
        loginDesc.style.display = "none";
        registerDesc.style.display = "block";
    }
}

