import React, {useEffect} from 'react'
import Team from "../Components/Main/Team";
import Footer2 from "../Components/Footer/Footer2";
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
                <Footer2/>
            </div>
        </>
    )
}

export default TeamP