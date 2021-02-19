import React from "react";
import About from "./About";
import Carousel from "./Carousel";
import Cars from "./Cars";
import Testimonials from "./Testimonials";
import Blog from "./Blog";


const Main = () => {
    return (
        <div id="main">
            <Carousel/>
            <div className="inner">
                <About/>
                <Cars/>
                <Testimonials/>
                <Blog/>
            </div>
        </div>
    )
}

export default Main