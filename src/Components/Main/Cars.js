import React, {useEffect, useState} from "react";
import GetData from "../../services/GetData";
import {Link} from "react-router-dom";

const Cars = () => {

    const getAllCars = new GetData()
    const [getCars, setGetCars] = useState([])


    useEffect(() => {
        getAllCars.getData('/api/v1/car').then(res => {
            setGetCars(res)
        })
    }, [])


    console.log(getCars.length)

    return (
        <div className='inner'>
            <section className="tiles">
                {getCars.map((item, i) => {
                    if( i < 3) {
                        return (
                            <article key={i}>
                            <span className="image">
                                {item.images.length > 0 ?  <img src={'http://127.0.0.1:8000' + item.images[0]}
                                                                alt="car photo"/> : <img src={'http://127.0.0.1:8000'
                                + '/media/cars/notFoundImage.png'} alt="car photo"/>}
                            </span>
                                <Link to={{pathname: `/car_details/${item.id}`, id: item.id}}>
                                    <h2>{item.title}</h2>
                                    <p>
                                        <del>${item.price}</del>
                                        <strong>${item.price - 2000}</strong></p>
                                    <p>
                                        <i className="fa fa-dashboard"></i> {}km &nbsp;&nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cube"></i> 1800 cc&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cog"></i> Manual
                                    </p>
                                </Link>
                            </article>
                        )
                    }
                })}
            </section>
            <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
                <Link to="/cars"><button>Подробнее <i className='fa fa-long-arrow-right'></i></button></Link>
            </div>
        </div>
    )
}

export default Cars