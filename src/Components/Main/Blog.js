import React from "react";
import {Link} from "react-router-dom";

const Blog = () => {
    return(
        <div>
            <h2 className="h2">Блог</h2>

            <div className="row">
                <div className="col-sm-4 text-center">
                    <img src="images/blog-1-720x480.jpg" className="img-fluid" alt=""/>

                    <h2 className="m-n"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                    </h2>

                    <p> John Doe &nbsp;|&nbsp; 12/06/2020 10:30</p>
                </div>

                <div className="col-sm-4 text-center">
                    <img src="images/blog-2-720x480.jpg" className="img-fluid" alt=""/>

                    <h2 className="m-n"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                    </h2>

                    <p> John Doe &nbsp;|&nbsp; 12/06/2020 10:30</p>
                </div>

                <div className="col-sm-4 text-center">
                    <img src="images/blog-3-720x480.jpg" className="img-fluid" alt=""/>

                    <h2 className="m-n"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                    </h2>

                    <p> John Doe &nbsp;|&nbsp; 12/06/2020 10:30</p>
                </div>
            </div>

            <p className="text-center"><Link to="/blog">Читать далее &nbsp;<i
                className="fa fa-long-arrow-right"></i></Link></p>
        </div>
    )
}

export default Blog