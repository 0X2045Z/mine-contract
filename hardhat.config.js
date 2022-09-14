require("@nomiclabs/hardhat-ethers");
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks: {
    ganache: {
      url: `http://localhost:7545`,
      accounts: [``]
    }
    // ,
    // bscTest: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //   accounts: [``],
    //   gas: 5000000, 
    //   gasPrice: 10000000000
    // },
    // shiden: {
    //   url: "https://evm.shiden.astar.network",
    //   accounts: [``],
    //   gas: 5000000, 
    //   gasPrice: 3000000000,
    //   chainId: 336
    // },
    // rinkeby: {
    //   url: "https://rinkeby.infura.io/v3/",
    //   accounts: [``]
    // }
  }
};