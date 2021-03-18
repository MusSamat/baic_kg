import React from 'react'
import Footer from "../Components/Footer/Footer";

const NotFound = () => {
    return (
        <>
            <div id="main" >
                <div className="inner">
                    <div className='havent_data'>
                        Page not Found
                    </div>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer/>
            </div>
        </>
    )
}

export default NotFound