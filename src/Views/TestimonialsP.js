import React, {useEffect} from 'react'
import Footer from "../Components/Footer/Footer";
import Testimonial_id from "../Components/Main/Testimonials/Testimonial_id";
import Carousel from "../Components/Main/Carousel";

const TestimonialsP = ({match}) => {

    const id = match.params.id

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Carousel/>
                    <Testimonial_id id={id}/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer/>
            </div>
        </>
    )
}

export default TestimonialsP