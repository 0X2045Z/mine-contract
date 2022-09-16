const {ethers} = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Erc20OperationInContract02 = await ethers.getContractFactory("Erc20OperationInContract02");
    const Erc20OperationInContract02Deployed = await Erc20OperationInContract02.deploy();

    await Erc20OperationInContract02Deployed.deployed();
    let Erc20OperationInContract02Addr = Erc20OperationInContract02Deployed.address;

    console.log("Erc20OperationInContract02Deployed address:", Erc20OperationInContract02Addr);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

 // npx hardhat run ./scripts/ganache/deploy_Erc20OperationInContract02.js --network ganache
 // Erc20OperationInContract02Deployed address: 0x6211A978973900F916F4249B233b945aEa9a09c9
 // Erc20OperationInContract02Deployed address: 0x9Ce28BFd897D926C9ED79399fC838C7363dfBE15