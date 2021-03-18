import React, {useEffect} from 'react'
import Car_details from "../Components/Main/Car_details";
import Footer from "../Components/Footer/Footer";


const   Car_detailsP = ({match}) => {

   const {id} = match.params

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Car_details  id={id}/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer/>
            </div>
        </>
    )
}


export default Car_detailsP
