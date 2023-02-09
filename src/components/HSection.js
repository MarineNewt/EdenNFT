import React, { Component } from 'react'
import arr from '../images/arrow.png'
import TM1 from '../images/Wzrd.png' //Team member 1


class HSection extends Component {
  
  render() {
    //Project Background
   if(this.props.sectionTier === 1)return (
        <div className='section sectionwriter'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3> What are Eden's Flowers?</h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>
            <br></br>
            <div style={{marginRight: '3vw', marginLeft: '3vw'}}> 
                <p style={{marginRight: '8vw', marginLeft: '8vw'}}><b><i>Nfts</i></b></p>
                <p>Desc...
                </p>
            </div>
        </div>
    );

    //Inspiration
    if(this.props.sectionTier === 2)return (
        <div className='section sectionwriter'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3> The Garden </h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>

        </div>
    );

    //Team
    if(this.props.sectionTier === 3)return (
        <div className='section'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3> Origins  </h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>
            <div style={{marginRight: '3vw', marginLeft: '3vw'}}> 
            <p>Love token</p>
                <img src={TM1} alt=""></img>
            </div>
        </div>
    );
  }
}

export default HSection;