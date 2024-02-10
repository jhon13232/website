import React from 'react'
import images from '../../Constante/imagenes'
import AboutUS from '../About/AboutUS'


const Home = () => {
  return (
    <>
      <div>
       
        <div className="container">
          <div className="header_content text_center text_light flex flex_center">
            <div className="header_content--left"></div>
              <div className="header_content--right">
              <h1 className="header_title fw_6 text_dark" >We Design and Develop</h1>
              <p className="para_text text_grey ">We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.</p>
              <a href ="#" className="btn btn_blue">Contact us</a>
            </div>
          </div>
          
        </div>
        <AboutUS/>
   
      </div> 
    
    </>
    


  )
}

export default Home