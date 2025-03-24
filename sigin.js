document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin-form");

    signinForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload on form submission

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulated authentication (Replace with actual backend logic)
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(user => user.email === email && user.password === password);

        if (validUser) {
            alert("Sign-in successful!");
            localStorage.setItem("currentUser", JSON.stringify(validUser)); // Store session
            window.location.href = "profile.html"; // Redirect to profile page
        } else {
            alert("Invalid email or password.");
        }
    });
});
