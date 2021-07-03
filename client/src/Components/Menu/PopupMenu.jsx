import React, { useContext } from 'react'
import "./PopupMenu.css"
import logo from '../../Assets/Images/LogoBlack.png'
import MobileMenu from './MobileMenu'
import { MyContext } from '../../App'



const PopupMenu = () => {

    const {close, closeBtnHandle, value} = useContext(MyContext)
    console.log(close ,"Btn");
    console.log( closeBtnHandle ,"BtnHandle");

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
               <div className="popup__navmenu"> <MobileMenu/> </div>
               <div className="popup__headlines">headline</div>
           </div>
        </div>
    )
}

export default PopupMenu
