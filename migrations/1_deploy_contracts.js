const CrossChainCounter = artifacts.require("CrossChainCounter");
const { getAddress } = require("@zetachain/protocol-contracts");

module.exports = function(deployer,network) {
  const connector = getAddress("connector", network);
  deployer.deploy(CrossChainCounter,connector);
};
