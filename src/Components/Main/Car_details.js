import React, {useEffect, useState} from 'react'
import GetData from "../../services/GetData";

const Car_details = () => {

    const getCarDet = new GetData()

    const [cars, setCars] = useState([])
    const [image, setImages] = useState([])
    const [features, setFeatures] = useState([])
    useEffect(() => {
        getCarDet.getData('/api/v1/car/2/').then(res => {
            const c = res
            console.log(c.id)
            c.images = c.images.map(i => i[1])
            setImages(c.images)
            c.feature = c.feature.map(i => {
                const keys = []
                for (const [key, value] of Object.entries(i)) {
                    if (value && (typeof value) === 'boolean') {
                        keys.push(key)
                    }
                }
                return keys
            })
            setCars(c)
            setFeatures(c.feature)
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
                                {image.map((item, i) => (
                                    <li data-target="#carouselExampleIndicators" data-slide-to={item.id} className="active"  key={i}></li>
                                ))}
                            </ol>
                            <div className="carousel-inner">

                                {image.map((item,i) => {
                                    if(i === 0){
                                        return (
                                            <div className="carousel-item active" key={i}>
                                                <img className="d-block w-100" src={'http://127.0.0.1:8000' + item}
                                                     alt={item.id + "slide"}/>
                                            </div>
                                        )
                                    }else {
                                        return (
                                            <div className="carousel-item" key={i}>
                                                <img className="d-block w-100" src={'http://127.0.0.1:8000' + item}
                                                     alt={item.id + "slide"}/>
                                            </div>
                                        )
                                    }
                                })}

                                {/*<div className="carousel-item active">*/}
                                {/*    <img className="d-block w-100" src={'http://127.0.0.1:8000' + image[0]} alt="First slide"/>*/}
                                {/*</div>*/}
                                {/*<div className="carousel-item">*/}
                                {/*    <img className="d-block w-100" src={'http://127.0.0.1:8000' + image[0]}*/}
                                {/*         alt="Second slide"/>*/}
                                {/*</div>*/}
                                {/*<div className="carousel-item">*/}
                                {/*    <img className="d-block w-100" src={'http://127.0.0.1:8000' + image[0]} alt="Third slide"/>*/}
                                {/*</div>*/}
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
                        <h3 style={{paddingLeft: 40}}> Функции</h3>
                        <ul style={{paddingLeft: 40}}>
                            {/*{features.map((item, i) => (*/}
                            {/*     <li key={i}>*/}
                            {/*         <img src="./images/svgFiles/todo.svg" alt="todo" style={{paddingRight: 20}} alt="todo"/>*/}
                            {/*         {item}*/}
                            {/*     </li>*/}
                            {/*    )*/}
                            {/*)}*/}
                            <li><img src="./images/svgFiles/todo.svg" alt="todo" style={{paddingRight: 20}} alt="todo"/>ljljfldskjl</li>
                            <li><img src="./images/svgFiles/todo.svg" alt="todo" style={{paddingRight: 20}} alt="todo"/>ljljfldskjl</li>
                            <li><img src="./images/svgFiles/todo.svg" alt="todo" style={{paddingRight: 20}} alt="todo"/>ljljfldskjl</li>
                            <li><img src="./images/svgFiles/todo.svg" alt="todo" style={{paddingRight: 20}} alt="todo"/>ljljfldskjl</li>
                            <li><img src="./images/svgFiles/todo.svg" alt="todo" style={{paddingRight: 20}} alt="todo"/>ljljfldskjl</li>
                        </ul>
                    </div>
                </div>
            </div>

            {<br/>}


            <form action="#" style={{marginTop: 40}}>
                <div className="fields">
                    <div className="field quarter">
                        <div className="cars-info">
                            <label className="m-n">Название:</label>
                            <i className="fa fa-address-card-o" aria-hidden="true"></i>
                        </div>
                        <div className="border-item">
                            {cars.category}
                        </div>
                    </div>

                    <div className="field quarter">
                        <div className="cars-info">
                            <label className="m-n">Цена:</label>
                            <i className="fa fa-credit-card" aria-hidden="true"></i>
                        </div>

                        <div className="border-item">
                            {cars.price}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Батарея:</label>
                        <div className="border-item">
                            {cars.battery}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Трансмиссия:</label>
                        <div className="border-item">
                            {cars.drivetrain}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Объем багажника:</label>
                        <div className="border-item">
                            {cars.trunk_volume}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Зарядка:</label>
                        <div className="border-item">
                            {cars.charging}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Диапазон:</label>
                        <div className="border-item">
                            {cars.rang}
                        </div>
                    </div>

                    <div className="field quarter">
                        <label className="m-n">Крутящий момент:</label>
                        <div className="border-item">
                            {cars.torque}
                        </div>
                    </div>
                    <div className="field quarter">
                        <label className="m-n">Максимальная скорость:</label>
                        <div className="border-item">
                            {cars.max_speed}
                        </div>
                    </div>
                    <div className="field quarter">
                        <label className="m-n">Фаркоп: (кг)</label>
                        <div className="border-item">
                            {cars.tow_bar}
                        </div>
                    </div>
                    <div className="field quarter">
                        <label className="m-n">Цвет:</label>
                        <div className="border-item">
                            {cars.color}
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Car_details