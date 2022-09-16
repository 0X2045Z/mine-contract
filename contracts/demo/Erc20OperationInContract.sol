// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 *
 */
contract Erc20OperationInContract{
    address public LTT = address(0x6290e73F470685a149d182043299cC7e23eAb491);
    address public LTT2 = address(0xe002dAB5DAD72AbB016d6A8e9B2bcdAD5B459e5e);

    bool public approveResult;

    function getBalanceB1() external view returns(uint256 _b1){
        _b1 = IERC20(LTT).balanceOf(address(this));
    }

    function getBalanceB2() external view returns(uint256 _b2){
        _b2 = IERC20(LTT2).balanceOf(address(this));
    }

    // 钱包地址和合约地址是有区别的，钱包地址是外部账户地址，有公钥和私钥；合约地址是智能合约部署的地址，是没有私钥的；
    // 因此合约无法给其中的Tkoen approve
    // 因此以下方法无法实现
    function testApprove() external returns(bool _approveResult){
        uint256 value = IERC20(LTT).balanceOf(address(this));
        _approveResult = IERC20(LTT).approve(address(0x9Ce28BFd897D926C9ED79399fC838C7363dfBE15),
                                 value);
        approveResult = _approveResult;
    }

    function testTransfer(address _to) public  {
        uint256 value = IERC20(LTT).balanceOf(address(this));
        IERC20(LTT).transfer(_to, value);
    }

    // TransferFrom一般用于合约从用户钱包地址中提走Token，需要先调用approve方法
    function testTransferFrom(address _from) external {
        uint256 value = IERC20(LTT).balanceOf(address(this));
        IERC20(LTT).transferFrom(_from, address(this), value);
    }
}