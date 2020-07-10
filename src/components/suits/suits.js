import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Casual = () => {
  return (
    <>    
      <Container style={{width:'90%',margin:'5%',textAlign:'center'}}>
      <h5 style={{fontWeight:'bolder',marginBottom:'5%',textTransform:'uppercase'}}><strong>the best in this business</strong></h5>
       
  <Row>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/suits/j1.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/suits/j2.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/suits/j3.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/suits/j4.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/suits/j9.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/suits/j5.png" thumbnail />
    </Col>   
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}}src="/images/suits/j6.png"  thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/suits/j7.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/suits/j8.png" thumbnail />
    </Col>
    </Row>   
    <h5 style={{fontWeight:'bolder',marginBottom:'5%',marginTop:'5%',textTransform:'uppercase'}}><strong>contact us for these and more</strong></h5>
     
</Container>
      </>
  );
}

export default Casual;