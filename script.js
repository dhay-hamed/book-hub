// 1. Display an alert message when the home page loads
window.onload = function() {
    if (window.location.pathname.includes("home.html")) {     
        alert("Welcome to our website!");
    }
};
// 2. Change the color of the introduction text on the home page when clicked
document.addEventListener("DOMContentLoaded", function() {
    const introText = document.querySelector("main p");
    if (introText) {
        introText.onclick = function() {
            introText.style.color = "blue";
        };
    }
});
// 3. Handle onmousedown and onmouseup events on the password field in the login page
const passwordField = document.querySelector("#password");
if (passwordField) {
    passwordField.onmousedown = function() {
        passwordField.style.backgroundColor = "lightgray";
    };
    passwordField.onmouseup = function() {
        passwordField.style.backgroundColor = "";
    };
}
// 4. Color picker to change the background color
document.addEventListener("DOMContentLoaded", function() {
    // Check if the color picker exists
    const colorPicker = document.querySelector("#colorPicker");
    
    // Ensure the color picker element is present on the page
    if (colorPicker) {
        colorPicker.addEventListener("change", function() {
            document.body.style.backgroundColor = colorPicker.value;
        });
    }
});