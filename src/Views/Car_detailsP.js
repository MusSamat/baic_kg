import React, {useEffect} from 'react'
import Car_details from "../Components/Main/Car_details";
import Footer2 from "../Components/Footer/Footer2";


const   Car_detailsP = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Car_details/>
                    <Footer2/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer2/>
            </div>
        </>
    )
}


export default Car_detailsP
