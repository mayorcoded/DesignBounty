var StandardBounties = artifacts.require("StandardBounties");

module.exports = function(deployer) {
  deployer.deploy(StandardBounties, "0x0000000000000000000000000000000000000000");
};
