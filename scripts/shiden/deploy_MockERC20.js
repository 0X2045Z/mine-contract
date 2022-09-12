const {ethers} = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    // const MockERC20 = await ethers.getContractFactory("MockERC20");
    // const MockERC20Deployed = await MockERC20.deploy("Local Test Token1", "LTT1");

    // await MockERC20Deployed.deployed();

    // console.log("GetSet address:", MockERC20Deployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

 // npx hardhat run ./scripts/shiden/deploy_MockERC20.js --network shiden
 // 