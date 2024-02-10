import React from 'react'
import images from '../../Constante/imagenes'
import './About.css'

const AboutUS = () => {
  return (
   
    <div className='about section_padding'>
      <div className='container'>
        <div className='about_content text_center'>
          <h2 className='section_title  text_cap '>About Us</h2>
          <p className='para_text  text_grey'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged 
            <img src={images.signature}/> 
          </p>        
  
        </div>

      </div>

    </div>
  )
}

export default AboutUS