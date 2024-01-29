const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());

let cart = [];
let total = 0;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/cart", (req, res) => {
  res.json({ items: cart, total: total });
});

app.post("/addItem", (req, res) => {
  const { itemName, itemPrice } = req.body;

  // Validate itemPrice on the server-side before processing
  if (!isValidItemPrice(itemPrice, itemName)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid item price" });
  }

  cart.push({ name: itemName, price: itemPrice });
  total += itemPrice;

  res.json({ success: true });
});

function isValidItemPrice(price, name) {
  // Implement your validation logic here
  // For example, check if price is a positive number

  if (name === "MacBook Pro") {
    return typeof price === "number" && price >= 1000;
  }
  if (name === "Samsung Galaxy S24") {
    return typeof price === "number" && price >= 500;
  }
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
