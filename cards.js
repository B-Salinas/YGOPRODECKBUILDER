const fs = require("fs");
const axios = require("axios");

const api_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

axios
  .get(api_url)
  .then((api_res) => {
    const raw = api_res.data;
    const cards = raw.data; // key into main object

    // Write the data to a JSON file
    fs.writeFileSync("cards.json", JSON.stringify(cards, null, 2));
  })
  .catch((api_err) => {
    console.log(`Uh oh! Something went wrong: ${api_err.response.status}`);
  });
