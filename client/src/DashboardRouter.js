import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MyContext } from './App'
import Login from './Components/DashBoard/Auth/Login'
import Registration from './Components/DashBoard/Auth/Registration'
import BlogPost from './Components/DashBoard/BlogPost'
import Dashboard from './Components/DashBoard/Dashboard'
import WorkPost from './Components/DashBoard/WorkPost'



const DashboardRouter = () => {
    const context = useContext(MyContext)
    const { token } = context;
    return (
        <>
            <Route path="/dashboard"  component={ !token ? Login : Dashboard } exact/>
            <Route path="/dashboard/workpost" component={!token ? Login : WorkPost } exact/>
            <Route path="/signup" component={ Registration } exact/>
            <Route path="/login" component={ Login } exact/>
            <Route path="/dashboard/blogpost"  component={ !token ? Login : BlogPost } exact/>
        </>
    )
}

export default DashboardRouter
