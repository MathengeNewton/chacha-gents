import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from '../shopsection/section'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

let Partnerleft =({details})=>{
   
    return(
<Container style={{}}>
  <Row style={{width: '90%',margin:'5%',fontWeight:'bolder',backgroudColor:"white"}}>    
    <Col style={{marginTop:'3%'}} sm={6}>
    <div border="light" style={{ width: '90%' }}>
        <h4>SECOND STORE</h4>
        <div ><GoLocation style={{marginRight: '19px'}}/> Nairobi Kenya CBD </div>
        <div style={{marginLeft:'40px'}} >Moi Avenue Imenti house directly opposite Nairobi Sport House </div>
        <div ><AiOutlineMail style={{marginRight: '19px'}}/> nairobiclothingstore@gmail.com</div>
        <div ><AiOutlinePhone style={{marginRight: '19px'}}/> (+254) 0708963297</div> 
                    
    </div>
    </Col>
    <Col style={{width: '100%',marginTop:'40px'}} sm={6}>
        {/* <img id="img" src='/images/CHACHA3.png' alt="..." style={{width: '100%',height:'100%',borderRadius:'5px'}}/> */}
        <Carousel src='/images/CHACHA3.png' style={{width: '100%',height:'100%',borderRadius:'5px'}}/>
    </Col>
  </Row>  
  </Container>
    )
}
export default Partnerleft