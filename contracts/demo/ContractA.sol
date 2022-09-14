// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import './interfaces/InterfaceContract.sol';

contract ContractA is InterfaceContract{

    address public admin;

    /**
     * @dev 构造函数
     */
    constructor(){
        //factory地址为合约布署者
        admin = msg.sender;
    }

    function readHello() external override pure returns(uint _a){
        return 1;
    }

}