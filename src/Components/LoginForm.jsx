import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Styles/LoginForm.css'

function LoginForm() {
    return (
        <div className='login-form'>
            <h1>Login Form</h1>
            <img src="../assets/images/computer-login-animate.svg" alt="Login Form" />

            <header>
                <h1>Welcome Back!</h1>
            </header>


            <form id='form'>
                <div className='form-group'>
                    <FontAwesomeIcon icon={faUser} className="login-icons" />
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

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm