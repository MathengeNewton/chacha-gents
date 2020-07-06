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
  <Navbar.Brand href="/" style={imagestyle}>
      <img      
        alt=""
        src="/images/casuals/logotransparent.png"
        width="90"
        height="90"
        className="d-inline-block align-top"
      />{' '}
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" style={{textTransform:'uppercase',fontWeight:'bold'}}>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#shops">Location</Nav.Link>
      <Nav.Link href="/chacha-gents/wedding wear">Wedding wear</Nav.Link>
      <Nav.Link href="/chacha-gents/official wear">official Wear</Nav.Link>
      <NavDropdown title="Other Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/chacha-gents/suits">Jackets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chacha-gents/accesories">Shirts</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chacha-gents/Pants">Pants</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chacha-gents/shoes">Shoes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chacha-gents/accesories">Accesories</NavDropdown.Item>
      </NavDropdown>      
    </Nav>    
    <Nav>
      <Nav.Link href="/chacha-gents/contacts">Contacts</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
export default Topnav