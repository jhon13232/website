import React from 'react'
import './Servicie.css'
import data from '../../Constante/data'
import Testimonial from '../Testimonial/Testimonial'


const Servicie = () => {
  return (
    <div className='servicies section_padding bg_whitesmoke'>
      <div className='container'>
        <h2 className='section__title text_center'>
          Servicie
        </h2>
        <div className='servicies_content grid'>
          {
            data.services.map((servicie,index)=>{
              return(
                <div className='servicies_content--item text_center' key={index}>
                  <img src={servicie.img} alt='' className='icon'/>
                  <h4 className='text_upper text'>{servicie.title}</h4>
                  <p className='para_text text_grey'>{servicie.text}</p>
                </div>
              )
            })
          }
        </div> 

      </div>
      <Testimonial/>


    </div>
  )
}

export default Servicie