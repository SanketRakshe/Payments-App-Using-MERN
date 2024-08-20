const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const env = require("dotenv");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to the Simple API!");
})

app.listen(PORT, () => {
    console.log(`Your app is listening on http://localhost:${PORT}`);
});