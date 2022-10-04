//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Asset.sol";

contract Marketplace {
    struct Listing {
        string name;
        address tokenAddress;
        address ownerAddress;
        uint256 assetValue;
    }

    Listing[] public listedAssets;
    address buyer; // buyer/investor of the asset

    event AssetAdded(string name, address tokenAddress, uint256 supply);

    // Create a token when a new asset is listed by a user
    function createAsset(
        string memory _name,
        string memory _symbol,     
        uint256 _supply     // this is uint representation of the value of the asset
    ) external returns (address) {
        Asset token = new Asset(_name, _symbol, msg.sender, _supply);
        ////  NOTE: TotalSupply of tokens is minted to msg.sender i.e. address of the client calling this function

        address tokenAddress = address(token);

        Listing memory newAsset = Listing(
            _name,
            tokenAddress,
            msg.sender,
            _supply //should be == token.totalSupply();
        );
        listedAssets.push(newAsset);

        emit AssetAdded(_name, tokenAddress, _supply);
        return tokenAddress;
    }

    function getListing() public view returns (Listing[] memory) {
        return listedAssets;
    }

    // TODO:
    // 1. Add function to transfer coins to 'Buyer' whenever an Asset is 'Purchased'
    // 2.

    // function buyAsset(address _buyer, uint _amount) public returns (){

    // }
}
