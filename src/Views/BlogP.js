import React, {useEffect, useState} from "react";
import Carousel from "../Components/Main/Carousel";
import Footer2 from "../Components/Footer/Footer2";
import GetData from "../services/GetData";
import CKEditor from 'ckeditor4-react';

const BlogP = () => {

    const getBlog = new GetData()

    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlog.getData('/api/v1/blog/4').then(res => {
            setBlog(res)
        })
    }, [])

    return (
        <>
            <div id="main" >
                <div className="inner">
                    <Carousel/>
                    <div>
                        <h2 className="h2">Блог</h2>
                        <div className="row">
                            {blog.title}
                            <div dangerouslySetInnerHTML={{__html: blog.description}} />
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