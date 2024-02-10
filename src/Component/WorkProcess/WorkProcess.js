import React from 'react'
import './WorkProcess.css'
import  video from '../../Video/video.mp4'
import  {ControlBar,Player,PlayToggle} from 'video-react'
import 'video-react/dist/video-react.css'

const WorkProcess = () => {
  return (
    <div className='workprocess  section_padding'>
      <div className='container'>
        <div className='workprocess_content  text_center'>
          <h2 className='section_title text_cap' >Our Work Process</h2>
          <p  className='para_text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged 
          </p>
          <div className='vid_container'>
            <Player autoPlay loop  src={video}>
              <ControlBar autoHide={false} disableDefaultControls={true}>
                <PlayToggle/>

              </ControlBar>
            </Player>

          </div>

        </div>
      </div>  
      
    </div>
  )
}

export default WorkProcess