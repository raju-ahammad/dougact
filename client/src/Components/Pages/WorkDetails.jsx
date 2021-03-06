import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LiquidBuble from '../Animation/LiquidBuble'

import ReactPlayer from 'react-player';
import "./work.css"
import axios from 'axios';
import Logo from '../Button/Logo';
const initialState = {
    _id: "",
    title: "",
    image: "",
    video: "",
    description: ""
}


const WorkDetails = () => {
    const [data, setData] = useState(initialState)
    
    const {  title, video, description } = data
    const param = useParams()
   
    const id = param.id
  
    const fetcWorkData = async () => {
        
        const res = await axios.get(`/api/works/${id}`)
        setData(res.data)
        
    }

    useEffect(() => {
      fetcWorkData()
    }, [])

   

    return (
        <div className="workDetails">
            <Logo/>
            
             <div className="liquid__buble">
                <LiquidBuble />
                
             </div>
             
             {
                    !data ?  "not found" 
                    : <div className="details">
                         <ReactPlayer
                            url={video}
                            playing
                            loop
                            muted
                            width="100%"
                            height="450px"
                        /> 
                        <div className="video__desc">
                            <p className="blog__title">{ title }</p>
                            <p className="blog__description">{ description }</p>
                        </div>
                        
                    </div>
                }
        </div>
    )
}

export default WorkDetails
