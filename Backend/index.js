const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const env = require("dotenv");
const rootRouter = require("./routes/index");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1", rootRouter)

// Checking for everything are up
app.get('/', (req, res) => {
    res.send("Welcome to the Simple API!");
});

app.listen(PORT, () => {
    console.log(`Your app is listening on http://localhost:${PORT}`);
});