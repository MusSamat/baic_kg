import React, {useEffect} from 'react'
import Banner from "../Components/Main/Banner";
import About from "../Components/Main/About"
import Footer2 from "../Components/Footer/Footer2";

const AboutP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Banner/>
                    <About/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer2/>
            </div>
        </>
    )
}

export default AboutP