import React from 'react'
import Logo from '../Button/Logo'
import SideBar from '../Menu/SideBar'

const Dashboard = () => {
   
    return (
        <div className="dashBoard__wrapper">
            <Logo/>
            <div className="dashBoard__wrapper">
                <SideBar/>
                <div className="dashboard__content">
                   <h2> Welcome to DashBoard</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
