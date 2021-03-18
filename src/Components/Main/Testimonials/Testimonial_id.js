import React, {useEffect, useState} from "react";
import GetData from "../../../services/GetData";

const Testimonial_id = (props) => {

    const getBlog = new GetData()

    const [review, setReview] = useState([])

    useEffect(() => {
        getBlog.getData('/api/v1/review/' + props.id + '/').then(res => {
            setReview(res)
        })
    }, [])

    return (
        <div className='review'>
            <h2>{review.name}</h2>
            <div className= 'position'>
                {review.position}
            </div>

            <div className="review_text">
                {review.text}
            </div>
        </div>
    )
}

export default Testimonial_id