import React, {useEffect, useState} from "react";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './testimonials.css'
import GetData from "../../../services/GetData";
import {Link} from "react-router-dom";

const Testimonials = () => {
    const getBlog = new GetData()

    const [review, setReview] = useState([])

    useEffect(() => {
        window.scrollTo(0,0)
        getBlog.getData('/api/v1/review').then(res => {
            setReview(res)
        })
    }, [])
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
        >
                {review.map((review, i) => (
                        <div key={i}>
                            <img src={'http://127.0.0.1:8000' + '/media/cars/person2.png'}
                                 alt="car photo"/>
                            <Link to={{pathname: `/testimonials/${review.id}`, id: review.id}}>
                                     <div className="myCarousel">
                                         <h3>{review.name}</h3>
                                         <h4>{review.position}</h4>
                                         <p>
                                             {review.text.substring(0,75)}
                                             ...</p>
                                     </div>
                                 </Link>
                        </div>
                    ))}
        </Carousel>
    )
}

export default Testimonials