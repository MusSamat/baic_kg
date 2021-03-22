import React, {useEffect, useState} from 'react'
import GetData from "../../services/GetData";

const Car_details = (props) => {
    const getCarDet = new GetData()

    const [cars, setCars] = useState({feature: []})
    const [image, setImage] = useState([])
    useEffect(() => {
        getCarDet.getData('/api/v1/car/'+ props.id + '/' ).then(res => {
            const c = res
            setCars(c)
            setImage(c.images)
        })
    }, [])

    return (
        <>
            <h1>{cars.title} <span className="pull-right">$ {cars.price}</span></h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {image.map((item, i) => {
                                    if (i === 0) {
                                        return (
                                            <li data-target="#carouselExampleIndicators" data-slide-to={i}
                                                className="active" key={i}></li>
                                        )
                                    } else {
                                        return (
                                            <li data-target="#carouselExampleIndicators" data-slide-to={i}
                                                key={i}></li>
                                        )
                                    }
                                })}

                            </ol>
                            <div className="carousel-inner ">

                                {image.map((item, i) => {
                                    if (i === 0) {
                                        return (
                                            <div className="carousel-item active auto-img" key={i}>
                                                <img className="d-block w-100" src={getCarDet._apiBase + item}
                                                     alt={i + "slide"}/>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="carousel-item auto-img" key={i}>
                                                <img className="d-block w-100" src={getCarDet._apiBase + item}
                                                     alt={i + "slide"}/>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <a className="carousel-control-prev" href="#carouselIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <h3 style={{paddingLeft: 30}}> Функции</h3>
                        <ul style={{paddingLeft: 25, listStyleType: 'none'}}>
                            {cars.feature.map((item, i) => (
                                 <li key={i}>
                                     <img src="/./images/svgFiles/todo.svg" alt="todo" style={{paddingRight: 20}} />
                                     {item.title}
                                 </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {<br/>}


            <form action="#" style={{marginTop: 40}}>
                <div className="fields">
                    <div className="field quarter">
                        <div className="cars-info">
                            <label className="m-n">Производитель:</label>
                            <i className="fa fa-address-card-o" aria-hidden="true"></i>
                        </div>
                        <div className="border-item">
                            {cars.category}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Кузов:</label>
                        <div className="border-item">
                            {cars.car_body}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Мощность двигателя::</label>
                        <div className="border-item">
                            {cars.battery_power}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Макс.скорость:</label>
                        <div className="border-item">
                            {cars.max_speed}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Дальность хода: </label>
                        <div className="border-item">
                            {cars.travel_range}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Мощность батареи: </label>
                        <div className="border-item">
                            {cars.engine_power}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Время зарядки: </label>
                        <div className="border-item">
                            {cars.charging_time}
                        </div>
                    </div>
                    <div className="field quarter">
                        <label className="m-n">Клиренс:</label>
                        <div className="border-item">
                            {cars.clearance}
                        </div>
                    </div>
                    {/*<div className="field quarter">*/}
                    {/*    <label className="m-n">Фаркоп: (кг)</label>*/}
                    {/*    <div className="border-item">*/}
                    {/*        {cars.created_ad}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </form>

        </>
    )
}

export default Car_details