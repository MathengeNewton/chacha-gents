import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imageslider from '../corousel/corousel'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

let Partner =({details})=>{
   
    return(
<Container style={{fontWeight:'bolder', marginTop:'5%'}} >
  <Row style={{width: '100%',padding:'2%'}}>
    <Col style={{width: '50%',marginRight:'5%'}}>
        {/* <img id="img" src={details.image} alt="..." style={{width: '100%',height:'90%',border:'.2px solid rgba(0,0,0,.1)',borderRadius:'5px'}}/> */}
        
      <Imageslider style={{width: '100%',height:'100%',border:'.2px solid rgba(0,0,0,.1)',borderRadius:'5px'}}/>
    </Col>
    <Col style={{marginTop:'2%',width: '50%'}}>
    <div border="light" style={{ width: '90%' }}>
        <h4>OUR MAIN STORE</h4>
        <div ><GoLocation style={{marginRight: '19px'}} /> Nairobi Kenya </div>
        <div style={{marginLeft:'40px'}} >CBD Tommboya street directly opposite cooperative bank at Brighton building SHOP NO C10</div>
        <div><AiOutlineMail style={{marginRight: '19px'}}/> manase.de@gmail.com</div>
        <div><AiOutlinePhone style={{marginRight: '19px'}} /> (+254) 727615766</div>             
    </div>
    </Col>
  </Row>  
  </Container>
    )
}
export default Partner