import React, {useEffect, useState} from "react";
import {Tabs, Tab,} from "react-bootstrap";
import GetData from "../../../services/GetData";
import {Link} from "react-router-dom";

const Categories = () => {

    const getCategories = new GetData()

    const [categories, setCategories] = useState([])
    const [cars, setCars] = useState([])
    const [key, setKey] = useState('');
    useEffect(() => {
        window.scrollTo(0,0)
        getCategories.getData('/api/v1/category').then(res => {
            setCategories(res)
            if(res.length > 0){
                setKey(res[0].title)
            }
        })

        getCategories.getData('/api/v1/car').then(res => {
            setCars(res)
        })
    }, [])


    return (
        <>
            <Tabs
                id="categoriesWithCars"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                {categories.map((ctgy, i) => (
                    <Tab key={i} eventKey={ctgy.title} title={ctgy.title}>
                        <section className='tiles'>
                            {cars.map((car, i) => {
                                if (car.category === ctgy.title) {
                                    return (
                                        <article key={i}>
                                            <span className="image">
                                                {car.images.length > 0 ?
                                                    <img src={getCategories._apiBase + car.images[0]}
                                                         alt="car photo"/> :
                                                    <img src={getCategories._apiBase + '/media/cars/notFoundImage.png'}
                                                         alt="car photo"/>
                                                }
                                            </span>
                                            <Link to={{pathname: `/car_details/${car.id}`, id: car.id}}>
                                                <h2>{car.title}</h2>
                                                <p>
                                                    <del>${car.price}</del>
                                                    <strong>${car.price - 2000}</strong></p>
                                                <p>
                                                    <i className="fa fa-dashboard"></i> {}km &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-cube"></i> 1800 cc&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i className="fa fa-cog"></i> Manual
                                                </p>
                                            </Link>
                                        </article>

                                    )
                                } else {
                                    return (
                                        null
                                    )
                                }
                            })}
                        </section>
                    </Tab>
                ))}
            </Tabs>
        </>
    )
}
export default Categories