import React from 'react'
import './Stast.css'
import data from '../../Constante/data'

const Stast = () => {
  return (
    <div  className='stast bg_blue section_padding'>
      <div className='container'>
        <div className='stats_content grid'>
          {
            data.stats.map((stat,index)=>{
              return(
                <div className='stats_item  text_light text_center' key={index}>
                  <div className='stats_item--left '>
                    <img src={stat.img} alt='' className='img'/>
                  </div>
                  <div className='stats_item--right'>
                    <span className="value fw_6">{stat.value}</span>
                    <span className="text text_upper fw_5 ls_2">{stat.title}</span>
                  </div>
                </div>
                

              )
            
            })
          }
        </div>

      </div>

    </div>
  )
}

export default Stast