import React from 'react'

const Footer2 = () => {
    return (
        <div id='wrapper'>
            <footer id="footer">
                <div className="inner">
                    <section>
                        <ul className="icons">
                            <li><a href="#" className="icon style2 fa-twitter"><span
                                className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a>
                            </li>
                            <li><a href="#" className="icon style2 fa-instagram"><span
                                className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a>
                            </li>
                        </ul>

                        &nbsp;
                    </section>

                    <ul className="copyright">
                        <li>Copyright © 2021 SigmaSoft</li>
                        <li> : <a href="https://www.google.com/">sigmasoft.io</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer2