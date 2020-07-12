import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Shoes = () => {
  return (
    <>   
      <Container style={{width:'100%'}}>
  <Row>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'5%'}} src="/images/shoes/1.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'5%'}} src="/images/shoes/2.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'5%'}} src="/images/shoes/3.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'5%'}} src="/images/shoes/4.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'5%'}} src="/images/shoes/5.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'5%'}} src="/images/shoes/6.png" thumbnail />
    </Col>
    </Row>
    <Row>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}}src="/images/shoes/9.png"  thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/shoes/10.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/shoes/8.png" thumbnail />
    </Col>
    </Row>
    <Row>
    <Col>
    <Image style={{width:'90%',margin:'5%'}} src="/images/shoes/CHACHA.png" rounded />
    </Col>
  </Row>
  <Row>
  <Col>
  <h5 style={{fontWeight:'bolder',marginBottom:'5%',marginTop:'5%',textTransform:'uppercase',textAlign:'center'}}><strong>contact us for these and more</strong></h5>
    </Col>
  </Row>
</Container>
      </>
  );
}

export default Shoes;