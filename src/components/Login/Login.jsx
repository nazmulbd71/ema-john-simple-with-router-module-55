import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <div className='form-parent'>
                <form>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <input className='btn-submit' type='submit' value="Login"></input>

                </form>
            </div>
            <p className='form-child'>New to Ema-John? <span><Link to="/signup">Create New Account</Link></span></p>
            <div className='footer-div'><input className='btn-submit-two' type='submit' value="Continue With Google"></input></div>

        </div>
    );
};

export default Login;