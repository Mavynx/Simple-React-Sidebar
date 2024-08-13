import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup'>
        <div className='signup-form'>
          <h1 className='d-flex justify-content-center mb-5'>Signup</h1>
          <form action=''>
            <label htmlFor='name'><strong>Username</strong></label>
            <input type='name' name='name' className='form-control' placeholder='Username' />
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' name='email' className='form-control' placeholder='Email' />
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' name='password' className='form-control' placeholder='Password' />
            <button type='submit' className='btn btn-primary' id='signupbtn'>Signup</button>
            <span ><p className='p-signup'>Already have an account?<Link className='link1' to='/login'>Login</Link></p></span>
          </form>

        </div>
       
      
    </div>
  )
}

export default Signup
