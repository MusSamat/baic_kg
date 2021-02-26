import React from "react";
import {Link} from "react-router-dom";

const Testimonials = () =>{
    return(
        <div>
            <h2 className="h2">Отзывы</h2>

            <div className="row">
                <div className="col-sm-6 text-center">
                    <p className="m-n"><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt delectus
                        mollitia, debitis architecto recusandae? Quidem ipsa, quo, labore minima enim similique,
                        delectus ullam non laboriosam laborum distinctio repellat quas deserunt voluptas
                        reprehenderit dignissimos voluptatum deleniti saepe. Facere expedita autem quos."</em></p>

                    <p><strong> - John Doe</strong></p>
                </div>

                <div className="col-sm-6 text-center">
                    <p className="m-n"><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt delectus
                        mollitia, debitis architecto recusandae? Quidem ipsa, quo, labore minima enim similique,
                        delectus ullam non laboriosam laborum distinctio repellat quas deserunt voluptas
                        reprehenderit dignissimos voluptatum deleniti saepe. Facere expedita autem quos."</em></p>

                    <p><strong>- John Doe</strong></p>
                </div>
            </div>

            <p className="text-center"><Link to="/testimonials">Читать  далее &nbsp;<i
                className="fa fa-long-arrow-right"></i></Link></p>
        </div>
    )
}

export default Testimonials