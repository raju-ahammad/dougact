import React, { useContext, useEffect } from 'react'
import LiquidBuble from '../Animation/LiquidBuble'
import "./work.css"
import { Link } from 'react-router-dom';
import Logo from '../Button/Logo';
import { MyContext } from '../../App';


const Work = () => {

    const context = useContext(MyContext)

    const { workData, fetchWorkData, loading} = context
    useEffect(() => {
        fetchWorkData()
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