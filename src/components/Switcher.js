import React, { Component } from 'react'


class Switcher extends Component {
  render() {
    if(this.props.sectionTier === 1)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
        <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>The Garden</h1>
          <button className="megabutton" onClick={(event) => {event.preventDefault();this.props.sectionDirect(2)}}>Send a Flower</button>
          <button className="megabutton" onClick={(event) => {event.preventDefault();this.props.sectionDirect(3)}}>Switch your Flowers</button>
          <button className="megabutton" onClick={(event) => {event.preventDefault();this.props.sectionDirect(4)}}>The End</button>
        </div>
      </div>
    );
    if(this.props.sectionTier === 2)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
          <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>Send a Flower</h1>
          <button className="inputbtn" style={{width: '8vw', fontSize: 'calc((.75vw + 7.5px))'}} onClick={(event) => {event.preventDefault();this.props.sectionDirect(1)}}>Return</button>
        </div>
      </div>
    );
    if(this.props.sectionTier === 3)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
          <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>Switch Flowers</h1>
          <button className="inputbtn" style={{width: '8vw', fontSize: 'calc((.75vw + 7.5px))'}} onClick={(event) => {event.preventDefault();this.props.sectionDirect(1)}}>Return</button>
        </div>
      </div>
    );
    if(this.props.sectionTier === 4)return (
      <div className="container-fluid">
        <div className='compbox comp-font-sizer centerit' style={{width: 'calc(50vw + 120px)'}}>
          <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>The End</h1>
          <button className="inputbtn" style={{width: '8vw', fontSize: 'calc((.75vw + 7.5px))'}} onClick={(event) => {event.preventDefault();this.props.sectionDirect(1)}}>Return</button>
        </div>
      </div>
    );
  }
}

export default Switcher;