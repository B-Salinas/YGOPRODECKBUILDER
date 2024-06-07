const axios = require("axios");
const api_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

axios
  .get(api_url)
  .then((api_res) => {
    const raw = api_res.data;
    const cards = raw.data;

  })
  .catch((err) => {
    console.log(`Uh oh! Something went wrong: ${err.res.status}`);
  });
