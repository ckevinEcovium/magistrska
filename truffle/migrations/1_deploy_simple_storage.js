const Campaigns = artifacts.require("Campaigns");

module.exports = function (deployer) {
  deployer.deploy(Campaigns);
};
