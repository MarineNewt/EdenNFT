import React, { Component } from 'react'
import nft1 from './../images/nft1.webp'
import nft2 from './../images/nft2.webp'
import nft3 from './../images/nft3.webp'
import nft4 from './../images/nft4.webp'
import nft5 from './../images/nft5.webp'


class Minter extends Component {
  
  render() {
    return (
      <div className=" ">
          <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
            <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>Mint a Flower</h1>
            <p> Supply Minted: {this.props.NFTContractSupply} / 100</p>
            <div className='cardcontainer flexit m-4 mb-5'>
              <img className='card' src={nft1} alt='icon' />
              <img className='card' src={nft2} alt='icon' />
              <img className='card' src={nft3} alt='icon' />
              <img className='card' src={nft4} alt='icon' />
              <img className='card' src={nft5} alt='icon' />
            </div>
            <p><i>~0.0025 Mint~</i></p>
            <button onClick={(event) => {event.preventDefault() 
              this.props.mint()}} className='inputbtn glowit'>Mint</button>
          </div>
      </div>
    );
  }
}

export default Minter;