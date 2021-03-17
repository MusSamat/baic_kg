import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import GetData from "../../services/GetData";

const BlogP = () => {
    const getBlog = new GetData()
    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlog.getData('/api/v1/blog').then(res => {
            setBlog(res)
        })
    }, [])
    return(
        <div>
            <h2 className="h2">Блог</h2>
            <div className="row">
                {blog.map((item, i) => (
                    <div className="col-sm-4 text-center" key={i}>
                        <img src={'http://127.0.0.1:8000'+ item.image} className="img-fluid"  alt="fjalksd"/>
                        <h2 className="m-n"><a href="#">{item.title}</a></h2>
                        <div>...</div>
                        <p> Baic.kg &nbsp;|&nbsp; {item.created_at}</p>
                    </div>
                ))}
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
                <Link to="/blog"><button>Подробнее <i className='fa fa-long-arrow-right'></i></button></Link>
            </div>
        </div>
    )
}

export default BlogP


