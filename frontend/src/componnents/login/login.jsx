import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFunc } from '../../reduxx/slices';
export function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        contact: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const postDAta = async (data) => {

        await axios.post('/api/userlogin', { username: data.contact, password: data.password })
            .then((res) => {
                console.log(res);
                const username =res.data.name
                localStorage.setItem("user", username)
                if (res.data === false) return "not login successful"
                dispatch(loginFunc(true))
                navigate('/')
            })
            .catch((error) => console.error(error));

    }

    const handleLogin = (e) => {
        e.preventDefault();
        postDAta(formData)
        // Add login logic here
    };

    const handleGoogleLogin = () => {
        console.log('Login with Google');
        // Add Google login logic here
    };

    const handleGithubLogin = () => {
        console.log('Login with GitHub');
        // Add GitHub login logic here
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="contact">Username:</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Enter your username"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="login-btn">Login</button>

                <div className="alt-login">
                    <p>Or login with</p>
                    <button type="button" className="google-btn" onClick={handleGoogleLogin}>
                        Login with Google
                    </button>
                    <button type="button" className="github-btn" onClick={handleGithubLogin}>
                        Login with GitHub
                    </button>
                </div>
            </form>

            <div className="login-footer">
                <a href="#forgot-password">Forgot Password?</a>
                <span> | </span>
                <Link to={'/signup'}>Sign Up</Link>
            </div>
        </div>
    );
}
