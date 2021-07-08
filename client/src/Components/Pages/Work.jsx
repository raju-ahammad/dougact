import React, { useEffect, useState } from 'react'
import LiquidBuble from '../Animation/LiquidBuble'
import "./work.css"

import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Button/Logo';


const Work = () => {

    const [workData, setWorkData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        const res = await axios.get('/api/works')
        console.log(res);
        setLoading(true)
        setWorkData(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(workData);
    
    return (
        <div className="work">
            <Logo/>
            
           <div className="liquid__buble">
                <LiquidBuble />
           </div>
            <div className="page__tittle"><h2>Work</h2></div>
            <div className="card__wraper">
              
                {
                loading ? <div>Loading........</div>:   
                    workData.map((data) =>(
                        <div className="card__list" key={data._id}>
                            <div className="work__image"><Link to={`/work/${data._id}`}><img src={ data.image } alt="work-img"/></Link> </div>
                            <div className="work__title"><Link to={`/work/${data._id}`}><h2>{ data.title }</h2></Link></div>
                        </div>
                    ))
                }
            
            </div> 
           

        </div>
    )
}

export default Work