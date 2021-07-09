import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isEmpty,isEmail,isLength,isMatch } from './validate'
import { showErrorMessage, showSuccessMessage } from './Notification'
const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
    err: "",
    success: ""
}

const Registration = () => {
    const [user, setUser] = useState(initialState)
    const {name, email, password, password2 ,err, success } = user

    const userHandleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value, err: "", success:""})
        console.log(user);
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        
            
        if (isEmpty(name) || isEmpty(password || isEmpty(email))) 
                return setUser({...user, err: "please fill in the all fields", success: ""})
        if (!isEmail(email)) 
            return setUser({...user, err: "Invalid Email", success: ""})    

        if (isLength(password)) 
            return setUser({...user, err: "Password must be atleast 6 letter", success: ""}) 
               
        if (!isMatch(password, password2)) 
            return setUser({...user, err: "Password did not match", success: ""})  
             
        try {
            const res = await axios.post('/api/users/register', { name, email, password })
            setUser({...user, err: "", success: res.data.msg})
            console.log(res);
            
            
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ""})
        }
    }

    return (
        <div className="mt-5">
            <div className="container">
            <div className="card" style={{margin: "auto", width: "650px"}}>
            
                <div className=" text-center">
                <h2 className="text-dark">Register Here</h2>
                </div>
                { err && showErrorMessage(err) }
                { success && showSuccessMessage(success) }
                <form className="form p-4" onSubmit={ onHandleSubmit } >
                <div className="form-group row mt-2">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onChange={userHandleChange} type="name" value={name} name="name" className="form-control" id="name" placeholder="Enter Your Name" />
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={userHandleChange} type="email" value={email} name="email" className="form-control" id="email" placeholder="Enter Your Email" />
                    </div>
                </div>

                <div className="form-group row mt-2">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onChange={userHandleChange} type="password" value={password} name="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <label htmlFor="password2" className="col-sm-2 col-form-label">Confirmed Password</label>
                    <div className="col-sm-10">
                        <input onChange={userHandleChange} type="password" value={password2} name="password2" className="form-control" id="cf_password" placeholder="Re Enter Password" />
                    </div>
                </div>
                <div className="d-flex justify-content-md-between mt-2">
                    <button type="submit" className="btn btn-dark btn-lg px-5  m-auto">Submit</button>
                </div>
                </form>
                <h5 className="text-center"> Already an account ? <Link to="/login"> Login </Link> </h5>
            
            </div>
            </div>
        </div>
    )
}

export default Registration
