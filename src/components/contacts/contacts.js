import React from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { AiFillPhone,AiOutlineMail } from 'react-icons/ai';
import {TiLocation} from 'react-icons/ti'

const Contacts = () => {
  // let section = {
  //   display:'inline-flex',
  //   paddingLeft:'5%',
  //   paddingRight:'5%',
  //   textAlign: 'center'
  // }
  // let subsection ={
  //   width: '70%',
  //   marginLeft:'5%',
  //   height:'100%',
  //   textAlign:'center'
  // }
  
return (
  <div>
    <div style={{width:'100%',height:'40%',marginBottom:'4%'}} >
      <img src="/images/contacts/bg.png" style={{height:'100%',width:'100%'}} alt="imgs"/>
    </div>
    <Container style={{marginBottom:'4%',padding:'2%'}}>
      <Row>
        <Col xs={6} md={4} style={{textAlign:'center',textTransform:'uppercase',fontWeight:'bolder',padding:'2%'}}>
        <div ><AiFillPhone style={{width: '90%'}}/></div><br />
          <h5>call us on:</h5>
          <p> (+254) 0708963297 </p>
        </Col>
        <Col xs={6} md={4} style={{textAlign:'center',textTransform:'uppercase',fontWeight:'bolder',padding:'2%'}}>
        <div ><TiLocation style={{width: '90%'}}/></div><br />
        <h5>we are located at:</h5>
          <p> Nairobi Kenya CBD
                Moi Avenue Imenti house directly opposite Nairobi Sport House
          </p>
        </Col>
        <Col xs={6} md={4} style={{textAlign:'center',textTransform:'uppercase',fontWeight:'bolder',padding:'2%'}}>
        <div ><AiOutlineMail style={{width: '90%'}}/></div><br />
        <h5>Write us an email via:</h5>
          <p> nairobiclothingstore@gmail.com </p>
        </Col>
      </Row>
    </Container>
    <Container style={{width:'90%',margin:'5%',paddingLeft:'10%' ,textAlign:'center',textTransform:'uppercase'}}>
      <h5>Reach out though our social media </h5>
      <h6 style={{textDecoration:'underline',color:'red'}}>we reply to direct messages</h6>
    <Row>
    <Col xs={6} md={4}>
      <a href="https://www.facebook.com/chachagents/">
      <Image  style={{width:'50%',margin:'5%'}} src="/images/socials/facebook.webp" roundedCircle />
      </a>
    </Col>
    <Col xs={6} md={4}>
    <a href="https://www.instagram.com/chacha_gents/">
      <Image  style={{width:'50%',margin:'5%',backgroungColor:'whitesmoke'}} src="/images/socials/insta.jpg" roundedCircle />
    </a>
    </Col>
    <Col xs={6} md={4}>
      <a href="https://mail.google.com/mail/u/0/#compose&to=nairobiclothingstore@gmail.com&su=SUBJECT&body=BODY">
        <Image  style={{width:'50%',margin:'5%'}} src="/images/socials/gmail.png" roundedCircle />
      </a>
    </Col>
    </Row>
    </Container>
  </div>
);
};

export default Contacts;