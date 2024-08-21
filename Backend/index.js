const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const env = require("dotenv");
const rootRouter = require("./routes/index");
const accountRouter = require('./routes/account');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Ensure CORS headers are applied to all routes
app.use(cors());

app.use(express.json());
app.use("/api/v1", rootRouter)
app.use("api/v1/account", accountRouter);

// Health check route
app.get('/', (req, res) => {
    res.send("Welcome to the Simple API!");
});

app.listen(PORT, () => {
    console.log(`Your app is listening on http://localhost:${PORT}`);
});