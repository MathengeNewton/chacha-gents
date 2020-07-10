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
    
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
  <Navbar.Brand href="/" style={imagestyle}>
      <img      
        alt=""
        src="/images/logotransparent.png"
        width="90"
        height="90"
        className="d-inline-block align-top"
      />{' '}
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" style={{textTransform:'uppercase',fontWeight:'bold',fontSize:'500'}}>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/wedding wear">Weddings</Nav.Link>
      <Nav.Link href="/suits">suits/official</Nav.Link>
      <Nav.Link href="/casual wear">Casual wear</Nav.Link>
      <NavDropdown title="Other Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/suits">Jackets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/accesories">Shirts</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/accesories">Accesories</NavDropdown.Item>
      </NavDropdown>      
    </Nav>    
    <Nav>
      <Nav.Link href="/contacts">Contacts</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
export default Topnav