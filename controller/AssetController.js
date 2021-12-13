const Asset = require("../services/AssetService");

function AssetController() {
  const listAssets = function(req, res) {
    Asset.list().then(data => res.json(data));
  };

  const addAssets = function(req, res) {
    Asset.add(req.body).then(data => res.json(data));
    console.log("added asset to DB successfully");
  };

  const deleteAssets = function(req, res) {
    Asset.delete(req.params.id).then(data => res.json(data));
  };

  // Add function to addAsset to blockchain
  
  return {
    list: listAssets,
    add: addAssets,
    delete: deleteAssets
  };
}

module.exports = AssetController();
