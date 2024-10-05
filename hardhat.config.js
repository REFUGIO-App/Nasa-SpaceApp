require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    // Mainnet de Base
    "base-mainnet": {
      url: 'https://mainnet.base.org',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
    // Testnet de Sepolia
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
    // Entorno local
    "base-local": {
      url: "http://localhost:8545",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  defaultNetwork: "base-local",
};
