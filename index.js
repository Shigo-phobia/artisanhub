// registration.js

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate saving user data (mock demo account) to localStorage
    const user = { username, email, password };

    // Store user data in localStorage (it stays in the browser until deleted)
    localStorage.setItem("user", JSON.stringify(user));

    // Simulate redirection to category page
    alert("Account created! Redirecting to category page...");
    window.location.href = "category.html"; // Change this to your category page URL
});
