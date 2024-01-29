// login.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the form data
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Perform client-side validation
    if (!username || !password) {
      alert("Username and password are required");
      return;
    }

    // Submit the form
    loginForm.submit();
  });
});
