import React, { useState } from 'react'
import axios from 'axios'
import './dasboard.css'
import { useHistory } from 'react-router-dom'
const initialState = {
    title: "", 
    image: "",
    description: ""
}

const BlogPost = () => {
    const [blogPost, setBlogPost] = useState(initialState)
    const [workimage, setWorkImage] = useState(null)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const { title, image, description } = blogPost

    const history = useHistory()

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(value);
        setBlogPost({...blogPost, [name]:value})
    }

    const blogInfo = async () => {
        try {
            const res = await axios.post("/api/blog", {title, image: workimage, description})
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
            console.log("File", file);

            let formData =  new FormData()
            formData.append('picture', file)
            console.log(formData);

            const res = await axios.post("/api/image", formData)
            console.log(res);

        
            setWorkImage(res.data.image.image)
        } catch (error) {
            console.log(error);
        }
        
    }
   

    const onSubmit = async (e) => {
        e.preventDefault();
    
        try {
          blogInfo()
         
        } catch (error) {
          setError(true);
          console.error(error);
        }
      };
      console.log("workimage",workimage);
     

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
            Hello work post
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} placeholder="Title" onChange={handleChange} required id="title" className="form-cntrol"/>
                </div>
                <div className="form-group">
                    <div className="custom-file">
                        <input type="file" onChange={imageChangeHandle} name="file" id="image" className="custom__file-input"/>
                    </div>
                    <label className="custom-file-label" htmlFor="image">
                        {workimage ? fileData() : "Choose File"}
                    </label>
                </div>
                
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" name="description" value={description} placeholder="description" onChange={handleChange} required id="desc" className="form-cntrol"/>
                </div>
                {
                    !loading ? <button type="submit" className="btn"> 
                    Submit
                </button>:  "loading....."
                }
                
                {error ? (
                <div className="text-danger">
                    {" "}
                    Some error occured uploading the file{" "}
                </div>
                ) : null}
            </form>
        </div>
    )
}



export default BlogPost