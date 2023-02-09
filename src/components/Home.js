import React, { Component } from 'react'
import HSection from './HSection';


class Home extends Component {
  render() {
    return (
        <div className="" >
          <div className='compbox centerit' style={{width: 'calc(70vw + 100px)',}}>
            <br></br>
            <h1 className='highlite' style={{fontSize: 'calc(2vw + 14px)', marginBottom: '20px'}}><i><b>Eden's Flowers</b></i></h1>
            <HSection 
                    section={this.props.section}
                    sectionTier={this.props.sectionTier}/>
          </div>
          <br></br>
        </div>
    );
  }
}

export default Home;