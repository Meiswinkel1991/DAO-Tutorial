//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error FakeNFTMarketplace__NotCorrectETHAmount();

contract FakeNFTMarketplace {
    ///@dev Maintain a mapping Fake TokenId to Owner adresses
    mapping(uint256 => address) public tokens;
    ///@dev Set the purchase price for each Fake NFT
    uint256 private nftPrice = 0.01 ether;

    /// @dev purchase() accepts ETH and marks the owner of the given tokenId as the caller adress
    ///@param _tokenId - the fake NFT token Id to purchase
    function purchase(uint256 _tokenId) external payable {
        if (msg.value != nftPrice) {
            revert FakeNFTMarketplace__NotCorrectETHAmount();
        }
        tokens[_tokenId] = msg.sender;
    }

    /// @dev getPrice() returns the price of one NFT
    function getPrice() external view returns (uint256) {
        return nftPrice;
    }

    ///@dev available() checks wether the given tokenId has already been sold or not
    ///@param _tokenId - the tokenId to check for
    function available(uint256 _tokenId) external view returns (bool) {
        //address(0) = 0x0000000000000000000000000000000000000000
        // This is the default value for addresses in Solidity
        if (tokens[_tokenId] == address(0)) {
            return true;
        }
        return false;
    }

    constructor() {}
}
