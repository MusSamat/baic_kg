import React from 'react'

const Team = () => {
    return (
        <div>
            <h1>Team</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img src="images/author-image-1-646x680.jpg" className="img-fluid" alt="" />

                        <h2 className="m-n">John Noe</h2>

                        <p>
                            CEO {<br/>}

                            <a href="#"><i className="fa fa-twitter"></i></a> &nbsp;
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </p>
                    </div>

                    <div className="col-sm-3 text-center">
                        <img src="images/author-image-2-646x680.jpg" className="img-fluid" alt="" />

                        <h2 className="m-n">Jane Doe</h2>

                        <p>
                            Social Media {<br/>}

                            <a href="#"><i className="fa fa-twitter"></i></a> &nbsp;
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </p>
                    </div>

                    <div className="col-sm-3 text-center">
                        <img src="images/author-image-3-646x680.jpg" className="img-fluid" alt="" />

                        <h2 className="m-n">Merry Smith</h2>

                        <p>
                            Social Media {<br/>}

                            <a href="#"><i className="fa fa-twitter"></i></a> &nbsp;
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </p>
                    </div>

                    <div className="col-sm-3 text-center">
                        <img src="images/author-image-4-646x680.jpg" className="img-fluid" alt="" />

                        <h2 className="m-n">Jack Dawn</h2>

                        <p>
                            Social Media {<br/>}

                            <a href="#"><i className="fa fa-twitter"></i></a> &nbsp;
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team

