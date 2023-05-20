import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../public/google.png'
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/';


    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <div className='form-parent'>
                <form onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={show ? "text" : "password"} name='password' required />
                        <p onClick={() => setShow(!show)}><small>{
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }</small></p>
                    </div>
                    <p className='error'>{error}</p>
                    <input className='btn-submit' type='submit' value="Login"></input>

                </form>
            </div>
            <p className='form-child'>New to Ema-John? <span><Link to="/signup">Create New Account</Link></span></p>
            <div className='footer-div'> <button className='btn-submit-two'><img src={img} alt="" /> Continue with google</button></div>

        </div>
    );
};

export default Login;