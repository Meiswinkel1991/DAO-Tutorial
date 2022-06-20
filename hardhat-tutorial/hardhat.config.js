require("@nomiclabs/hardhat-waffle")
require("dotenv").config()

const RINKEBY_URL = process.env.RINKEBY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        rinkeby: {
            chainId: 4,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [""],
            url: RINKEBY_URL,
        },
    },
    solidity: "0.8.4",
}
