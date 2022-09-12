require("@nomiclabs/hardhat-ethers");
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks: {
    ganache: {
      url: `http://localhost:7545`,
      accounts: [`2112532217e945872cfd39380b9d9d03b8f55fd3fbaee128b6ac3db61a3b3b8b`]
    },
    bscTest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [`99cdac3a42c414743f331904f33980d57e0247f5819ce7293c42f947618365c5`],
      gas: 5000000, 
      gasPrice: 10000000000
    },
    shiden: {
      url: "https://evm.shiden.astar.network",
      accounts: ["99cdac3a42c414743f331904f33980d57e0247f5819ce7293c42f947618365c5"],
      gas: 5000000, 
      gasPrice: 3000000000,
      chainId: 336
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/",
      accounts: ["99cdac3a42c414743f331904f33980d57e0247f5819ce7293c42f947618365c5"],
      gas: 5000000, 
      gasPrice: 3000000000,
      chainId: 336
    }
  }
};