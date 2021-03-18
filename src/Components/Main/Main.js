import React from "react";
import About from "./About";
import Carousel from "./Carousel";
import Cars from "./Cars";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";


const Main = () => {
    return (
        <div id="main">
            <Carousel/>
            <div className="inner">
                <About/>
                <Cars/>
                <Blog/>
                <Testimonials/>
            </div>
        </div>
    )
}

export default Main