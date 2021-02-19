import React from "react";

const Testimonials = () =>{
    return(
        <div>
            <h2 className="h2">Testimonials</h2>

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

            <p className="text-center"><a href="testimonials.html">Read More &nbsp;<i
                className="fa fa-long-arrow-right"></i></a></p>
        </div>
    )
}

export default Testimonials