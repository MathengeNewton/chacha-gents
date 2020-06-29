import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/navaigation/navbar';
import Home from './components/homepage/home'
import Footer from './components/footer/footer';
import Suits from './components/suits/suits';
import Shoes from './components/shoes/shoes';
import Accesories from './components/accesories/accesories';
import Casual from './components/casual/casual'
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
          <Route path="/chacha-gents/suits" exact>
            <Suits />
          </Route>
          <Route path="/chacha-gents/shoes" exact>
            <Shoes />
          </Route>
          <Route path="/chacha-gents/accesories" exact>
            <Accesories />
          </Route>
          <Route path="/chacha-gents/casualwear" exact>
            <Casual />
          </Route>
        </Switch>
        </Router> 
      <Footer />    
    </div>
  );
}

export default App;
