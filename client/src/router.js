import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from './Components/Pages/Blog'
import Company from './Components/Pages/Company'
import Home from './Components/Pages/Home'
import Work from './Components/Pages/Work'
const Router = () => {
    return (
        <Switch>
            <Route path="/" component={ Home } exact/>
            <Route path="/work" component={ Work } exact/>
            <Route path="/blog" component={ Blog } exact/>
            <Route path="/company" component={ Company } exact/>

        </Switch>
    )
}

export default Router
