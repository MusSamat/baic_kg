import React from "react";

const Contact_info = () => {
    return (
        <section>
            <h2>Наши контакты</h2>
            <ul className="alt">
                <li><span className="fa fa-envelope-o"></span> <a href="#">contact@company.com</a></li>
                <li><span className="fa fa-phone"></span> +1 333 4040 5566</li>
                <li><span className="fa fa-map-pin"></span> 212 Barrington Court New York, ABC 10001 United States of
                    America
                </li>
            </ul>

            <h2> Мы в социальных сетях </h2>

            <ul className="icons">
                <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
            </ul>
        </section>
    )
}

export default Contact_info