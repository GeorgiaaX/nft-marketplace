const { ethers } = require("hardhat"); // Using CommonJS syntax with Hardhat Toolbox
const { expect } = require("chai");

describe("NFTMarketplace", function () {
  let NFTMarketplace;
  let nftMarketplace;
  let deployer;

  beforeEach(async function () {
    // Get the signers and deploy the contract
    [deployer] = await ethers.getSigners();
    NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.waitForDeployment(); // Wait for deployment to complete
  });

  it("Should return the correct listing price from the contract", async function () {
    // Fetch the listing price from the contract
    const price = await nftMarketplace.getListingPrice();

    // Compare the listing price with the expected value of 0.0015 ether
    expect(price.toString()).to.equal(ethers.parseUnits("0.0015", "ether").toString());
  });
});
