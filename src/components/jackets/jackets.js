import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Slider from '../shopsection/section'
// import {  MDBRow, MDBCol, MDBCard } from "mdbreact";
import Row from 'react-bootstrap/Row'
// import Carousel from '../shopsection/section'
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
// import { GoLocation } from 'react-icons/go'

const Jackets = () => {
  return (
    <>   
      <Container style={{width:'100%'}}>
  <Row>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/jackets/j1.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/jackets/j2.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/jackets/j3.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/jackets/j4.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/jackets/j5.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/jackets/j6.jpg" thumbnail />
    </Col>
    </Row>
    <Row>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}}src="/images/jackets/j16.jpg"  thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/weddings/7.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/weddings/8.png" thumbnail />
    </Col>
    </Row>
    <Row>
    <Col>
    <Slider src1="/images/jackets/j3.png" src2 = "/images/jackets/j1.png" />
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

export default Jackets;