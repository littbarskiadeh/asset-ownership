const Asset = artifacts.require("Asset");

module.exports = function (deployer) {
  deployer.deploy(Asset, "HOOD", "HOD", 1000);
};
