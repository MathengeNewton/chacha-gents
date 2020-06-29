import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import Foot from './foot';


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
    const footer ={
        marginTop: '5%',
        width:'90%',
        alignSelf : 'center'
    }
    return(
<Navbar expand="lg" variant="light" bg="light" sticky="bottom" style={footerstyle}>
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
                    <a href="/terms" style={link}><ListGroup.Item>Terms & Conditions</ListGroup.Item></a>
                    <a href="/salespolicies" style={link}><ListGroup.Item>Sales policies</ListGroup.Item></a>
                    <a href="/returnspolicies" style={link}><ListGroup.Item>Return policies</ListGroup.Item></a>
                    <a href="/help" style={link}><ListGroup.Item>Ask for help</ListGroup.Item></a>
                    <a href="/feedback" style={link}><ListGroup.Item>Feedback</ListGroup.Item></a>
                </ListGroup>
        </Card>
        
        <Card style={{ width: '18rem' }}>
            <Card.Header>Extras</Card.Header>
                <ListGroup variant="flush">
                <a href="/terms" style={link}><ListGroup.Item>Brands</ListGroup.Item></a>
                <a href="/terms" style={link}><ListGroup.Item>Gifts</ListGroup.Item></a>
                <a href="/terms" style={link}><ListGroup.Item>Offers</ListGroup.Item></a>
                <a href="/terms" style={link}><ListGroup.Item>Get your fit</ListGroup.Item></a>
            </ListGroup>
        </Card>
       
    </CardDeck>
  </Container>
  <hr style={footer}/>
  <Foot />
</Navbar>
    )
}
export default Footer