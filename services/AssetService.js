const Asset = require("../models/Asset");

function AssetService() {
  return {
    list: () => Asset.find(),
    add: data => new Asset(data).save(),
    delete: id => Asset.findByIdAndRemove(id)
  };
}

module.exports = AssetService();
