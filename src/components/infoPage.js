import React, { Component } from 'react'


class InfoPage extends Component {
  
  render() {
    return (
      <div className=" ">
          <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
            <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>About Eden's Flowers</h1>

            <p>Eden's Flowers is a collection of 100 unique Flowers with dyanamic interactions, both interactive and automatic, built as a second layer to the Love Token. The initial supply of Flowers was airdropped to Love Token holders on February 19th 2023, with the remaining supply being available for purchase. The collection aims to emphasize human experiences of connection, equality, and impermenance through imagery and mechanics. The most prominent aspect of the collection is the seperation of blooming revealed flowers, and dead unrevealed flowers. "Without Love there is no chance to bloom." Flower holders who do not own a Love Token will only be able to own Dead Flowers. Dead Flowers may be transferred and sold as normal, but may not partkae the collection mechanism and will be represented by a single image of a oppurtunistic pile of dirt. Upon the owner of a dead flower recieving a Love Token their flower will then be revealed and again be eligible for the mechanism. Flowers can switch back and forth between the states of Dead and Blooming as they move wallets, depending whether their current owner is a Love token holder. This collection is both a gift to Love token holders who represent my early community and a artistic expression of code manifesting itself as a interactive art piece.</p>

            <h2>Love Token</h2>
            <p>Love token is a fun lighthearted project with a mass proliferation mechanism. Love token holders will forver be Love token holders. Each time to NFT to is transferred toa different address a new token is minted back to the sender of the Love token thus making Love Tokens monetarily worthless themselves, but not without value as demonstrated with the Flowers added layer to the Love collection. </p>
            <h2>The Garden</h2>
            <p>"The Garden" is a section to interact with all of the mechanisms of the Eden's Flowers Collection. Check out The Garden tab to send your token(s) to different addresses, interact with the collection's switch mechanism, or observe the remaining time of the collection. The transferring flowers subsection is only available to holders of Flowers, and the switching Flowers subsection is only available to holders of both LOVE and Flowers. Details on the contract's mechanisms can be found below.</p>
            <h2>Switching flowers</h2>
            <p></p>
            <h2>The End</h2>
            <p>The Eden's Flower collection rescinds its permenance to remind us of the value of a moment. This collection will not exist forever; at 'The End' section of the Garden you can find a timer displaynig the remaining time for the collection to exist, at the conclusion of this timer the disabled button at the bottom of the page will then become active allowing any user to end the chapter of this collection and selfdestruct the contract. Prior to Eden's flowers I became engaged with many on chain works and began developing my own, interested in creating tokens that will stand with Ethereum until it's demise. However, seeing the life within a bundled boquet of flowers one morning reminded me of the beauty of the temporary. I realized the obsession of the immortal was not everything, and sometimes it is the brevity of a moment that provides its signifigance. </p>
            <h2>The Creator - Newt9</h2>
            <p>Active experimentalist and NFT enthusiast. I enjoy creating unique projects that offer interactive experiences and display deeper utilization of the medium. To learn more about me and my projects you can visit Newt9.dev or connect with me directly at Eden@newt9.dev.</p>
          </div>
      </div>
    );
  }
}

export default InfoPage;