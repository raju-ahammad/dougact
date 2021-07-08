import React, { useState } from 'react'
import axios from 'axios'
import './dasboard.css'
import { useHistory } from 'react-router-dom'
import Logo from '../Button/Logo'
import SideBar from '../Menu/SideBar'
const initialState = {
    title: "",
    worksimage: "",
    video: "",
    description: ""
}

const WorkPost = () => {
    const [postWork, setPostWork] = useState(initialState)
    const [workimage, setWorkImage] = useState(null)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const { title, image, video, description } = postWork

    const history = useHistory()

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(value);
        setPostWork({...postWork, [name]:value})
    }

    const postWokrsInfo = async () => {
        try {
            const res = await axios.post("/api/work", {title, image: workimage, video, description})
            setLoading(true)
            setPostWork({...postWork, res})
            console.log(res);
            setPostWork(initialState)
            setLoading(false)
            history.push('/work')
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
          postWokrsInfo()
         
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
            <Logo/>
            <div className="dashBoard__wrapper">
            <SideBar/>

            <div className="work__form">
                
                <h2 className="workpost__title">Work Post Here</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} placeholder="Title" onChange={handleChange} required id="title" className="form-cntrol"/>
                </div>
                <div className="form-group">
                <label className="custom-file-label" htmlFor="image">
                        {workimage ? fileData() : "Choose File"}
                    </label>
                    
                    <input type="file" onChange={imageChangeHandle} name="file" id="image" className="custom__file-input"/>
                    
                    
                </div>
                <div className="form-group">
                    <label htmlFor="video">Video Url</label>
                    <input type="text" name="video" value={ video } placeholder="Video Url" onChange={handleChange} required id="video" className="form-cntrol"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" name="description" value={description} placeholder="description" onChange={handleChange} required id="desc" className="form-cntrol"/>
                    
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
            </div>
        </div>
    )
}

export default WorkPost
