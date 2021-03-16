import React, {useEffect, useState} from "react";
import Carousel from "../Components/Main/Carousel";
import Footer2 from "../Components/Footer/Footer2";
import GetData from "../services/GetData";

const BlogP = () => {

    const getBlog = new GetData()

    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlog.getData('/api/v1/blog/1').then(res => {
            setBlog(res)
        })
    }, [])

    return (
        <>
            <div id="main" >
                <div className="inner">
                    <Carousel/>
                    <div>
                        {blog.title}
                        <div>
                            {blog.description}
                        </div>
                    </div>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer2/>
            </div>
        </>
    )
}

export default BlogP