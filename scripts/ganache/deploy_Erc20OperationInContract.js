const {ethers} = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Erc20OperationInContract = await ethers.getContractFactory("Erc20OperationInContract");
    const Erc20OperationInContractDeployed = await Erc20OperationInContract.deploy();

    await Erc20OperationInContractDeployed.deployed();
    let Erc20OperationInContractAddr = Erc20OperationInContractDeployed.address;

    console.log("Erc20OperationInContractDeployed address:", Erc20OperationInContractAddr);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

 // npx hardhat run ./scripts/ganache/deploy_Erc20OperationInContract.js --network ganache
 // Erc20OperationInContractDeployed address: 0x3D2Ca415d9B7574cC5bc05a08F343A17C8fAF224
 // Erc20OperationInContractDeployed address: 0x5EC8b90ccE58a11472691200FB58d3E170f9ba06
 // Erc20OperationInContractDeployed address: 0x5161c41e9Ba1Bc12adeDd9961EdE91Fc4DeF44B9
 // Erc20OperationInContractDeployed address: 0x313E914338672d2A3070D9643334D04182e7c31d
 // Erc20OperationInContractDeployed address: 0x12C83f165670D2973CAAeDcAe93CfF9224fee41C
 // Erc20OperationInContractDeployed address: 0xc4044A36f35B5773Fd55865472dEaF1cAD2D1968
 // Erc20OperationInContractDeployed address: 0xa1882002Ea167537834DcA76E0A12Da85f5f68d0
 // Erc20OperationInContractDeployed address: 0xCa9a64780622bE0A9C9Bb16a520580F0c318a904