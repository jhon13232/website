import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact section_padding bg__whitesmoke'>
      <div className='container'>
        <h2 className='section_title text_center'>Need A Proyect</h2>
        <p className='para_text text_center'> 
          Let us know what you're looking for in an agency.
          We'll take a look and see if this could be the start of something beautiful
        </p>
        <div className='contact_content'>
          <form>
            <div className='form_elem  form_elem_2'>
              <input type='text' className='form_control' placeholder='Your Name'/>
              <input type='text' className='form_control ' placeholder='Your Email'/>
            </div>
            <div className='form_elem'>
              <input type='' className='form_control' placeholder='Your Title'/>
            </div>
            <div className='form_elem'>
              <textarea  className='form_control' placeholder='Your Comment' rows='6' />
            </div>
            <button type='submit'  className='form_submit--btn btn btn_blue'>Send Message</button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact