const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const AssetRoutes = require("./routes/AssetRoutes");
const logResponse = require("./requestLogger");

require('dotenv').config()
// parse application/json
app.use(logResponse);
app.use(BodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/api/Asset", AssetRoutes);

module.exports = app;
