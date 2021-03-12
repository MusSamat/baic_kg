import React, {useState} from "react";
import {Tabs, Tab, TabContainer} from "react-bootstrap";
import {NavLink as Link} from "react-bootstrap";

const Categories = () => {

    const [key, setKey] = useState('home');

    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Home">
                    <div id='main'>
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
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div>jsd;lfjasd;lkfj;laskdjfl;k;laskdjf</div>
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                    <div>jfl;sajdflkjsadlfkj;laldsjf;l</div>
                </Tab>
            </Tabs>
        </>
    )
}
export default Categories