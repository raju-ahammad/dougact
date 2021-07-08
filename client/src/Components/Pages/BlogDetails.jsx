import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./work.css"
import axios from 'axios';
import BoxAnim from '../Animation/BoxAnim';
const initialState = {
    _id: "",
    title: "",
    image: "",
    description: ""
}


const BlogDetails = () => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const { _id, title, image, description } = data
    const param = useParams()
   
    const id = param.id
  
    const fetcWorkData = async () => {
        setLoading(true)
        const res = await axios(`/api/blog/${id}`)
        setData(res.data)
        setLoading(false)
    }

    useEffect(() => {
      fetcWorkData()
    }, [])

   

    return (
        <div className="blogDetails">
            
             <div className="blog__details_anim">
                <BoxAnim />
             </div>
             <div className="blog__image-banner">
                 <img src={image} alt="blog img" />
             </div>
             {
                    !data ?  "not found" 
                    : <div className="details">
                        
                        <div className="video__desc">
                            <p>{ title }</p>
                            <p>{ description }</p>
                        </div>
                        
                    </div>
                }
        </div>
    )
}

export default BlogDetails
