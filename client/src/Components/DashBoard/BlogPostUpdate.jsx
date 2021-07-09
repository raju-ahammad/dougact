import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './dasboard.css'
import { useHistory, useParams } from 'react-router-dom'
import Logo from '../Button/Logo'
import SideBar from '../Menu/SideBar'
const initialState = {
    title: "", 
    image: "",
    description: ""
}

const BlogPostUpdate = () => {
    const [blogPost, setBlogPost] = useState(initialState)
    const [workimage, setWorkImage] = useState(null)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const { title, image, description } = blogPost

    const history = useHistory()
    const {id} = useParams()
  

    const blogInitialFetchData = async () => {
        const res = await axios.get(`/api/blog/${id}`)
        setBlogPost(res.data)
        setWorkImage(res.data.image)
        
    }

    useEffect(() => {
        blogInitialFetchData()
    }, [id])

    const handleChange = (e) => {
        const {name, value} = e.target
        setBlogPost({...blogPost, [name]:value})
    }



    const blogUpdate = async () => {
        try {
            const res = await axios.put(`/api/blog/edit/${id}`, {title, image: workimage, description})
            setLoading(true)
            setBlogPost({...blogPost, res})
            console.log(res);
            setBlogPost(initialState)
            setLoading(false)
            history.push('/blog')
        } catch (err) {
            console.log(err);
            
        }
    } 

    const imageChangeHandle = async(e) => {
        try {
            const file = e.target.files[0]
           
            let formData =  new FormData()
            formData.append('picture', file)
           
            setLoading(true)
            const res = await axios.post("/api/image", formData)
            
            setWorkImage(res.data.image.image)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
        
    }
   

    const onSubmit = async (e) => {
        e.preventDefault();
    
        try {
            blogUpdate()
         
        } catch (error) {
          setError(true);
          console.error(error);
        }
      };
     

      const fileData = () => {
        if (image)
          return (
            <h5>
              {" "}
              <em> {image.name} </em>{" "}
            </h5>
          );
    
        return null;
      };
    
      
    return (
        <div className="work__post">
             <Logo/>
             <div className="dashBoard__wrapper">
                <SideBar/>

            <div className="work__form">
                
                <h2 className="workpost__title">Blog Post Update Here</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} placeholder="Title" onChange={handleChange} required id="title" className="form-cntrol"/>
                </div>
                <div className="form-group">
                    <label className="custom-file-label" htmlFor="image">
                        { loading ? <div className="loading">Uploading image please wait</div> : workimage ?  fileData() : "Choose File"}
                    </label>
                    
                    <input type="file" onChange={imageChangeHandle} name="file" id="image" className="custom__file-input"/>
                   
                    
                </div>
                
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" name="description" value={description} placeholder="description" onChange={handleChange} required id="desc" className="form-cntrol" />
                </div>
                    
                <button type="submit" className="btn"> 
                    Submit
                </button>
             
                {error ? (
                <div className="text-danger">
                    {" "}
                    Some error occured uploading the file{" "}
                </div>
                ) : null}
            </form>
            </div>
            </div>
        </div>
    )
}



export default BlogPostUpdate
