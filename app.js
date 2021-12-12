const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const AssetRoutes = require("./routes/AssetRoutes");

require('dotenv').config()
// parse application/json
app.use(BodyParser.json());

app.use("/api/Asset", AssetRoutes);

module.exports = app;
