import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { MyContext } from './App'
import Login from './Components/DashBoard/Auth/Login'
import Registration from './Components/DashBoard/Auth/Registration'
import BlogPost from './Components/DashBoard/BlogPost'
import BlogPostUpdate from './Components/DashBoard/BlogPostUpdate'
import Dashboard from './Components/DashBoard/Dashboard'
import ListBlogPost from './Components/DashBoard/ListBlogPost'
import ListWorksPost from './Components/DashBoard/ListWorksPost'
import WorkPost from './Components/DashBoard/WorkPost'
import WorksPostUpdate from './Components/DashBoard/WorksPostUpdate'



const DashboardRouter = () => {
    const context = useContext(MyContext)
    const { token } = context;
    return (
        <>
            <Route path="/dashboard"  component={ !token ? Login : Dashboard } exact/>
            <Route path="/dashboard/workpost" component={!token ? Login : ListWorksPost } exact/>
            <Route path="/signup" component={ Registration } exact/>
            <Route path="/login" component={ Login } exact/>
            <Route path="/dashboard/blogpost"  component={ !token ? Login : ListBlogPost } exact/>
            <Route path="/dashboard/blog/create"  component={ !token ? Login : BlogPost } exact/>
            <Route path="/dashboard/work/create"  component={ !token ? Login : WorkPost } exact/>
            <Route path="/dashboard/blog/edit/:id"  component={ !token ? Login : BlogPostUpdate } exact/>
            <Route path="/dashboard/work/edit/:id"  component={ !token ? Login : WorksPostUpdate } exact/>

        </>
    )
}

export default DashboardRouter
