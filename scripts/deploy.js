const { ethers } = require("hardhat");

async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles");
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET");

  try {
    await cryptoBeetles.deployed();
    console.log(`Contract successfully deployed to ${cryptoBeetles.address}`);

    const newItemId = await cryptoBeetles.mint(
      "https://ipfs.io/ipfs/QmW8B3jGHkKWpmhrKfdJ9VssWxq2XqSQF7AidU7Ri2yhny"
    );
    console.log(`NFT minted successfully with id ${newItemId}`);
  } catch (error) {
    console.log(`Minting Error: ${error.message}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
