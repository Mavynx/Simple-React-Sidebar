import React from 'react'

function Contact() {
  return (
    <div className='contact-body'>
      <div className='contact-form'>
          <h1 className='d-flex justify-content-center mb-5'>Leave A Message</h1>
          <form action='' className='contact-form' >
            <label htmlFor='name'> <strong>Full Name</strong></label>
            <input type='name' name='name' placeholder='Full Name' className='form-control' />
            <label htmlFor='email'> <strong>Email</strong></label>
            <input type='email' name='email' placeholder='Email' className='form-control' />
            <label htmlFor='message'> <strong>Enter Message</strong></label>
            <textarea className='form-control' id='message' />
            <button className='btn btn-primary' id='btn1'>Send</button>
          </form>

      </div>
        
      
    </div>
  )
}

export default Contact