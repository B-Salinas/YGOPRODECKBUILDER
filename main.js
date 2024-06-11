const axios = require("axios");
const api_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

axios
  .get(api_url)
  .then((api_res) => {
    const raw = api_res.data;
    const cards = raw.data; // key into main object

    // console.log(Object.keys(cards[0])); // returns an array of strings, using keys from the first card
    // console.log(Object.keys(cards[0]).length); // 1

  })
  .catch((api_err) => {
    console.log(`Uh oh! Something went wrong: ${err.res.status}`);
  });
