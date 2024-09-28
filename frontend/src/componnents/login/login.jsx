import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
export function Login() {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login form submitted');
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
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
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
