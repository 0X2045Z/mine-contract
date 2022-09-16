// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 *
 */
contract Erc20OperationInContract02{
    address public LTT = address(0x6290e73F470685a149d182043299cC7e23eAb491);
    address public LTT2 = address(0xe002dAB5DAD72AbB016d6A8e9B2bcdAD5B459e5e);

    // TransferFrom一般用于合约从用户钱包地址中提走Token
    // 钱包地址和合约地址是有区别的，钱包地址是外部账户地址，有公钥和私钥；合约地址是智能合约部署的地址，是没有私钥的；
    // 因此合约无法给其中的Tkoen approve
    // 因此以下方法无法实现
    function testTransferFrom() external {
        uint256 value = 1000000000000000000;
        IERC20(LTT).transferFrom(address(0x313E914338672d2A3070D9643334D04182e7c31d),
                                 address(0xD235D642554A1b7fE9De7770a867B648bb6D3FfD),
                                 value);
    }

}