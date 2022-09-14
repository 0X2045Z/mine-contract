// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import './interfaces/InterfaceContract.sol';

contract ContractA is InterfaceContract{

    function readHello() external override pure returns(uint _a){
        return 1;
    }

}