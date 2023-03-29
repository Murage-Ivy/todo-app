import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../reducers/loginslice'
import '../Styles/LoginForm.css'

function LoginForm() {

    const [loggedUser, setLoggedUser] = useState({
        email: '123',
        password: ''
    })

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target
        setLoggedUser({ ...loggedUser, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser(loggedUser))
        setLoggedUser({
            email: '',
            password: ''
        })
    }

    return (
        <div className='login-form'>

            <img src="../assets/images/computer-login-animate.svg" alt="Login Form" />

            <header id='login-header'>
                <h1>Welcome Back!</h1>
            </header>


            <form id='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <FontAwesomeIcon icon={faUserAlt} className="login-icons" />
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter your email'
                        value={loggedUser.email}
                        onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <FontAwesomeIcon icon={faLock} className="login-icons" />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter your password'
                        value={loggedUser.password}
                        onChange={handleChange} />
                </div>


                <button type='submit' id='login-btn'>Login</button>


                <label
                    htmlFor='remember'
                    id='signup-option'>
                    Don't Hava an account?
                    <span id='login'>Login</span></label>

            </form>
        </div>
    )
}

export default LoginForm