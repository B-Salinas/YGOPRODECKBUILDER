const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");

const api_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

let cards = {}; // This will store our card data

axios
  .get(api_url)
  .then((api_res) => {
    const raw = api_res.data;
    const cards_data = raw.data; // key into main object

    // Store the data in memory
    cards = cards_data;
  })
  .catch((api_err) => {
    console.log(`Uh oh! Something went wrong: ${api_err.response.status}`);
  });

const app = express();
app.use(bodyParser.json());

// Endpoint to add a card
app.post("/cards", (req, res) => {
  const card = req.body;
  cards[card.id] = card;
  res.status(201).send();
});

// Endpoint to get a card by main array id
app.get("/cards/:id", (req, res) => {
  const card = cards[req.params.id];
  if (card) {
    res.json(card);
  } else {
    console.log("Card (by id) not found :(");
    res.status(404).send();
  }
});

// Endpoint to get a card by ID property
app.get("/cards/:id", (req, res) => {
  const id = Number(req.params.id);
  const card = cards.find((card) => card.id === id);
  if (card) {
    res.json(card);
  } else {
    console.log("Card (by ID property) not found :(");
    res.status(404).send();
  }
});

// Endpoint to get a card by name
// app.get("/cards/:name", (req, res) => {
//   const card = cards[req.params.name];
//   if (card) {
//     res.json(card);
//   } else {
//     console.log('Card (by name) not found :(');
//     res.status(404).send();
//   }
// });

// Endpoint to get all cards
app.get("/cards", (req, res) => {
  res.json(cards);
});

// Start the server
app.listen(3000, () => console.log("Server is running on port 3000"));
