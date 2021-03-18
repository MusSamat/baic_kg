import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header" >
            <div className="inner">
                <Link to="/" className="logo">
                    <div>
                        <span><img src="/./images/baic/baic_logo.png" alt="baic" style={{maxWidth: 120, maxHeight: 70}}/></span>
                        <span className='logo-text'>BAIC Motors</span>
                    </div>

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