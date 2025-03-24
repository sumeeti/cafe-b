document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("sign-in-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signInButton = document.getElementById("sign-in-button");
    const errorMessage = document.getElementById("error-message");

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (email === "" || password === "") {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            return;
        }
        
        // Simulating authentication (Replace with actual backend verification)
        if (email === "user@example.com" && password === "password123") {
            alert("Sign-in successful! Welcome to Café Bibliophile.");
            window.location.href = "profile.html"; // Redirect to profile page
        } else {
            errorMessage.textContent = "Invalid email or password.";
            errorMessage.style.display = "block";
        }
    });
});
