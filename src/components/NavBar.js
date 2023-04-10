import React, { Component } from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';  
import logo from '../images/icon.webp'
import OS from './../images/opensea.png'
import Love from './../images/Love.png'

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="" expand="md" style={{zIndex: 5}} className="navbarfull">  
      <a href='https://opensea.io/collection/edens-flowers' target="_blank" rel="noopener noreferrer"><img src={OS} alt='os' style={{position: 'absolute', right: 'calc(10vw - 25px)', top: 'clamp(90px, 6vw, 90px)', height: 'clamp(25px, 5vw, 1000px)'}}></img></a>
      <a href='https://opensea.io/collection/love-spreadlove' target="_blank" rel="noopener noreferrer"><img src={Love} alt='os' style={{position: 'absolute', right: 'calc(10vw - 25px)', top: 'clamp(120px, 6vw + 85px, 190px)', height: 'clamp(25px, 5vw, 1000px)', borderRadius: '50%'}}></img></a>
    <Container style={{backdropFilter: 'blur(10px)', background: ""}}>  
      <Navbar.Brand href="/" style={{color: 'white'}}>Eden's Flowers</Navbar.Brand>  
      <img style={{border: 'solid black'}} src={logo} alt="logo" className='navimage'></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav>  
          <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.page(1)}}>Home</Nav.Link>  
          <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.page(2)}}>Mint</Nav.Link>
          <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.page(3)}}>The Garden</Nav.Link>
          <Nav.Link className="navlink" onClick={(event) => {event.preventDefault();this.props.page(4)}}>Info</Nav.Link>
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
    );
  }
}

export default NavBar;