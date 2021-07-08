import ParticleAnim from "../Animation/ParticleAnim"
import React, { useContext, useEffect } from 'react'
import "./work.css"
import { Link } from 'react-router-dom';
import { MyContext } from "../../App";


const Blog = () => {

    const blogContext = useContext(MyContext)
    const { blogData, loading, fetchBlogData } = blogContext

    useEffect(() => {
        fetchBlogData()
    }, [])
    
    
    return (
        <div className="work">
             <ParticleAnim/>
            <div className="page__tittle"><h2>Blog</h2></div>
            <div className="card__wraper">
              
                {
                    loading ? <div>Loading........</div>:
                    
                    blogData.map((data) =>(
                        <div className="card__list" key={data._id}>
                            <div className="work__image"><Link to={`/blog/${data._id}`}><img src={ data.image } alt="work-img"/></Link> </div>
                            <div className="work__title"><Link to={`/blog/${data._id}`}><h2>{ data.title }</h2></Link></div>
                        </div>
                    ))
                }
            
            </div> 
           

        </div>
    )
}
export default Blog
