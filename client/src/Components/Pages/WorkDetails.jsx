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
    const [loading, setLoading] = useState(false)
    const { _id, title, image, video, description } = data
    const param = useParams()
   
    const id = param.id
  
    const fetcWorkData = async () => {
        setLoading(true)
        const res = await axios(`/api/works/${id}`)
        setData(res.data)
        setLoading(false)
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
                            <p>{ title }</p>
                            <p>{ description }</p>
                        </div>
                        
                    </div>
                }
        </div>
    )
}

export default WorkDetails
