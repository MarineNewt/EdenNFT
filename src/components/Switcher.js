import React, { Component } from 'react'
import arr from './../images/arrow.png'
import images from './../Flowers/flowers.js'


class Switcher extends Component {
  render() {
    if(this.props.loading){return(<div className="loading-icon centerit"></div>)}
    if(this.props.sectionTier === 1)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
        <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>The Garden</h1>
          {this.props.usertokens.length > 0 && <button className="megabutton" onClick={(event) => {event.preventDefault();this.props.sectionDirect(2)}}>Send a Flower</button>}
          {this.props.usertokens.length < 1 && <button disabled className="megabutton disabled" onClick={(event) => {event.preventDefault();this.props.sectionDirect(2)}}>Send a Flower</button>}
          {this.props.usertokens.length > 0 && this.props.LoveContractBalance > 0 && <button className="megabutton" onClick={(event) => {event.preventDefault();this.props.sectionDirect(3)}}>Switch your Flowers</button>}
          {(this.props.usertokens.length < 1 || this.props.LoveContractBalance < 1)&& <button disabled className="megabutton disabled" onClick={(event) => {event.preventDefault();this.props.sectionDirect(3)}}>Switch your Flowers</button>}
          <button className="megabutton" onClick={(event) => {event.preventDefault();this.props.sectionDirect(4)}}>The End</button>
        </div>
      </div>
    );
    if(this.props.sectionTier === 2)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
          <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>Send a Flower</h1>
          <button className="inputbtn" style={{width: '8vw', fontSize: 'calc((.75vw + 7.5px))'}} onClick={(event) => {event.preventDefault();this.props.sectionDirect(1)}}>Return</button>
          <div className='flexit'>
            <button onClick={(event) => {event.preventDefault();this.props.tokenselect(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
            {this.props.LoveContractBalance > 0 && <img className="mt-3" style={{height: 'clamp(150px, 15vw, 1000px)', border: "5px black solid", borderRadius: '2px'}} src={images[this.props.userimages[this.props.currentToken]]} alt='flower'></img>}
            {this.props.LoveContractBalance < 1 && <img className="mt-3" style={{height: 'clamp(150px, 15vw, 1000px)', border: "5px black solid", borderRadius: '2px'}} src={images[0]} alt='flower'></img>}
            <button onClick={(event) => {event.preventDefault();this.props.tokenselect(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
          </div>
          <h5 className='mt-2 efont'>Token id: {this.props.usertokens[this.props.currentToken]}</h5>
          <div style={{width: "calc(25vw + 60px)", margin: 'auto'}}>
            <form onSubmit={(event) => {
              event.preventDefault()
              let sendto
              sendto = this.input1.value.toString()
              this.props.send(sendto, this.props.usertokens[this.props.currentToken])}}>
            <input
              type="text"
              ref={(input) =>  { this.input1 = input }}
              className="form-control form-control-lg"
              placeholder="Send to (address), '0x0000...'"
              required
              style={{height: "calc(.5vw + 35px)"}} />
            <button type="submit" className="inputbtn glowit mt-2" style = {{width: '100%'}} >Send Flower</button>
            </form>
          </div>
        </div>
      </div>
    );
    if(this.props.sectionTier === 3)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
          <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>Switch Flowers</h1>
          <button className="inputbtn" style={{width: '8vw', fontSize: 'calc((.75vw + 7.5px))'}} onClick={(event) => {event.preventDefault();this.props.sectionDirect(1)}}>Return</button>
          <div className='flexit' style={{justifyContent: 'space-around'}}>
            <div>
              <p className="efont" style={{marginBottom: "0px"}}>Your Flower:</p>
              <div className='flexit' style={{}}>
                <button onClick={(event) => {event.preventDefault();this.props.tokenselect(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <img style={{height: 'clamp(60px, 15vw, 1000px)', border: "5px black solid", borderRadius: '2px'}} src={images[this.props.userimages[this.props.currentToken]]} alt='flower'></img>
                <button onClick={(event) => {event.preventDefault();this.props.tokenselect(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
              </div>
              <p className="efont">Token id: {this.props.usertokens[this.props.currentToken]}</p>
            </div>
            <div>
              <p className="efont" style={{marginBottom: "0px"}}>Switch with:</p>
              <img style={{height: 'clamp(60px, 15vw, 1000px)', border: "5px black solid", borderRadius: '2px'}} src={images[this.props.currentSwitchImg]} alt='flower'></img>            
              
              <form className='flexit mt-2' onSubmit={(event) => {
                event.preventDefault()
                let tokenid
                if(this.input1.value > 100){this.input1.value = 100}
                tokenid = this.input1.value.toString()
                this.props.lookup(tokenid)}}>
                <input
                type="text"
                ref={(input) =>  { this.input1 = input }}
                className="form-control form-control-lg"
                placeholder="token ID"
                required
                style={{height: "calc(1.7vw + 17px)", width: "10vw", marginRight: '5px'}} />
                <button className="inputbtn" style={{width: '7vw', padding: '.3vw'}}>Search</button>
              </form>
            </div>
          </div>
          {this.props.currentSwitchImg > 0 && <button onClick={(event) => {event.preventDefault(); this.props.switchF()}} className="inputbtn" style={{marginTop: "clamp(0px, 2.5vw, 100px)", width: '16vw'}}>Switch Flowers</button>}
          {this.props.currentSwitchImg < 1 && <button disabled className="inputbtn disabled" style={{marginTop: "clamp(0px, 2.5vw, 100px)", width: '16vw'}}>Switch Flowers</button>}
        </div>
      </div>
    );
    if(this.props.sectionTier === 4)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
          <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>The End</h1>
          <button className="inputbtn" style={{width: '8vw', fontSize: 'calc((.75vw + 7.5px))'}} onClick={(event) => {event.preventDefault();this.props.sectionDirect(1)}}>Return</button>
          <b><h3 className='mt-5'>{Math.floor(this.props.expiration/86400)} Days, {Math.floor(this.props.expiration/3600)%24} Hours, {Math.floor(this.props.expiration/60)%60} Minutes.</h3></b>
          <p className="efont" style={{paddingRight: 'clamp(40px, 6vw, 80px)', paddingLeft: 'clamp(40px, 6vw, 80px)', marginBottom: '0px'}}><i>"The truth is, once you learn how to die,</i></p>
          <p className="efont" style={{paddingRight: 'clamp(1px, 6vw, 80px)', paddingLeft: 'clamp(1px, 6vw, 80px)', marginBottom: 'calc(4vw + 30px)'}}><i> you learn how to live."</i></p>
          {this.props.expiration === '0' && <button style={{width: "calc(10vw + 120px)", marginBottom: "10px", color: 'white', backgroundColor: 'black'}} onClick={(event) => {event.preventDefault(); this.props.expirecheck()}} className='inputbtn'>Destroy Contract.</button>}
          {this.props.expiration !== '0' && <button disabled style={{width: "calc(10vw + 120px)", marginBottom: "10px"}} onClick={(event) => {event.preventDefault(); this.props.expirecheck()}} className='inputbtn disabled'>Destroy Contract</button>}
        </div>
      </div>
    );
  }
}

export default Switcher;