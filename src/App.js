import React, { Fragment } from "react";
import './App.css';
import './Components/Header/Header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu";
import HomeP from "./Components/Views/HomeP";
import AboutP from "./Components/Views/AboutP";
import TeamP from "./Components/Views/TeamP";
import TestimonialsP from "./Components/Views/TestimonialsP";
import ContactsP from "./Components/Views/ContactsP";
import CarsP from "./Components/Views/CarsP";


function App() {
  return (
      <Router>
          <Menu/>
          <div className="is-preload" id="wrapper">
              <Header/>
              <Switch>
                  <Route exact path='/' component={HomeP}/>
                  <Route exact path='/cars' component={CarsP}/>
                  <Route exact path='/about' component={AboutP}/>
                  <Route exact path='/team' component={TeamP}/>
                  <Route exact path='/testimonials' component={TestimonialsP}/>
                  <Route exact path='/contacts' component={ContactsP}/>

              </Switch>
          </div>
      </Router>
  );
}



export default App;
