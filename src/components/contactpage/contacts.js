import React from 'react'
import Contacts from '../contacts/contacts'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


let ContactPage =()=>{
    return(
        <Container style={{width:'100%'}}>
        <Row>
        <Col>
            <Contacts style={{width:'100%'}} /> 
        </Col>
        </Row>
      </Container>
    )
}
export default ContactPage