import React from 'react';
import './home.css'
import Imageslider from '../corousel/corousel'
import Lefthandshop from '../leftsideshop/leftsideshop'
import Righthandshop from '../righthandshop/righthandshop'

let Home =()=>{
    let dets = {
        image: '/images/suits.jpg',
        header:'first shop',
        body:'very first shop we have'
      }
      let det = {
        image: '/images/kingsmen.jpg',
        header:'Second shop',
        body:'Our second shop '
      }
    return(
        <>
        <Imageslider />   
        <div className="stats" style={{padding:'5%',margin:'5%',color:'dark'}}>
          <h5 style={{fontWeight:'bolder',textTransform:'uppercase'}}>Chacha Gents Wear</h5>
          <p>Our aim is to make you look best on your day</p>
        </div>   
        <div id="shops">
          <Lefthandshop details={dets} />
          <Righthandshop details = {det} />
        </div>  
        </>
    )
}
export default Home