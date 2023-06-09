import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import img from '../../../public/google.png'
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

        if (password !== confirm) {
            setError('your password did not match')
            return;
        }
        else if (password.length < 6) {
            setError('password must be six character')
            return
        }
        else {
            setError('')
        }
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <div className='form-parent'>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>

                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' required />
                    </div>
                    <p className='error'>{error}</p>
                    <input className='btn-submit' type='submit' value="Sign Up"></input>

                </form>
            </div>
            <p className='form-child'>Already Have an Account? <span><Link to="/login">Please Log In</Link></span></p>
            <div className='footer-div'> <button className='btn-submit-two signup-btn'><img src={img} alt="" /> Continue with google</button></div>

        </div>
    );
};

export default SignUp;