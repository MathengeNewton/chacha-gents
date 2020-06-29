import React from 'react';
import Container from 'react-bootstrap/Container';



let Foot = () =>{
    const footstyle ={
        paddingTop: '4%',
        paddingLeft:'5%',
        paddingRight:'5%'
    }
    const socials ={
        display:'inline-flex',
        width: '30%'
    }
    const sstyle={
        marginLeft: '3%',
        width: '30%'
    }
    const icon={
        width:'50%'
    }
    
    return(
    <Container style={footstyle}>
      <div>© 2020 Chacha Gents. All Rights Reserved</div>      
  
    <div style={socials}>
        <div style={sstyle}>
            <a href="https://www.facebook.com/chachagents/">
                <img src="/images/socials/facebook.webp" alt="facebook" style={icon}/>
            </a>
        </div>
        <div style={sstyle}>
            <a href="https://www.instagram.com/chacha_gents/">
                <img src="/images/socials/instagram.png" alt="instagram" style={icon}/>
            </a>
        </div>
        <div style={sstyle}>
            <a href=".">
                <img src="/images/socials/twitter.png" alt="twitter" style={icon}/>
            </a>
        </div>
    </div> 
    </Container>
    )
}
export default Foot