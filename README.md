# Eden's Flowers
Eden's Flowers NFT project is a collection of 100 unique AI generated flowers on a contract with unique mechanisms built to extend the LOVE token project and display the capabilities of a smart contract as an art piece.

#### Live Website viewable at <a href='https://edensflowers.netlify.app/' target="_blank" rel="noopener noreferrer">https://edensflowers.netlify.app/</a>
<img width="944" alt="image" src="https://user-images.githubusercontent.com/38538941/224634624-a71168a7-cae0-41ae-974a-d785cba5ab55.png">

## src/components
#### Home
-Container for H(ome)Section
#### HSection
-Default Page, Displays the art of the collection with an interactive interface of flipping cards.
#### NavBar
-Navigation, consistently present at the top of the page. Dynamic based on window size and includes the collection image links which are also consistently present.
#### Minter
-Minting Page connected to the flower contract, displays amount already minted with total supply.
#### Switcher
-Switcher connects the user to interacting with the contracts mechanisms. In this area based on the user's token holdings the user can switch between actions with the contract including sending their tokens, using the collection's switch mechanism, or observing the collection's ending time. 
#### infoPage
-Information centered page explaining the project and its sections.
## src/contracts
#### flower.json 
-ABI to Eden's Flowers contract found at 0xca2576Fe376f696d7af21F732c3962CD96C2dB11 on mainnet.
#### Love.json
-ABI to LOVE token contract found at 0x64F9670a6eb014e222a5a97C131FC8D19c98f128 on mainnet.
## src/Flowers
#### flowersimg
-Image of each flower in the collection allowing for display of flowers in the Switcher component.
#### flowersmeta
-Metadata to each flower in the collection.

## Versions
Node v19.3.0
