import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Casual = () => {
  return (
    <>    
      <Container style={{width:'90%',margin:'5%'}}>
  <Row>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/casuals/c1.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/casuals/c2.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/casuals/c3.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/casuals/c4.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/casuals/c5.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/casuals/c6.png" thumbnail />
    </Col>
    </Row>
    <Row>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}}src="/images/casuals/c9.png"  thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/casuals/c7.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/casuals/c8.png" thumbnail />
    </Col>
    </Row>    
    <Row>
    <Col>
      <Image style={{width:'90%',margin:'5%'}} src="/images/casuals/combo.png" rounded />
    </Col>
  </Row>
  <h5 style={{fontWeight:'bolder',marginBottom:'5%',marginTop:'5%', textAlign:'center', extTransform:'uppercase'}}><strong>contact us for these and more</strong></h5>
    
</Container>
      </>
  );
}

export default Casual;