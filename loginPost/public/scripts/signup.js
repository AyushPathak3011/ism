// signup.js
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the form data
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    // Perform client-side validation
    if (!username || !password) {
      alert("Username and password are required");
      return;
    }

    // Submit the form
    signupForm.submit();
  });
});
