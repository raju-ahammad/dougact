import axios from 'axios'
import React, { useContext, useState } from 'react'

import { isEmail } from './validate'
import { showErrorMessage, showSuccessMessage } from './Notification'
import { MyContext } from '../../../App'


const initialState = {
    email: "",
    password: "",
    err: "",
    success: ""
}
const Login = () => {
    const [user, setUser] = useState(initialState)
    const {email, password,err, success } = user

    const context = useContext(MyContext)
    const { setToken } = context

    const userHandleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value, err: "", success:""})
        console.log(user);
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        console.log("handleSubmit");
        if (!isEmail(email)) 
            return setUser({...user, err: "Invalid Email", success: ""})   
        
        try {
           
            const res = await axios.post('/api/users/login', { email, password })
            console.log(res.data.token);
            
            setUser({...user})
            setToken(res.data.token)
            console.log(res);
            
            
        } catch (err) {
            
            setUser({...user})
        }
    }
    return (
        <div className="mt-5">
            <div className="container">
            <div className="card" style={{margin: "auto", width: "650px"}}>
            
                <div className=" text-center">
                <h2 className="text-dark">Login Here</h2>
                </div>
                { err && showErrorMessage(err) }
                { success && showSuccessMessage(success) }
                <form className="form p-4" onSubmit={onHandleSubmit}>
                    <div className="form-group row">
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
                    
                    <div className="d-flex justify-content-md-between mt-2">
                        <button type="submit" className="btn btn-dark btn-lg px-5  m-auto">Submit</button>
                    </div>
                </form>
                
            
            </div>
            </div>
        </div>
    )
}

export default Login
