import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imageslider from '../corousel/corousel'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

let Partnerleft =({details})=>{
   
    return(
<Container style={{}}>
  <Row style={{width: '90%',margin:'5%',fontWeight:'bolder',backgroudColor:"white"}}>    
    <Col style={{marginTop:'3%'}}>
    <div border="light" style={{ width: '90%' }}>
        <h4>SECOND STORE</h4>
        <div ><GoLocation style={{marginRight: '19px'}}/> Nairobi Kenya CBD </div>
        <div style={{marginLeft:'40px'}} >Moi Avenue Imenti house directly opposite Nairobi Sport House </div>
        <div ><AiOutlineMail style={{marginRight: '19px'}}/> manase.de@gmail.com</div>
        <div ><AiOutlinePhone style={{marginRight: '19px'}}/> (+254) 0708963297</div> 
                    
    </div>
    </Col>
    <Col style={{width: '80%',marginRight:'3%'}}>
        {/* <img id="img" src={details.image} alt="..." style={{width: '100%',height:'70%',border:'.2px solid rgba(0,0,0,.1)',borderRadius:'5px'}}/> */}
        <Imageslider style={{width: '100%',height:'100%',border:'.2px solid rgba(0,0,0,.1)',borderRadius:'5px'}}/>
    </Col>
  </Row>  
  </Container>
    )
}
export default Partnerleft