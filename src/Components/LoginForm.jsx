import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Styles/LoginForm.css'

function LoginForm() {
    return (
        <div className='login-form'>
            
            <img src="../assets/images/computer-login-animate.svg" alt="Login Form" />

            <header id='login-header'>
                <h1>Welcome Back!</h1>
            </header>


            <form id='form'>
                <div className='form-group'>
                    <FontAwesomeIcon icon={faUserAlt} className="login-icons" />
                    <input type='email' name='email' id='email' placeholder='Enter your email' />
                </div>
                <div className='form-group'>
                    <FontAwesomeIcon icon={faLock} className="login-icons" />
                    <input type='password' name='password' id='password' placeholder='Enter your password' />
                </div>
                <div className='form-group'>

                    <input type='checkbox' name='remember' id='remember' />
                    <label htmlFor='remember'>Remember me</label>
                </div>

                <button type='submit' id='login-btn'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm