import React, { useState } from 'react'
import data from '../../Constante/data'
import image from '../../Constante/imagenes'
import './Work.css'
import {FaTimesCircle} from 'react-icons/fa'
import WorkProcess from '../WorkProcess/WorkProcess'

const Work = () => {
  const [imageModal, setImageModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const setImageOnModal = (src) => {
    setImageSrc(src);
    setImageModal(true);
  }
  return (
    <>
      <WorkProcess/>
      <div className='work'>
      <div className={imageModal ? "image_modal image_modal_show":"image_modal"}>
        <div className='image_modal--content'>
          <FaTimesCircle className='modal_close--btn text_light bg_blue' size={30} onClick = {() => setImageModal(false)} />
          <img src={imageSrc} alt=''/> 
          
        </div>
      </div>
     

      

      <div className='work_content grid'>
        {
          data.works.map((work,index)=>{
            return(
              <div className='work_content--item' key={index}  onClick = {() => setImageOnModal (work.img)}>
                <img src={work.img}  alt='' className='img'/>
                <div className='icon'>
                  <img src={image.icon_eye} alt=''/>
                </div> 
                
              </div>
            )
          })
        }

      </div>
  

    </div>
    
    </>
   
  )
}

export default Work