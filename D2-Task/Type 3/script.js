
function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("registerTab").classList.remove("active");
}

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    // document.getElementById("loginTab").classList.remove("active");
    document.getElementById("registerTab").classList.add("active");
}

function login() {
    // Your login logic here
    alert("Login button clicked!");
}

function register() {
    // Your registration logic here
    alert("Register button clicked!");
}
window.onload = function () {
    openPopup();
};

function openPopup() {
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}