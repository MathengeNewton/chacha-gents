import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Button from 'react-bootstrap/Button'

const Contacts = () => {
    const cols ={
        textAlign:'center',
        paddingLeft:'25%',
        paddingRight:'25%',
        color: 'white',
        paddingBottom:'2%'
    }
return (
<MDBContainer style={cols}>
  <MDBRow>
    <MDBCol>
      <form>
        <p className="h4 text-center py-4">Leave  message</p>
        <input type="text" placeholder="Your Email.." id="defaultFormCardNameEx" className="form-control" />
        <br />
        
        <input type="email" placeholder="Message..." id="defaultFormCardEmailEx" className="form-control" />
        <Button variant="primary" style={{marginTop:'3%'}}>Primary</Button>{' '}
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Contacts;