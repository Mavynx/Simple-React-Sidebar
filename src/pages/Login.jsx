import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

function Login() {
  return (
    <div className='login'>
        <div className='login-form'>
          <h1 className='d-flex justify-content-center mb-5 text-white'>Login</h1>
          <form action=''>

            <label className='login-label' htmlFor='name'><strong>Username</strong></label>
           <input type='name' name='name' className='form-control' placeholder='Username'  />

            <label className='login-label' htmlFor='password'><strong>Password</strong></label>
            <input type='password' name='password' className='form-control' placeholder='Password' />

            <button type='submit' className='btn btn-primary' id='loginbtn'>Login</button>
            <span ><p className='p-login'>New user?<Link className='link2' to='/signup'>Signup</Link></p></span>
          </form>

        </div>
       
      
    </div>
  )
}

export default Login
