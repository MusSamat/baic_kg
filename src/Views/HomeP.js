import React, {useEffect} from 'react'
import Main from "../Components/Main/Main"
import Footer2 from "../Components/Footer/Footer2";

const HomeP = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return(
        <>
            <Main/>
            <Footer2/>
        </>
    )
}

export default HomeP