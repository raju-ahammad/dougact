import React, { useContext, useEffect } from 'react'
import "./PopupMenu.css"
import logo from '../../Assets/Images/LogoBlack.png'
import MobileMenu from './MobileMenu'
import { MyContext } from '../../App'

const PopupMenu = () => {

    const context = useContext(MyContext)
    const {close, closeBtnHandle, value, blogData, fetchBlogData} = context
   
    useEffect(() => {
        fetchBlogData()
    }, [])
    return (
        <div className={`popup__menu ${close} ${value}`} >
           <div className="popup__content">
               <div className="social__sidebar">
                   <div onClick={closeBtnHandle} className="close__icon">
                        <i className="fal fa-times"></i>
                   </div>
               </div>
               <div className="popup__logo">
                   <div className="logo_wrapper">
                       <img src={ logo } alt="logo" />
                   </div>
               </div>
               <div className="popup__navmenu"> 
                    <p className="headline__text">content</p>
                    <MobileMenu/> 
                </div>
               <div className="popup__headlines">
                   <p className="headline__text"> hedlines</p>
                   <div className="headline_wrapper">
                        {
                            blogData.map(data => (
                                <div key={data._id} className="title">
                                    <p> <span>info</span> {data.createdAt}</p>
                                    <p>{ data.title }</p>
                                </div>
                            ))
                        }
                    </div>
               </div>
           </div>
        </div>
    )
}

export default PopupMenu
