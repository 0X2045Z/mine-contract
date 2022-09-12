# 将用这个项目库学习使用HardHat，Openzepelin等合约编写知识
# HardHat
Hardhat是一个方便在以太坊上进行构建的任务运行器。使用它可以帮助开发人员管理和自动化构建智能合约和dApp的过程中固有的重复任务，以及轻松地围绕此工作流程引入更多功能。 Hardhat还内置了Hardhat 网络，Hardhat 网络是为开发而设计的本地以太坊网络。 用来部署合约，运行测试和调试代码。
## 安装HardHat
- 初始化一个npm项目  
  npm init --yes
- 安装hardhat，--save-dev 将hardhat作为开发时依赖写在    package.json文件中的devDependencies  
  npm install --save-dev hardhat
## 创建项目
- 创建一个新的hardhat.config.js(Create an empty hardhat.config.js)  
  npx hardhat
## 准备工作
- 安装插件以和合约交互  
  并将require("@nomiclabs/hardhat-ethers"); 与 require('@nomiclabs/hardhat-waffle'); 添加至hardhat.config.js  
  npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

## 使用Openzeppelin
- npm install @openzeppelin/contracts --save

# 其他  
- 重新添加被忽略的文件  
  git add -f
- 安装依赖  
  npm install