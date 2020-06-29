import React from "react";
import './accesory.css'
import {  MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask,MDBCard } from "mdbreact";

const Accesories = () => {
  return (
    <section className="text-center my-5" style={{width:'90%',margin:'5%'}}>
        <h2 className="h1-responsive font-weight-bold my-5">
          Accesories
        </h2>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/accesories/accesory.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">                
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/accesories/accesory2.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
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
                <strong style={{color:'darkgrey'}}>WE COMPLETE YOUR AWESOME LOOK WITH THE RIGHT ACCESORIES</strong>
              </h3>
            </div>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        </section>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/accesories/accesory9.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/accesories/accesory7.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/accesories/accesory8.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/accesories/accesory10.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Accesories;