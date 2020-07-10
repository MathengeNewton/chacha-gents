import React from "react";
import './accesory.css';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Accesories = () => {
  return (
    <>    
      <Container style={{width:'90%',margin:'5%'}}>
  <Row>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/1.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}}src="/images/accesories/2.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/3.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/4.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/5.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/6.png" thumbnail />
    </Col>   
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/7.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/8.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/9.png" thumbnail />
    </Col>
  </Row>
</Container>
      </>
  );
}

export default Accesories;