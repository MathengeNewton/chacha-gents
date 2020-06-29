import React from "react";
import './suits.css';
import {  MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, MDBCard } from "mdbreact";

const ProjectsPage = () => {
 
  return (
    <>
    <section className="text-center my-5" style={{width:'90%',margin:'5%'}}>
        <h2 className="h1-responsive font-weight-bold my-5">
          Suits
        </h2>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/suits/full.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">                
              <MDBBtn color="success" rounded>
                 view more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img

                src="/images/suits/threepiece.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                 view more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/suits/suit1.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                view more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/suits/suit4.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                view more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/suits/suit3.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                view more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/images/suits/suit2.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <MDBBtn color="success" rounded>
                view more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
      <section className='text-center my-5'style={{width:'96%',marginLeft:'2%',marginRight:'2%'}}>
       <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'            
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              <h6 className='purple-text'>
              </h6>
              <h3 className='py-3 font-weight-bold'>
                <strong>BEST QUALITY ON THE BLOCK</strong>
              </h3>
            </div>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        </section>
      </>
  );
}

export default ProjectsPage;