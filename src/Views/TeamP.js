import React, {useEffect} from 'react'
import Banner from "../Components/Main/Banner";
import Team from "../Components/Main/Team";
import Footer2 from "../Components/Footer/Footer2";


const TeamP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Banner/>
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