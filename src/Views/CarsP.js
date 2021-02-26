import React, {useEffect} from 'react'
import Banner from "../Components/Main/Banner";
import Cars from "../Components/Main/Cars";
import Footer2 from "../Components/Footer/Footer2";



const CarsP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
        return(
            <>
                <div id="main"  >
                    <a id="start"></a>
                    <div className="inner">
                        <h1>Cars</h1>
                        <Banner/>
                        <Cars/>
                    </div>
                </div>
                <div  id='footer' className='inner'>
                    <Footer2/>
                </div>
            </>
        )
}
export default CarsP