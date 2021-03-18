import React, {useEffect} from 'react'
import Team from "../Components/Main/Team";
import Footer from "../Components/Footer/Footer";
import Carousel from "../Components/Main/Carousel";


const TeamP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Carousel/>
                    <Team/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer/>
            </div>
        </>
    )
}

export default TeamP