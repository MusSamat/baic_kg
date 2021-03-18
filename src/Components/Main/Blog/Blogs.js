import React, {useEffect, useState} from "react";
import Blog_id from "./Blog_id";
import Carousel from "../Carousel";
import Footer from "../../Footer/Footer";

const BlogP = ({match}) => {
    const id = match.params.id

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <div id="main" >
                <div className="inner">
                    <Carousel/>
                    <Blog_id id={id}/>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer/>
            </div>
        </>
    )
}

export default BlogP