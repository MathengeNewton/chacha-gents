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
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}}src="/images/accesories/accesory1.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory2.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory4.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory5.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory6.jpg" thumbnail />
    </Col>
    {/* <section className='text-center my-5'style={{width:'96%',marginLeft:'2%',marginRight:'2%'}}>
       <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-images'            
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              <h6 className='purple-text'>
              </h6>
              <h3 className='py-3 font-weight-bold'>
                <strong style={{color:'darkgrey'}}>WE COMPLETE YOUR AWESOME LOOK WITH THE RIGHT ACCESORIES</strong>
              </h3>
            </div>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        </section> */}
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory7.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory8.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory9.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory10.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{width:'90%',margin:'5%'}} src="/images/accesories/accesory.jpg" thumbnail />
    </Col>
  </Row>
</Container>
      </>
  );
}

export default Accesories;