import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
// import {  MDBRow, MDBCol, MDBCard } from "mdbreact";
import Row from 'react-bootstrap/Row'
// import Carousel from '../shopsection/section'
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
// import { GoLocation } from 'react-icons/go'

const Accesories = () => {
  return (
    <>   
    <Container >
    <section className='text-center my-5' >
    <Row>
    <Col>
    <Image style={{width:'100%'}} src="/images/weddings/longimg.png" rounded />
    </Col>
  </Row>
  </section>
  </Container>
      <Container style={{width:'100%'}}>
  <Row>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/weddings/1.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/weddings/2.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/weddings/3.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/weddings/4.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/weddings/5.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'98%',margin:'1%'}} src="/images/weddings/6.png" thumbnail />
    </Col>
    </Row>
    <Row>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}}src="/images/weddings/11.jpg"  thumbnail />
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
    <Image style={{width:'90%',margin:'5%'}} src="/images/weddings/chacha12.png" rounded />
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

export default Accesories;