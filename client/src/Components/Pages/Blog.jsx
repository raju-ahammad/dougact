import ParticleAnim from "../Animation/ParticleAnim"
import React, { useContext, useEffect } from 'react'
import "./work.css"
import { Link } from 'react-router-dom';
import { MyContext } from "../../App";
import CardAnim from "../Animation/CardAnim";
import Image from "../Utils/Image";
import Logo from '../Button/Logo';


const imageRatio = 500 / 1200;
const Blog = () => {

    const blogContext = useContext(MyContext)
    const { blogData, loading, fetchBlogData } = blogContext

    useEffect(() => {
        fetchBlogData()
    }, [])
    
    
    return (
        <div className="work">
             <Logo/>
             <ParticleAnim/>
            <div className="page__tittle"><h2>Blog</h2></div>
            <div className="card__wraper">
              
                {
                    loading ? <div>Loading........</div>:
                    
                    blogData.map((data) =>(
                        <div className="card__list" key={data._id}>
                            <CardAnim>
                                <Link to={`/blog/${data._id}`}><Image ratio={imageRatio} src={data.image}/></Link>
                                <div className="work__title"><Link to={`/blog/${data._id}`}><h2 className="card-title">{ data.title }</h2></Link></div>
                            </CardAnim>
                        </div>
                        
                    ))
                }
            
            </div> 
           

        </div>
    )
}
export default Blog
