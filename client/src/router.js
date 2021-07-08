import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MyContext } from './App'
import Login from './Components/DashBoard/Auth/Login'
import Registration from './Components/DashBoard/Auth/Registration'
import BlogPost from './Components/DashBoard/BlogPost'
import Dashboard from './Components/DashBoard/Dashboard'
import WorkPost from './Components/DashBoard/WorkPost'
import Blog from './Components/Pages/Blog'
import BlogDetails from './Components/Pages/BlogDetails'
import Company from './Components/Pages/Company'
import Home from './Components/Pages/Home'
import Work from './Components/Pages/Work'
import WorkDetails from './Components/Pages/WorkDetails'


const Router = () => {
    const context = useContext(MyContext)
    console.log("context:", context);
    const { token } = context;
    return (
        <Switch>
            <Route path="/" component={ Home } exact/>
            <Route path="/work" component={ Work } exact/>
            <Route path="/blog" component={ Blog } exact/>
            <Route path="/blog" component={ Blog } exact/>
            <Route path="/blog/:id" component={ BlogDetails } exact/>
            <Route path="/company" component={ Company } exact/>
            <Route path="/work/:id" component={ WorkDetails } exact/>
            <Route path="/workpost" component={!token ? Login : WorkPost }/>
            <Route path="/signup" component={ Registration } />
            <Route path="/login" component={ Login } />
            <Route path="/Dashboard"  component={ !token ? Login : Dashboard } />
            <Route path="/blogpost"  component={ !token ? Login : BlogPost } />
            
        </Switch>
    )
}

export default Router
