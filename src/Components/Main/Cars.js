import React from "react";
// import {Link} from "react-router-dom";
import Categories from "./Category/Categories";
import {Link} from "react-router-dom";

const Cars = () => {
    return (
        <div className='inner'>
            {/*<Categories/>*/}
            <section className="tiles">
                <article className="style1">
                        <span className="image">
                            <img src="images/product-1-720x480.jpg" alt=""/>
                        </span>
                    <Link to="/car_details">
                        {/*<h2>Lorem ipsum dolor sit amet, consectetur</h2>*/}

                        {/*<p>*/}
                        {/*    <del>$11 999</del>*/}
                        {/*    <strong>$11 779</strong></p>*/}

                        {/*<p>*/}
                        {/*    <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;&nbsp;*/}
                        {/*    <i className="fa fa-cube"></i> 1800 cc&nbsp;&nbsp;&nbsp;&nbsp;*/}
                        {/*    <i className="fa fa-cog"></i> Manual*/}
                        {/*</p>*/}
                    </Link>
                </article>
                <article className="style2">
                        <span className="image">
                            <img src="images/product-2-720x480.jpg" alt=""/>
                        </span>
                    <Link to="/car_details">
                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>

                        <p>
                            <del>$11 999</del>
                            <strong>$11 779</strong></p>

                        <p>
                            <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-cube"></i> 1800 cc&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-cog"></i> Manual
                        </p>
                    </Link>
                </article>
            </section>
        </div>
    )
}

export default Cars