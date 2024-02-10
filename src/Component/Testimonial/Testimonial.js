import React from 'react'
import data from '../../Constante/data'
import './Testimonial.css'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Testimonial = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className='testimonials bg_blue section_padding'>
      <div className='container'>
        <div className='testimonials_content text_center'>
          <Slider {...settings}>
            {
              data.testimonials.map((testimonial,index) =>{
                return(
                  <div className="testimonials_item text_light" key = {index}>
                  <p className="para_text">
                      <span><FaQuoteLeft /></span>
                      &nbsp;
                      {testimonial.text} <span>&nbsp; <FaQuoteRight /></span>
                  </p>
                  <p className="text_upper text fw_5 ls_2">{testimonial.name}</p>
              </div>
                )
              }) 
            }

          </Slider>

        </div>

      </div>

    </div>
  )
}

export default Testimonial