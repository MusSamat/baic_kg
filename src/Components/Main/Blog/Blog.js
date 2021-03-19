import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import GetData from "../../../services/GetData";
import moment from 'moment'

const Blog = () => {

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
                {blog.map((item, i) => {
                    if (i < 3 ){
                        return(
                            <div className="col-sm-4 text-center image" key={i}>
                                <div style={{marginBottom: 20}}>
                                    <img src={getBlog._apiBase+ item.image} className="img-fluid"  alt="fjalksd"/>
                                </div>
                                <Link to={{pathname: `/blog_details/${item.id}`, id: item.id}}>
                                    <h2 className="m-n"> {item.title}</h2>
                                </Link>
                                <p> Baic car &nbsp;|&nbsp; {
                                    moment(item.created_at).format('YYYY-MM-DD')}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20}}>
                <Link to="/blog"><button>Подробнее <i className='fa fa-long-arrow-right'></i></button></Link>
            </div>
        </div>
    )
}

export default Blog