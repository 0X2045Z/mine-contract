const {ethers} = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const GetSet = await ethers.getContractFactory("GetSet");
    const GetSetDeployed = await GetSet.deploy(0);

    await GetSetDeployed.deployed();

    console.log("GetSet address:", GetSetDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

 // npx hardhat run ./scripts/ganache/deploy_GetSet.js --network ganache
 // GetSet address(Mac): 0x8183777d1a4A3027D8a04c4d22f291a154e9387F
 // GetSet address(Windows): 0x1eE325Ab6F30E1FB5E636e701f5B36102f9bC61C