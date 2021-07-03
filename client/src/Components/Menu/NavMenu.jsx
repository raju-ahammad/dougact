import React, { useState } from 'react'
import "./Navmenu.css"
import ScrollHorizontal from 'react-scroll-horizontal';
import logo from '../../Assets/Images/Logo.png'
import { Link } from 'react-router-dom';
import WorkImage from '../../Assets/Images/WorkHome.png'
import WorkImage2 from '../../Assets/Images/WorkHome2.png'
import BlogImage from '../../Assets/Images/BlogHome.png'
import BlogImage2 from '../../Assets/Images/BlogHome2.png'
import CompanyImage from '../../Assets/Images/CompayHome.png'
import CompanyImage2 from '../../Assets/Images/CompayHome2.png'




const data = [
  {image: WorkImage, image2:WorkImage2, link:"/work"},
  {image:  BlogImage ,image2:BlogImage2, link: "/blog"},
  {image: CompanyImage,image2: CompanyImage2, link: "/company"},
];


const NavMenu = () => {
 


  const exampleItems = data.map((item, i) => {
    return (
      <div key={i} className="tile">
          <div className="menu__content">
            <div className="regular__nav"><Link to={item.link}> <img src={item.image}  onMouseLeave={ e => e.target.src = item.image } onMouseEnter={e => e.target.src = item.image2} alt="img"/> </Link></div>
            
          </div>
        
      </div>
    );
  });
  
    return (
      <section className="navmenu">
          
        <div style={{ height: `100vh` }}>
            
            <div className="logo__wrapper"><img src={logo} alt="Logo" /></div>
            <ScrollHorizontal>{exampleItems}</ScrollHorizontal>
            <div className="home_contact"><p>CONTACT</p></div>
        </div>
      </section>
    );
  }



export default NavMenu
