import React, { Fragment } from "react";
import './App.css';
import './Components/Header/Header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu";
import HomeP from "./Views/HomeP";
import AboutP from "./Views/AboutP";
import TeamP from "./Views/TeamP";
import TestimonialsP from "./Views/TestimonialsP";
import ContactsP from "./Views/ContactsP";
import CarsP from "./Views/CarsP";
import Car_detailsP from "./Views/Car_detailsP";
import BlogP from "./Views/BlogP";


class App extends React.Component {
    render() {
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
                        <Route exact path='/blog' component={BlogP}/>
                        <Route exact path='/testimonials' component={TestimonialsP}/>
                        <Route exact path='/contacts' component={ContactsP}/>
                        <Route exact path='/car_details/:id' component={Car_detailsP}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default App;
