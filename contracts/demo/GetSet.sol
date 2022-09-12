// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract GetSet {

    uint256 public a;

    constructor(uint256 _a){
        a = _a;
    }

    function getA() public view returns (uint256) {
        return a;
    }

    function setA(uint256 _a) public  {
        a = _a;
    }

}