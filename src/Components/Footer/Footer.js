import React from "react";
import Contact_us from "./Contact_us";
import Contact_info from "./Contact_info";
import Copyright from "./Copyright";

const Footer = () => {
    return (
        <div id="footer">
            <div className="inner">
                <Contact_us/>
                <Contact_info/>
                <Copyright/>
            </div>
        </div>
    )
}

export default Footer