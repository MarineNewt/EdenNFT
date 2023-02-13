import React, { Component } from 'react'
import arr from '../images/arrow.png'
import Title from '../images/Love.png' 
import NFT0 from '../images/0.webp' 
import NFT1 from '../images/nft1.webp' 
import NFT2 from '../images/nft2.webp' 
import NFT3 from '../images/nft3.webp' 
import NFT4 from '../images/nft4.webp' 
import NFT5 from '../images/nft5.webp' 
import NFT6 from '../images/nft6.webp' 
import NFT7 from '../images/nft7.webp' 
import NFT8 from '../images/nft8.webp' 
import NFT9 from '../images/nft9.webp' 
import NFT10 from '../images/nft10.webp' 
import NFT11 from '../images/nft11.webp' 
import NFT12 from '../images/nft12.webp' 
import NFT13 from '../images/nft13.webp' 
import NFT14 from '../images/nft14.webp' 
import NFT15 from '../images/nft15.webp' 
import NFT16 from '../images/nft16.webp' 



class HSection extends Component {
  
  render() {
    //Project Background
   if(this.props.sectionTier === 1)return (
        <div className='section sectionwriter'>
            <div> 
                <div className="flexit">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT1} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT2} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT3} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT4} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT5} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT6} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                </div>

                <div className="flexit">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT7} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT8} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={Title} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT0} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT9} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT10} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                </div>

                <div className="flexit">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT11} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT12} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT13} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT14} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={NFT15} alt="flipper" className="flipperimg"></img>
                        </div>
                        <div className="flip-card-back">
                        <img src={NFT16} alt="flipper" className="flipperimg"></img>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );

    //Dep
    if(this.props.sectionTier === 2)return (
        <div className='section sectionwriter'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3> The Garden </h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>

        </div>
    );

    //Dep
    if(this.props.sectionTier === 3)return (
        <div className='section'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3> Origins  </h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>
            <div style={{marginRight: '3vw', marginLeft: '3vw'}}> 
            <p>Love token</p>
                
            </div>
        </div>
    );
  }
}

export default HSection;