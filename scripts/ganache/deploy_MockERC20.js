const {ethers} = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const MockERC20 = await ethers.getContractFactory("MockERC20");
    const MockERC20Deployed = await MockERC20.deploy("Local Test Token2", "LTT2");

    await MockERC20Deployed.deployed();

    console.log("MockERC20 address:", MockERC20Deployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

 // npx hardhat run ./scripts/ganache/deploy_MockERC20.js --network ganache
 // LTT address(Mac): 0x6290e73F470685a149d182043299cC7e23eAb491
 // LTT2 address(Mac): 0xe002dAB5DAD72AbB016d6A8e9B2bcdAD5B459e5e
 // LTT address(Windows): 0xf218F67441cf42C929743d4eA653881A77167bed