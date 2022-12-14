// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MockERC20
 *
 * @dev A mintable ERC20 token contract for testing. Anyone can mint or burn. DO NOT
 * use it for production.
 */
contract MockERC20 is ERC20 {
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 1800000 * 10 ** decimals()); //Transfer token to deployer
    }

    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external {
        _burn(account, amount);
    }
}