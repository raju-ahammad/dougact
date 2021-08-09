import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from './Components/Pages/Blog'
import BlogDetails from './Components/Pages/BlogDetails'
import Company from './Components/Pages/Company'
import Home from './Components/Pages/Home'
import Work from './Components/Pages/Work'
import WorkDetails from './Components/Pages/WorkDetails'
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
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './Components/Utils/timeLines'

const Router = () => {
  
    const context = useContext(MyContext)
    const { token } = context;
    return (
        <>
        <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                    <Switch>
                        <Route path="/" component={ Home } exact/>
                        <Route path="/work" component={ Work } exact/>
                        <Route path="/blog" component={ Blog } exact/>
                        <Route path="/blog" component={ Blog } exact/>
                        <Route path="/blog/:id" component={ BlogDetails } exact/>
                        <Route path="/company" component={ Company } exact/>
                        <Route path="/work/:id" component={ WorkDetails } exact/>
                        <Route path="/dashboard"  component={ !token ? Login : Dashboard } exact/>
                        <Route path="/dashboard/workpost" component={!token ? Login : ListWorksPost } exact/>
                        <Route path="/signup" component={ Registration } exact/>
                        <Route path="/login" component={ Login } exact/>
                        <Route path="/dashboard/blogpost"  component={ !token ? Login : ListBlogPost } exact/>
                        <Route path="/dashboard/blog/create"  component={ !token ? Login : BlogPost } exact/>
                        <Route path="/dashboard/work/create"  component={ !token ? Login : WorkPost } exact/>
                        <Route path="/dashboard/blog/edit/:id"  component={ !token ? Login : BlogPostUpdate } exact/>
                        <Route path="/dashboard/work/edit/:id"  component={ !token ? Login : WorksPostUpdate } exact/>
                    </Switch>
                </Transition>
                </TransitionGroup>
            )
            }}/>
        </>
    )
}

export default Router
