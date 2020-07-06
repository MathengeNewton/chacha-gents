import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import {  MDBRow, MDBCol, MDBCard } from "mdbreact";
import Row from 'react-bootstrap/Row'

const Casual = () => {
  return (
    <>    
      <Container style={{width:'90%',margin:'5%'}}>
  <Row>
    <section className='text-center my-5'style={{width:'96%',marginLeft:'2%',marginRight:'2%'}}>
       <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-images'            
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              <h6 className='purple-text'>
              </h6>
              <h3 className='py-3 font-weight-bold'>
                <strong style={{color:'darkgrey'}}>We prioritise weddings and making sure your wedding outfit is truely special</strong>
              </h3>
            </div>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        </section>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/weddings/1.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/weddings/2.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/weddings/3.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/weddings/4.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/weddings/5.png" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/weddings/6.png" thumbnail />
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
      <Image style={{width:'90%',margin:'10%'}} src="/images/weddings/10.jpg" rounded />
    </Col>
    </Row>
    <Row>
    <Col>
      <Image style={{width:'90%',margin:'10%'}} src="/images/weddings/longimg.png" rounded />
    </Col>
  </Row>
</Container>
      </>
  );
}

export default Casual;