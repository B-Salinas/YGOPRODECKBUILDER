const fs = require("fs");
const axios = require("axios");

const api_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

axios
  .get(api_url)
  .then((api_res) => {
    const raw = api_res.data;
    const cards = raw.data; // key into main object

    // Create a new array with only the properties you need
    const simplifiedCards = cards.map((card) => ({
      id: card.id,
      name: card.name,
      type: card.type,
      frameType: card.frameType,
      desc: card.desc,
      race: card.race,
      archetype: card.archetype,
      ygoprodeck_url: card.ygoprodeck_url,
      card_sets: card.card_sets,
      card_images: card.card_images,
      card_prices: card.card_prices,
    }));

    // Write the data to a JSON file
    fs.writeFileSync("cards.json", JSON.stringify(simplifiedCards, null, 2));
  })
  .catch((api_err) => {
    console.log(`Uh oh! Something went wrong: ${api_err.response.status}`);
  });
