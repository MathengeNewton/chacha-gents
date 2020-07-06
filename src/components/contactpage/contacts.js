import React from 'react'
import Card from 'react-bootstrap/Card';
import Contacts from '../contacts/contacts'
import ListGroup from 'react-bootstrap/ListGroup'

let Contactcard =()=>{
    const link ={
        textDecoraton: 'none',
        color:'black'
    }
    return(
        <Card>
        <Card.Header>Help Center</Card.Header>
            <ListGroup variant="flush">
                <a href="/terms" style={link}><ListGroup.Item>Terms & Conditions</ListGroup.Item></a>
                <a href="/salespolicies" style={link}><ListGroup.Item>Sales policies</ListGroup.Item></a>
                <a href="/returnspolicies" style={link}><ListGroup.Item>Return policies</ListGroup.Item></a>
                <a href="/help" style={link}><ListGroup.Item>Ask for help</ListGroup.Item></a>
                <a href="/feedback" style={link}><ListGroup.Item>Feedback</ListGroup.Item></a>
            </ListGroup>
    </Card>
    )
}

let ContactPage =()=>{
    return(
<div  style={{margin:'5%'}}>
      <div style={{display:'inline-flex'}}>
        <Contacts />  
        <Contactcard /> 
      </div>
</div>
    )
}
export default ContactPage