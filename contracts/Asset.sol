//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/** 
Create an ERC20 token with adjustable initial parameters
param name The name of the token
param symbol The symbol of the token
param mintTo The address that the initial supply should be sent to
param supply The totalSupply of the token
*/
contract Asset is ERC20 {


    constructor(
        string memory name,
        string memory symbol,
        address mintTo,
        uint256 supply
    ) ERC20(name, symbol) {
        _mint(mintTo, supply);
    }
}