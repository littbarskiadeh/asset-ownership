const mongoose = require("mongoose");
const logger = require('../logger');

const serverURI = process.env.DATABASE_URL || "mongodb://mongo/assetdb";

class DBConnection {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(serverURI, { useNewUrlParser: true })
      .then(() => {
        // console.log("Database connection successful");
        logger.info("Database connection successful");
      })
      .catch(err => {
        logger.error("Database connection error");
        logger.error( err);
      });
  }
}

module.exports = new DBConnection();
