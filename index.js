const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const user = { username, email, password };

   
    localStorage.setItem("user", JSON.stringify(user));

    
    alert("Account created! Redirecting to category page...");
    window.location.href = "category.html"; 
});
