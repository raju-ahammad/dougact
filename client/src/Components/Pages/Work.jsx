import React, { useEffect, useState } from 'react'
import LiquidBuble from '../Animation/LiquidBuble'
import "./work.css"

import { Link } from 'react-router-dom';
import axios from 'axios';


// export const workData = [
//     {
//       "id": "1",
//       "title": "【生産性UP】モーション資料のご案内",
//       "description":"Lady with a red umbrella",
//       "link":"https://www.youtube.com/watch?v=wIpiEjbT5i0",
//       "image": work1
//     },
//     {
//       "id": "2",
//       "title": "【生産性UP】モーション資料のご案内",
//       "description":"Flowers and some fruits",
//       "link": "https://youtu.be/ivEDgFVZYnI",
//       "image": work2
//     },
//     {
//       "id": "3",
//       "title": "【生産性UP】モーション資料のご案内",
//       "description":"Beautiful scenery",
//       "link": "https://www.youtube.com/watch?v=2zAORucfyTs",
//       "image": work3
//     }
    
    
// ]
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
            
           <div className="liquid__buble">
                <LiquidBuble />
           </div>
            <div className="page__tittle"><h2>Work</h2></div>
            <div className="card__wraper">
              
                {
                    
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