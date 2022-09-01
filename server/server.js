const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get("/", async (req, res) => {
  console.log(req.query);
  const query = req.query.q;
  try {
    const data = await axios.get(
      `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${query}`
    );

    res.send(data.data);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message);
  }
});

app.listen(5000, () => {
  console.log("server started...");
});
