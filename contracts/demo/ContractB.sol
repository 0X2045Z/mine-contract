// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import './ContractA.sol';

// 1.工厂创建部署合约
// 2.合约通过接口形式调用另一个合约
contract ContractB {

    address public contractAaddr;
    uint public resut;

    function testCallContractA() external returns(address pair){
        // 合约bytecode
        bytes memory bytecode = type(ContractA).creationCode;
        // salt
        bytes32 salt = keccak256(abi.encodePacked(msg.sender, msg.sender));
        // deploy
        address _addr = deploy(bytecode, salt);

        //接口形式调用另一个合约
        uint _resut = InterfaceContract(_addr).readHello();

        resut = _resut;
        contractAaddr = _addr;
        return _addr;
    }

    // creat2工厂合约--部署合约
    // creat2部署无法给构造函数传参，可以在所布合约中添加init方法用于传递初始化参数
    // code--需要部署的合约的code，salt--盐值
    function deploy(bytes memory code, bytes32 salt) internal returns (address addr) {
        // 内联会编
        assembly {
            addr := create2(0, add(code, 0x20), mload(code), salt)
            if iszero(extcodesize(addr)) { revert(0, 0) }
        }
    }

}