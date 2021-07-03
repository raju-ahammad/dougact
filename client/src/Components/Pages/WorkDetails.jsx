import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LiquidBuble from '../Animation/LiquidBuble'
import {workData} from  './Work'
import ReactPlayer from 'react-player';
import "./work.css"
const initialState = {
    id: "",
    titile: "",
    description: "",
    link: "",
    image: ""

}


const WorkDetails = () => {
    const [data, setData] = useState(initialState)
    const param = useParams()
    console.log("params", param.id);
    const id = param.id
    console.log(workData);
    

    useEffect(() => {
        workData.map((data) => {
            
            if (data.id === id) {
                setData({id: data.id, titile: data.title, description: data.description, link: data.link, image: data.image})
            }
            
        })
     
    }, [id])

   
   console.log("data",data, data.titile);

    return (
        <div className="workDetails">
            
             <div className="liquid__buble">
                <LiquidBuble />
                
             </div>
             {
                    !data ?  "not found" 
                    : <div className="details">
                         <ReactPlayer
                            url={data.link}
                            playing
                            loop
                            muted
                            width="100%"
                            height="450px"
                        /> 
                        <div className="video__desc">
                            <p>{ data.titile }</p>
                            <p>{ data.description }</p>
                            <p>{ data.titile }</p>
                            <p>{ data.description }</p>
                            <p>{ data.titile }</p>
                            <p>{ data.description }</p>
                        </div>
                        
                    </div>
                }
        </div>
    )
}

export default WorkDetails
