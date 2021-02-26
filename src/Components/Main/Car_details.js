import React from 'react'

const Car_details = () => {
    return (
        <>
            <h1>Lorem ipsum dolor sit amet consectetur <span className="pull-right">$ 16 000</span></h1>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="images/product-1-720x480.jpg" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/product-2-720x480.jpg"
                                         alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/product-3-720x480.jpg" alt="Third slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/product-4-720x480.jpg"
                                         alt="Fourth slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/product-5-720x480.jpg" alt="Fifth slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <h3>Vehicle Description</h3>

                        <p>- Colour coded bumpers {<br/> }- Tinted glass{<br/>}- Immobiliser{<br/>}- Central locking - remote{
                            <br/>}-
                            Passenger airbag{<br/>}- Electric windows{<br/>}- Rear head rests{<br/>}- Radio{<br/>}- CD player{
                                    <br/>}-
                                Ideal first car
                                {<br/>} - Warranty</p>
                    </div>
                </div>
            </div>

            {<br/>}


                <form action="#">
                    <div className="fields">
                        <div className="field quarter">
                            <label className="m-n">Type</label>

                            <input type="text" readOnly="" value="Used vehicle"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Make</label>

                            <input type="text" readOnly="" value="Lorem ipsum dolor sit"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Model</label>

                            <input type="text" readOnly="" value="Lorem ipsum dolor sit"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">First registration</label>

                            <input type="text" readOnly="" value="05/2010"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Mileage</label>

                            <input type="text" readOnly="" value="5000 km"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Fuel</label>

                            <input type="text" readOnly="" value="Diesel"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Engine size</label>

                            <input type="text" readOnly="" value="1800 cc"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Power</label>

                            <input type="text" readOnly="" value="85 hp"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Gearbox</label>

                            <input type="text" readOnly="" value="Manual"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Number of seats</label>

                            <input type="text" readOnly="" value="4"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Doors</label>

                            <input type="text" readOnly="" value="2/3"/>
                        </div>

                        <div className="field quarter">
                            <label className="m-n">Color</label>

                            <input type="text" readOnly="" value="black"/>
                        </div>
                    </div>
                </form>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Контакты</h3>

                            <ul className="alt">
                                <li><span className="fa fa-user"></span> John Smith</li>
                                <li><span className="fa fa-phone"></span> +1 333 4040 5566</li>
                                <li><span className="fa fa-mobile-phone"></span> +1 333 4040 5566</li>
                                <li><span className="fa fa-envelope-o"></span> <a href="#">john@carsales.com</a></li>

                            </ul>
                        </div>

                        <div className="col-md-9">
                            <h3>Дополнительные услуги </h3>

                            <p>ABS, Leather seats, Power Assisted Steering, Electric heated seats, New HU and AU, Xenon
                                headlights</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Car_details