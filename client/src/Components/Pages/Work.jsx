import React, { useContext, useEffect } from 'react'
import LiquidBuble from '../Animation/LiquidBuble'
import "./work.css"
import { Link } from 'react-router-dom';
import Logo from '../Button/Logo';
import { MyContext } from '../../App';
import CardAnim from "../Animation/CardAnim";
import Image from "../Utils/Image";

const imageRatio = 500 / 1200;

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
                            <CardAnim>
                                <Link to={`/work/${data._id}`}><Image ratio={imageRatio} src={data.image}/></Link>
                                <div className="work__title"><Link to={`/work/${data._id}`}><h2 className="card-title">{ data.title }</h2></Link></div>
                            </CardAnim>
                        </div>
                    ))
                }
            
            </div> 
           

        </div>
    )
}

export default Work

