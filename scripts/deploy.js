const { ethers } = require("hardhats")

async function main(){
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles")
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET")

  try {
    await cryptoBeetles.deployed()
    console.log(`Contract successfully deployed to ${cryptoBeetles.address}`)
    mintNFT()
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }

  const mintNFT = () => {
    try {
      const newItemId = await cryptoBeetles.mint("")
      console.log(`NFT minted successfully with id ${newItemId}`)
    } catch (error) {
      console.log(`Minting Error: ${error.message}`)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
