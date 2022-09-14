const {ethers} = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const ContractB = await ethers.getContractFactory("ContractB");
    const ContractBDeployed = await ContractB.deploy();

    await ContractBDeployed.deployed();
    let ContractBAddr = ContractBDeployed.address;

    console.log("ContractBDeployed address:", ContractBAddr);

    // 测试工厂合约部署及借口调用另个合约
    const ContractBed = await ethers.getContractFactory("ContractB");
    const contractB = await ContractBed.attach(ContractBAddr);

    let result = await contractB.testCallContractA();
    let contractAaddr = await contractB.contractAaddr();
    console.log("Create contractA addr :", contractAaddr.toString());

    let callContractAResult = await contractB.resut();
    console.log("callContractAResult :", callContractAResult.toString());

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

 // npx hardhat run ./scripts/ganache/deploy_ContractB.js --network ganache