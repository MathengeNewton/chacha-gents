import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/navaigation/navbar';
import Home from './components/homepage/home'
import Footer from './components/footer/footer';
import Suits from './components/suits/suits';
import Shoes from './components/shoes/shoes';
import Accesories from './components/accesories/accesories';
import Casual from './components/casual/casual';
import Jackets from './components/jackets/jackets'
import Weddings from './components/weddings/weddings'
import Shirts from './components/shirts/shirts'
import ContactPage from './components/contactpage/contacts';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return ( 
    <div className="App">
    <Topnav /> 
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/suits" exact component={Suits} />
          <Route path="/shoes" exact component={Shoes} />
          <Route path="/shirts" exact component={Shirts} />
          <Route path="/jackets" exact component={Jackets}/>
          <Route path="/accesories" exact component={Accesories} />
          <Route path="/casual wear" exact component={Casual} />
          <Route path="/contacts" exact component={ContactPage} />
          <Route path="/wedding wear" exact component={Weddings}/>
        </Switch>
        </Router> 
      <Footer />    
    </div>
  );
}

export default App;
