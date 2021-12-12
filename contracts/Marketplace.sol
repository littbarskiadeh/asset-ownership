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

    event AssetAdded(string name, address tokenAddress, uint256 supply);

    // Create a token when a new asset is listed by a user
    function createAsset(
        string memory name,
        string memory symbol,
        uint256 supply
    ) external returns (address) {
        Asset token = new Asset(name, symbol, msg.sender, supply);
        ////  NOTE: TotalSupply of tokens is minted to msg.sender i.e. address of the client calling this function

        address tokenAddress = address(token);

        Listing memory newAsset = Listing(name, tokenAddress, msg.sender, supply);
        listedAssets.push(newAsset);

        emit AssetAdded(name, tokenAddress, supply);
        return tokenAddress;
    }

    function getListing() public view returns (Listing[] memory) {
        return listedAssets;
    }

    // TODO:
    // 1. Add function to transfer coins to 'Buyer' whenever an Asset is 'Purchased'
    // 2.


}
