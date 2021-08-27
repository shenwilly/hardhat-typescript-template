import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import '@typechain/hardhat'
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import "hardhat-gas-reporter";
import "solidity-coverage";

import { HardhatUserConfig } from "hardhat/types";

import "./tasks/accounts";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      { 
        version: "0.8.4", 
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        } 
      },
    ],
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
      allowUnlimitedContractSize: true,
      // forking: {
      //   url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      //   blockNumber: 12984971,
      // },
      // hardfork: "berlin"
    },
    localhost: {
      allowUnlimitedContractSize: true
    },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [MAINNET_PRIVATE_KEY],
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [RINKEBY_PRIVATE_KEY],
    // },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [ROPSTEN_PRIVATE_KEY],
    // },
  },
  // etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: ETHERSCAN_API_KEY,
  // },
  gasReporter: {
    enabled: false,
    currency: 'eth',
  },
  mocha: {
    timeout: 2000000
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
};

export default config;