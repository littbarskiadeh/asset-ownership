const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: Number
});

module.exports = mongoose.model("Asset", AssetSchema);
