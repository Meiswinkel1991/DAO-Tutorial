const { ethers } = require("hardhat")
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants")

async function main() {
    // Deploy the FakeNFTMarketplace contract first
    const FakeNFTMarketplace = await ethers.getContractFactory(
        "FakeNFTMarketplace"
    )
    const fakeNftMarketplace = await FakeNFTMarketplace.deploy()
    await fakeNftMarketplace.deployed()
    console.log("FakeNFTMarketplace deployed to:", fakeNftMarketplace.address)

    // Now deploy the CryptoDevsDAO contract
    const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO")
    const cryptoDevsDAO = await CryptoDevsDAO.deploy(
        fakeNftMarketplace.address,
        CRYPTODEVS_NFT_CONTRACT_ADDRESS
    )
    await cryptoDevsDAO.deployed()

    console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
