const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let cards = {}; // This will store our card data

// Endpoint to add a card
app.post("/cards", (req, res) => {
  const card = req.body;
  cards[card.id] = card;
  res.status(201).send();
});

// Endpoint to get a card by id
app.get("/cards/:id", (req, res) => {
  const card = cards[req.params.id];
  if (card) {
    res.json(card);
  } else {
    res.status(404).send();
  }
});

// Endpoint to get all cards
app.get("/cards", (req, res) => {
  res.json(cards);
});

// Start the server
app.listen(3000, () => console.log("Server is running on port 3000"));
