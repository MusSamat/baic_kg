import React, {useEffect} from 'react'
import Contacts from "../Components/Main/Contacts";
import Footer2 from "../Components/Footer/Footer2";
import Carousel from "../Components/Main/Carousel";



const ContactsP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Carousel/>
                    <Contacts/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer2/>
            </div>
        </>
    )
}

export default ContactsP