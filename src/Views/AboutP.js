import React, {useEffect} from 'react'
import Footer from "../Components/Footer/Footer";
import Carousel from "../Components/Main/Carousel";
import {Link} from "react-router-dom";

const AboutP = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <div id="main">
                <div className="inner">
                    <Carousel/>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className='about_title'>
                                <div className="about_item1">
                                    For developers, by Developers
                                </div>

                                <h2 className="about_theme">
                                    Simple Integration
                                </h2>

                                <div className='about_desc'>The Cloverly API calculates and offsets carbon
                                    emissions on a per-transaction basis. We can determine
                                    the amount of carbon emitted and offset that quantity
                                    by purchasing carbon offsets in real time. Explore our
                                    developer docs to find the right endpoints for your
                                    application, and sign up for free to get the Cloverly
                                    sandbox keys.
                                </div>
                                <div className="about_buttons">
                                    <Link to="/cars"><button className='btn2'> Наш каталог</button></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className='about_scItem'>
                                <div className="about_scAllItems">
                                    <img src="./images/svgFiles/car1.svg" alt="car_electro"/>
                                    <div>  Miles traveled and carbon emitted can be easily
                                        calculated and offset in real time with Cloverly.
                                    </div>
                                </div>
                                <div className='about_scAllItems'>
                                    <img src="./images/svgFiles/coin.svg" alt="car_electro"/>
                                    <div>
                                        Cloverly can help identify carbon footprints based on financial transaction
                                        data and purchase the offsets needed to mitigate these effects.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer' className='inner'>
                <Footer/>
            </div>
        </>
    )
}

export default AboutP