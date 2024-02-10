import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className='footer section_padding  bg_dark'>
      <div className='container'>
        <div className='footer_content grid  text_light text_center'>
          <div className='footer_content--item'>
            <a href='#' className='footer_navlink'>Dev Desing</a>
            <p className="para__text">&copy; 2022 Dev. Point. All rights reserved. Designed by Robirurk.</p>

          </div>
          
          <div className='footer_content--item'>
            <h3 className='footer_title'>Proyect</h3>
            <ul className='footer_links'>
              <li><a href='#'></a>About</li>
              <li><a href='#'></a>Servicie</li>
              <li><a href = "#">Career</a></li>
            </ul>
          </div>
          <div className="footer_content--item">
            <h3 className="footer_title">News</h3>
              <ul className="footer_links">
                  <li><a href = "#">Events</a></li>
                  <li><a href = "#">Contact</a></li>
                  <li><a href = "#">Legals</a></li>
              </ul>
          </div>

          <div className="footer_content--item">
            <h3 className="footer_title">Social LInks</h3>
            <ul className="footer_links">
              <li><a href = "#">Facebook</a></li>
              <li><a href = "#">Twitter</a></li>
              <li><a href = "#">Instagram</a></li>
            </ul>
          </div>

          
        </div>
      
       
        
      </div>


    </footer>
  )
}

export default Footer