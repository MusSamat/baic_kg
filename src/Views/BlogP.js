import React, {useEffect, useState} from "react";
import Carousel from "../Components/Main/Carousel";
import Footer from "../Components/Footer/Footer";
import GetData from "../services/GetData";
import moment from "moment";
import {Link} from "react-router-dom";

const BlogP = () => {

    const getBlog = new GetData()

    const [blog, setBlog] = useState([])

    useEffect(() => {
        window.scrollTo(0,0)
        getBlog.getData('/api/v1/blog').then(res => {
            setBlog(res)
        })
    }, [])

    return (
        <>
            <div id="main" >
                <div className="inner">
                    <Carousel/>
                    <h2 className="h2">Блог</h2>
                    <div className="row">
                        {blog.map((item, i) => (
                            <div className="col-sm-4 text-center" key={i}>
                                <div style={{marginBottom: 20}}  className="blog-image">
                                    <img src={getBlog._apiBase + item.image}   alt="Электромашины"/>
                                </div>
                                <Link to={{pathname: `/blog_details/${item.id}`, id: item.id}}>
                                    <h2 className="m-n"> {item.title}</h2>
                                </Link>
                                <p> Baic car &nbsp;|&nbsp; {
                                    moment(item.created_at).format('YYYY-MM-DD')}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div  id='footer' className='inner'>
                <Footer/>
            </div>
        </>
    )
}

export default BlogP