import React, {useEffect, useState} from "react";
import GetData from "../../../services/GetData";

const Blog_id = (props) => {

    const getBlog = new GetData()

    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlog.getData('/api/v1/blog/' + props.id + '/').then(res => {
            setBlog(res)
        })
    }, [])

    return (
        <div className='row'>
            <div className='col-12 col-sm-12 blog_id_image'>
                <div dangerouslySetInnerHTML={{__html: blog.description}}/>
            </div>
        </div>
    )
}

export default Blog_id