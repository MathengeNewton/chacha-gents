import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

let Topnav = () =>{
    const imagestyle = {
        marginLeft:'5%',
        marginRight:'10%'
    }
return(
    
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{marginBottom:"2%"}} sticky="top">
  <Navbar.Brand href="#home" style={imagestyle}>
      <img      
        alt=""
        src="/images/logo.jpg"
        width="70"
        height="70"
        className="d-inline-block align-top"
      />{' '}
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#shops">Our Location</Nav.Link>
      <NavDropdown title="Product Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/chacha-gents/suits">Suits</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chacha-gents/casualwear">Casual wear</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chacha-gents/shoes">Shoes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chacha-gents/accesories">Accesories</NavDropdown.Item>
      </NavDropdown>
    </Nav>    
    <Nav>
      <Nav.Link href="/#contacts">Leave a message</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
export default Topnav