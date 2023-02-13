import React, { Component } from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';  
import logo from '../images/icon.webp'

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="" expand="md" style={{zIndex: 5}} className="navbarfull">  
    <Container>  
      <Navbar.Brand href="/" style={{color: 'white'}}>Eden's Flowers</Navbar.Brand>  
      <img style={{border: 'solid black'}} src={logo} alt="logo" className='navimage'></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav>  
          <Nav.Link onClick={(event) => {event.preventDefault();this.props.page(1)}} style={{color: 'white'}}>Home</Nav.Link>  
          <Nav.Link onClick={(event) => {event.preventDefault();this.props.page(2)}} style={{color: 'white'}}>Mint</Nav.Link>
          <Nav.Link onClick={(event) => {event.preventDefault();this.props.page(3)}} style={{color: 'white'}}>The Garden</Nav.Link>
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
    );
  }
}

export default NavBar;