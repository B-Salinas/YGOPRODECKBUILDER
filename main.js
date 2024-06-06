const axios = require("axios");

const api_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

axios
  .get(api_url)
  .then((res) => {
    const cards = res.data;
    console.log(cards);
  })
  .catch((err) => {
    console.log(`Uh oh! Something went wrong: ${err.res.status}`);
  });
