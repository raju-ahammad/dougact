import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./work.css"
import axios from 'axios';
import BoxAnim from '../Animation/BoxAnim';
import Logo from '../Button/Logo';
const initialState = {
    _id: "",
    title: "",
    image: "",
    description: ""
}


const BlogDetails = () => {
    const [data, setData] = useState(initialState)
   
    const { title, image, description } = data
    const param = useParams()
   
    const id = param.id
  
    const fetcWorkData = async () => {
        const res = await axios.get(`/api/blog/${id}`)
        setData(res.data)
        
    }

    useEffect(() => {
      fetcWorkData()
    }, [])

   

    return (
        <div className="blogDetails">
            <Logo/>
            
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
