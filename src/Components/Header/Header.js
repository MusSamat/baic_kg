import React from "react";

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <a href="index.html" className="logo">
                    <span className="fa fa-car"></span> <span className="title">Car Dealer Website</span>
                </a>
                <nav>
                    <ul>
                        <li><a href="#menu">Menu</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header