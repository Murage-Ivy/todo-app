import { faEnvelope, faImage, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signUpUser } from '../reducers/signupslice'
import '../Styles/SignupForm.css'

function SignupForm() {
    const [user, setUser] = useState({
        email: '',
        image: '',
        password: '',
        password_confirmation: ''

    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const status = useSelector(state => state.signedUser.status)
    const errors = useSelector(state => state.signedUser.errors)






    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        dispatch(signUpUser(user, navigate))
        setUser({
            email: '',
            image: '',
            password: '',
            password_confirmation: ''
        })
    }

    return (

        <div className="signip-div">
            <div className="signup-form">
                <form className="signup-form-header" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <h1>Hello, Friend !</h1>
                        <p>Enter your personal details and start journey with us</p>
                    </div>

                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faEnvelope} className="sign-icons" />
                        <input type="email"
                            placeholder="Email"
                            value={user.email}
                            name="email"
                            onChange={handleChange} />
                    </div>
                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faImage} className="sign-icons" />
                        <input
                            type="text"
                            placeholder="Profile Picture"
                            value={user.image}
                            name="image"
                            onChange={handleChange} />
                    </div>

                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faLock} className="sign-icons" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={user.password}
                            name="password"
                            onChange={handleChange} />
                    </div>

                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faLock} className="sign-icons" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={user.password_confirmation}
                            name="password_confirmation"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="signup-form-footer">
                        <button className="signup-btn"> {status === "loading" ? "submitting..." : "SIGN UP"} </button>
                        <p>Already have an account? <NavLink to="/"><span id='login'>Login</span></NavLink></p>
                    </div>

                </form>
            </div>
            <div className='signup-form-side'>
                <img src="../assets/images/sign-up-animate.svg" alt="sign up Form" />
                <h1>Glad to see you</h1>
                <p>
                    Welcome to our sign-up form!
                    We're excited to have you join our community.
                    Please fill out the following information to create your account:
                </p>
            </div>

        </div>
    )
}

export default SignupForm