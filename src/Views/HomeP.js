import React, {useEffect} from 'react'
import Main from "../Components/Main/Main"
import Footer from "../Components/Footer/Footer";

const HomeP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return(
        <>
            <Main/>
            <Footer/>
        </>
    )
}

export default HomeP