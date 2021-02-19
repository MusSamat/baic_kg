import React from "react";
import { Link} from "react-router-dom";

const Menu = () => {
    return (

        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/cars'>Cars</Link></li>
                    <li><Link  to="/about">About</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    {/*<li><Link to="/blog">Blog</Link></li>*/}
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu