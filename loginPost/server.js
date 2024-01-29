// server.js
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3002;

app.use(cookieParser());

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists in the cookie
  if (req.cookies.username) {
    return res.redirect("/signupError");
  }

  // Store username in a cookie
  res.cookie("username", username);

  // Redirect to a different page after successful signup
  res.redirect("http://localhost:3001");
});

// Enable parsing of request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));
// Handle GET request for the /signup path
// app.get("/signup", (req, res) => {
//   // Send the signup HTML page to the client
//   res.sendFile(__dirname + "/signup.html");
// });
app.get("/login", (req, res) => {
  // Send the signup HTML page to the client
  res.sendFile(__dirname + "/login.html");
});
// Handle signup form submission
// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;

//   // Check if the username already exists in local storage
//   if (localStorage.getItem(username)) {
//     // Redirect to an error page if the username is already taken
//     return res.redirect("/signupError");
//   }

//   // Store username and password in local storage
//   localStorage.setItem(username, password);

//   // Redirect to a different page after successful signup
//   res.redirect("http://localhost:3001");
// });

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the stored password matches the input password
  if (localStorage.getItem(username) === password) {
    // Redirect to a different page after successful login
    return res.redirect("http://localhost:3001");
  }

  // Redirect to an error page if the username or password is incorrect
  res.redirect("/loginError");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
