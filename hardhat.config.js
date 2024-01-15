require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const { RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.19',
  paths: {
    artifacts: './app/src/artifacts'
  },
  networks: {
    sepolia: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
