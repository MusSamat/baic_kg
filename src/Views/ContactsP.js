import React from 'react'
import Banner from "../Components/Main/Banner";
import Contacts from "../Components/Main/Contacts";
import Footer2 from "../Components/Footer/Footer2";


const ContactsP = () => {
    return(
        <>
            <div id="main" >
                <div className="inner">
                    <Banner/>
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