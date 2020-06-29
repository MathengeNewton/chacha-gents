import React from "react";
import './shoes.css'
import {  MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask,MDBCard } from "mdbreact";

const Shoes = () => {
  return (
    <section className="text-center my-5" style={{width:'90%',margin:'5%'}}>
        <h2 className="h1-responsive font-weight-bold my-5">
          Shoes
        </h2>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">                
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes3.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes6.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes8.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <section className='text-center my-5'style={{width:'96%',marginLeft:'2%',marginRight:'2%'}}>
       <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-ig'            
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              <h6 className='purple-text'>
              </h6>
              <h3 className='py-3 font-weight-bold'>
                <strong>WE OFFER THE BEST SHOE QUALITY AVAILABLE IN THE COUNTRY</strong>
              </h3>
            </div>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        </section>
        <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes1.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes4.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes5.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/shoes/shoes2.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Shoes;