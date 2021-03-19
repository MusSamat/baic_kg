import React, {useEffect, useState} from "react";
import GetData from "../../services/GetData";


const Carousel = () => {
    const getBannerImage = new GetData()
    const [bannerImage, setBannerImage] = useState([])


    useEffect(() => {
        getBannerImage.getData('/api/v1/banner').then(res => {
            setBannerImage(res)
        })
    }, [])
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
            <ol className="carousel-indicators">
                {bannerImage.map((item, i) => {
                    if( i === 0 || item.image.length === null) {
                        return (
                            <li data-target="#carouselExampleIndicators" data-slide-to={i} className="active" key={i}></li>
                        )
                    }else {
                        return (
                            <li data-target="#carouselExampleIndicators" data-slide-to={item.id} key={i}></li>
                        )
                    }
                })}
            </ol>
            <div className="carousel-inner" >
                {bannerImage.map((item, i) => {
                    if(i === 0){
                        return (
                            <div className="carousel-item active carousel-img" key={i}>
                                { item.image.length > 0 ? <img className="d-block w-100 "  src={getBannerImage._apiBase
                                + item.image} alt={i + 'slide'}/> :
                                    <img src={getBannerImage._apiBase
                                    + '/media/cars/notFoundImage.png'} alt="car photo"/>}
                            </div>
                        )
                    }else {
                        return (
                            <div className="carousel-item" key={i}>
                                <img className="d-block w-100 "  src={getBannerImage._apiBase + item.image} alt={item.id + 'slide'}/>
                            </div>
                        )
                    }
                })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel