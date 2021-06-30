import React from 'react'
import "./PopupMenu.css"
import logo from '../../Assets/Images/LogoBlack.png'
import MobileMenu from './MobileMenu'

const PopupMenu = ({classValue, closeBtn, closeBtnHandle}) => {
    return (
        <div className={`popup__menu ${closeBtn} ${classValue}`} >
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
               <div className="popup__navmenu"> <MobileMenu/> </div>
               <div className="popup__headlines">headline</div>
           </div>
        </div>
    )
}

export default PopupMenu
