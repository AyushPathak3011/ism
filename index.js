const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

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
  cart.push({ name: itemName, price: itemPrice });
  total += itemPrice;

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
