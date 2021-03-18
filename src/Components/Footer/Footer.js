import React from 'react'

const Footer = () => {
    return (
        <div id='wrapper'>
            <footer id="footer">
                <div className="inner">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <h3>Контакты</h3>

                                <ul className="alt">
                                    <li><span className="fa fa-user"></span> John Smith</li>
                                    <li><span className="fa fa-phone"></span> +1 333 4040 5566</li>
                                    <li><span className="fa fa-mobile-phone"></span> +1 333 4040 5566</li>
                                    <li><span className="fa fa-envelope-o"></span> <a href="#">john@carsales.com</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <h3>Дополнительные услуги </h3>

                                <p>ABS, Leather seats, Power Assisted Steering,{<br/>} Electric heated seats, New HU and
                                    AU, Xenon
                                    headlights</p>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <section>
                                    <ul className="icons" style={{display: "flex", flexDirection: "row"}}>
                                        <li><a href="#" className="icon style2 fa-twitter"><span
                                            className="label">Twitter</span></a></li>
                                        <li><a href="#" className="icon style2 fa-facebook"><span
                                            className="label">Facebook</span></a>
                                        </li>
                                        <li><a href="#" className="icon style2 fa-instagram"><span
                                            className="label">Instagram</span></a></li>
                                        <li><a href="#" className="icon style2 fa-linkedin"><span
                                            className="label">LinkedIn</span></a>
                                        </li>
                                    </ul>

                                    &nbsp;
                                </section>

                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <ul className="copyright">
                                        <li>Copyright © 2021 SigmaSoft</li>
                                        <li><a href="https://www.google.com/">sigmasoft.io</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*<div className='footer_img'>*/}
                        {/*    <img src="/./images/svgFiles/list.svg" alt="list"/>*/}
                        {/*</div>*/}
                </div>
            </footer>
        </div>
    )
}

export default Footer