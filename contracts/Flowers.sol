// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Interfaces/Ilove.sol";

contract MyTokentest is ERC721Enumerable, Ownable {
    string public baseURI = "https://ipfs.io/ipfs/bafybeiggybn2qnqqizr7w4rwsp3ud76fgulayewmlcmvlkszce7d24u4dy/";
    uint256 public supplyMinted = 0;
    uint256 public expiration;
    mapping (uint256 => uint256) public flowerId;
    LoveToken public LoveTokenAddress = LoveToken(0xd60473822B706641baE873bE68988538df4CD61C);


    constructor() ERC721("MyTokentest", "MTK") {
        for(uint256 i;i < 50; ++i){
            Mint();
        }
        expiration = block.timestamp + 4 hours;
    }

    function Mint()
        public
    {
       uint256 id = supplyMinted+1;
       require(id < 101);
       _safeMint(msg.sender, id);
       flowerId[id] = id;
       supplyMinted++;
    }

    function AirdropMint(address[] calldata _addresses)
        public
    {   
        for(uint i;i < _addresses.length; ++i){
        uint256 id = supplyMinted+1;
        require(id < 101);
        _safeMint(_addresses[i], supplyMinted);
        flowerId[id] = id;
        supplyMinted++;
        }
    }

    //Switch Flower images
    function flowerSwitch(uint256 _from, uint256 _to) external {
        address switcher = ownerOf(_from);
        address switchee = ownerOf(_to);
        require(msg.sender == switcher);
        require(LoveTokenAddress.balanceOf(switcher) > 0);
        require(LoveTokenAddress.balanceOf(switchee) > 0);
        uint256 tokento_ = flowerId[_to];
        flowerId[_to] = flowerId[_from];
        flowerId[_from] = flowerId[tokento_];
        expireCheck();
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),"ERC721Metadata: URI query for nonexistant token");
        address tokenowner = ownerOf(tokenId);
        string memory currentBaseURI = _baseURI();
        if(LoveTokenAddress.balanceOf(tokenowner) < 1){
            return bytes(currentBaseURI).length > 0 ? string(abi.encodePacked(currentBaseURI, "0", ".json")): "";
        }
        return bytes(currentBaseURI).length > 0 ? string(abi.encodePacked(currentBaseURI, Strings.toString(tokenId), ".json")): "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function _transfer(address from, address to, uint256 tokenId) internal virtual override {
        super._transfer(from,to,tokenId);
        expireCheck();
    }
    function exiprationTime() public view returns (uint256){
        if(expiration > block.timestamp){
            return(expiration - block.timestamp);
        }
        return 0;
    }
    function expireCheck() public {
        if(block.timestamp > expiration){
            selfdestruct(payable(address(msg.sender)));
        }
    }


    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}