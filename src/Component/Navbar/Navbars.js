import React, {useState}from 'react'
import images from "../../Constante/imagenes";
import './Navbar.css'
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbars = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
    <div className="header" style = {{
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
    }}>
      <nav className='navbar'>
        <div className='container flex'>
          <a href="index.html" alt="" className="navbar_brand">
            <img src={images.logo} alt="site logo"/>
          </a>
          <button type="button" className="navbar_open--btn text_light" onClick={() => setToggleMenu(true)}>
            <FaBars size={26}/>
          </button>
          <div className='navbar_collapse'>
            <li className='nav_item'>
              <Link 
                to="/home"
                className = "nav_link text_upper fw_6 text_light"
              >
                Home 
              </Link>
            </li>
                     
            <li className='nav_item'>
              <Link 
                to="/work"
                className = "nav_link text_upper fw_6 text_light"
              >
                Work
              </Link>
            </li>
            <li className='nav_item'>
              <Link 
                to="/skills"
                className = "nav_link text_upper fw_6 text_light"
              >
                Profesional
              </Link>
            </li>
            <li className='nav_item'>
              <Link 
                to="/servicie"
                className = "nav_link text_upper fw_6 text_light"
              >
                Servicie
              </Link>
            </li>
            
            <li className='nav_item'>
              <Link 
                to="/contact"
                className = "nav_link text_upper fw_6 text_light"
              >
                ContactO
              </Link>
            </li>
          </div>
        </div>
        {toggleMenu && (
          
          <div className="navbar_smallscreen">
           <button type = "button" className="navbar_close--btn text_light" onClick={() => setToggleMenu(false)}>
              <FaTimes size = {32} />
            </button>
            <ul className="navbar_nav--smallscreen text_light">

              <li className='nav_item'>
                <Link 
                  to="/home"
                  className="nav__link text__upper fw__6 text__light"
                >
                  Home
                </Link>
              </li>

              <li className='nav_item'>
                <Link 
                  to="/work"
                  className="nav__link text__upper fw__6 text__light"
                >
                  Work
                </Link>
              </li>

              <li className='nav_item'>
                <Link 
                  to="/skills"
                  className="nav__link text__upper fw__6 text__light"
                 
                >
                  Profesional
                </Link>
              </li>

              <li className='nav_item'>
                <Link 
                  to="/servicie"
                  className="nav__link text__upper fw__6 text__light"
                >
                  Servicie
                </Link>
              </li>
              <li className='nav_item'>
                <Link 
                 to="/contact"
                 className="nav__link text__upper fw__6 text__light"
                >
                  ContactO
                </Link>
              </li>
            </ul>
          </div>

        )}

      </nav>
    </div>
  )
}

export default Navbars