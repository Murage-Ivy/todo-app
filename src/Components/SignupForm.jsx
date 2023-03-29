import { faImage, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SignupForm() {
    return (

        <div className="signip-div">
            <div className="signup-form">
                <form className="signup-form-header">
                    <h1>Hello, Friend !</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faUser} className="sign-icons" />
                        <input type="text" placeholder="UserName" />
                    </div>
                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faImage} className="sign-icons" />
                        <input type="text" placeholder="Profile Picture" />
                    </div>

                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faLock} className="sign-icons" />
                        <input type="password" placeholder="Password" />
                    </div>

                    <div className="signup-form-input">
                        <FontAwesomeIcon icon={faLock} className="sign-icons" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>

                    <div className="signup-form-footer">
                        <button className="signup-btn">Sign Up</button>
                        <p>Already have an account? <span id='login'>Login</span></p>
                    </div>

                </form>

                <div>
                    <img src="../assets/images/computer-login-animate.svg" alt="Login Form" />
                    <h1>Glad to see you</h1>
                    <p>
                        Welcome to our sign-up form!
                        We're excited to have you join our community.
                        Please fill out the following information to create your account:
                    </p>
                </div>


            </div>
        </div>
    )
}

export default SignupForm