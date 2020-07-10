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
import Weddings from './components/weddings/weddings'
import ContactPage from './components/contactpage/contacts';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return ( 
    <div className="App">
    <Topnav /> 
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/suits" exact>
            <Suits />
          </Route>
          <Route path="/shoes" exact>
            <Shoes />
          </Route>
          <Route path="/accesories" exact>
            <Accesories />
          </Route>
          <Route path="/casual wear" exact>
            <Casual />
          </Route>
          <Route path="/contacts" exact>
            <ContactPage />
          </Route>
          <Route path="/wedding wear" exact>
            <Weddings />
          </Route>
        </Switch>
        </Router> 
      <Footer />    
    </div>
  );
}

export default App;
