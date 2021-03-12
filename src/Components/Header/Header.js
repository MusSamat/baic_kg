import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header" >
            <div className="inner">
                <Link to="/" className="logo">
                    <span><img src="images/baic/baic_logo.png" alt="baic" style={{width: 120, height: 70}}/></span>
                    <span>BAIC Motors</span>
                </Link>
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