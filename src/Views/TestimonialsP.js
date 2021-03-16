import React, {useEffect} from 'react'
import Banner from "../Components/Main/Banner";
import Testimonials from "../Components/Main/Testimonials/Testimonials";
import Footer2 from "../Components/Footer/Footer2";
import Team from "../Components/Main/Team";

const TestimonialsP = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Banner/>
                    <Testimonials/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer2/>
            </div>
        </>
    )
}

export default TestimonialsP