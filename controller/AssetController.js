const Asset = require("../services/AssetService");
const { createAsset, getListing } = require('../db/EthConnection');
const logger = require('../logger');

function AssetController() {
  const listAssets = async function(req, res) {
    // get listing from blockchain
    const response = await getListing()   //Returns an Array of [arrays of assets] from the blockchain
    /** 
     * [
      'Test Asset2',
      '0xC10Bab0f0B1db1f18ddc82a0204F79B7176dD66c',
      '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
      '1000',
      name: 'Test Asset2',
      tokenAddress: '0xC10Bab0f0B1db1f18ddc82a0204F79B7176dD66c',
      ownerAddress: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
      assetValue: '1000'
    ]
    */
    console.log(response)
    Asset.list().then(data => res.json(data));  //Initial
    // Asset.list().then(() => res.json(response));
  };

  // symbol=description
  const addAssets = async function(req, res) {
    logger.info('add assets called ', req.body )
    const {name, description,price} = req.body;
    const response = await createAsset(name, description, price)
    logger.info('CreateAsset() blockchain response -->>> ', response);

    // Add asset to DB if successfully added to Blockchain
    if(response){
      Asset.add(req.body).then(data => res.json(data));
      logger.info("added asset to DB successfully");
    }
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
