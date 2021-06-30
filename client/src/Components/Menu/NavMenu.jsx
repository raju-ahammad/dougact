import React from 'react'
import "./Navmenu.css"
import ScrollHorizontal from 'react-scroll-horizontal';
import logo from '../../Assets/Images/Logo.png'
import { Link } from 'react-router-dom';


const data = [
  {text: "WORK", link:"/work"},
  {text: "BLOG", link: "/blog"},
  {text: "COMPANY", link: "/company"},
  {text: "NEWS", link: "/news"},
  {text: "NEWS", link: "/news"},
  {text: "COMPANY", link: "/company"}
];


const NavMenu = () => {

  const exampleItems = data.map((item, i) => {
    return (
      <div key={i} className="tile">
          <div className="menu__content">
              <p>00{i+1}.</p>
              <h2> <Link to={item.link}>{item.text}</Link> </h2>
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
