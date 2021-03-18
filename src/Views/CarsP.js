import React, {useEffect} from 'react'
import Banner from "../Components/Main/Banner";
// import Cars from "../Components/Main/Cars";
import Footer from "../Components/Footer/Footer";
import Categories from "../Components/Main/Category/Categories";
import Carousel from "../Components/Main/Carousel";



const CarsP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
        return(
            <>
                <div id="main"  >
                    <a id="start"></a>
                    <div className="inner">
                        <Carousel/>
                        <Categories/>
                    </div>
                </div>
                <div  id='footer' className='inner'>
                    <Footer/>
                </div>
            </>
        )
}
export default CarsP