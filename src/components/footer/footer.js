import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardDeck from 'react-bootstrap/CardDeck';



let Footer =()=>{
    const footerstyle = { 
        marginLeft:'5%',  
        marginRight:'5%',
        marginTop:'3%',     
        padding: '2%',
        display:'inline-block'
    }
    const link ={
        textDecoraton: 'none',
        color:'black'
    }
 
    return(
<Navbar expand="lg" className="footer" variant="light" bg="light" sticky="bottom" style={footerstyle}>
  <Container>
  <CardDeck>
        <Card>
        <Card.Img 
            variant="top" 
            width="100"
            height="240" 
            src="/images/logo.jpg"
         />
            
            <Card.Footer>
                <div style={{textAlign:'center'}}>CHACHA ENTERPRISE</div>
            </Card.Footer>
        </Card>
        
        <Card style={{ width: '18rem' }}>
            <Card.Header>Help Center</Card.Header>
                <ListGroup variant="flush">
                    <a href="/" style={link}><ListGroup.Item>Terms & Conditions</ListGroup.Item></a>
                    <a href="/" style={link}><ListGroup.Item>Sales policies</ListGroup.Item></a>
                    <a href="/" style={link}><ListGroup.Item>Return policies</ListGroup.Item></a>
                    <a href="/" style={link}><ListGroup.Item>Ask for help</ListGroup.Item></a>
                    <a href="/" style={link}><ListGroup.Item>Feedback</ListGroup.Item></a>
                </ListGroup>
        </Card>
        
        <Card style={{ width: '18rem' }}>
            <Card.Header>Extras</Card.Header>
                <ListGroup variant="flush">
                <a href="/" style={link}><ListGroup.Item>Best Brands</ListGroup.Item></a>
                <a href="/" style={link}><ListGroup.Item>Gift items</ListGroup.Item></a>
                <a href="/" style={link}><ListGroup.Item>sweet Offers</ListGroup.Item></a>
                <a href="/" style={link}><ListGroup.Item>Get your fit</ListGroup.Item></a>
                <a href="/" style={link}><ListGroup.Item>Newest staff</ListGroup.Item></a>
            </ListGroup>
        </Card>
       
    </CardDeck>
  </Container>
</Navbar>
    )
}
export default Footer