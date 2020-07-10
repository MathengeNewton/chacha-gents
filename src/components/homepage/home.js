import React from 'react';
import './home.css'
import Imageslider from '../corousel/corousel'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

let Home =()=>{
   
    return(
        <>
        <div style={{width:'100%',height:'40%',marginBottom:'4%'}} >
      <img src="/images/CHACHA2.png" style={{height:'100%',width:'100%'}} alt="imgs"/>
    </div>  
        <div className="stats" style={{padding:'5%',margin:'5%',color:'dark'}}>
          <h5 style={{fontWeight:'bolder',textTransform:'uppercase'}}>Chacha Gents Wear</h5>
          <p>Our aim is to make you look best on your day</p>
        </div>   
        <div id="shops">
            <Imageslider /> 
        </div>  
        <Container style={{marginTop:'7%',marginBottom:'5%',textAlign:'center'}}>
        <h5 style={{fontWeight:'bolder',marginBottom:'5%',textTransform:'uppercase'}}><strong>we satisfy your style fantasies</strong></h5>
        <Row>
    <Col >
      <Image  style={{width:'40%'}} src="/images/icons/suits.png" roundedCircle />     
    </Col>
    <Col >
      <Image  style={{width:'40%'}} src="/images/icons/polo.png" roundedCircle />    
    </Col>
    <Col>
      <Image  style={{width:'40%'}} src="/images/icons/tshirt.png" roundedCircle />
    </Col>
    </Row>
    <Row  style={{marginTop:'5%'}}>
    <Col>
      <Image  style={{width:'40%'}} src="/images/icons/pants.png" roundedCircle />
    </Col>
    <Col >
      <Image  style={{width:'40%'}} src="/images/icons/shoeicon.png" roundedCircle />
    </Col>
    <Col >
      <Image  style={{width:'40%'}} src="/images/icons/shirt.png" roundedCircle />
    </Col>
    </Row>
        </Container>
        </>
    )
}
export default Home