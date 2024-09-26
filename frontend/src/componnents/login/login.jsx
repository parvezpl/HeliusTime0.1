import React from 'react'
import { Inputbox, LoginButton } from './inputbox/inputbox'
import "./login.css"
import loginphoto from './../../assets/login.jfif'
import { useDispatch } from 'react-redux'
import { loginFunc } from '../../reduxx/slices'
import { Link } from 'react-router-dom'
export function Login() {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault(),
            username = event.target[0].value,
            password = event.target[1].value,
            console.log(username, password)
    }
    return (
        <div className='maincontainer'>
            <div className='login-box'>
                <Link to={"/"}
                    className='login-cencel'
                    onClick={() => dispatch(loginFunc(false))}
                >
                    X
                </Link>
                <div className='inleftbox'>
                    <img src={loginphoto}></img>
                </div>
                <div className='inrightbox'>
                    <form
                        onSubmit={handleSubmit}
                        className='inrightbox'
                    >
                        <Inputbox
                            placeholder="username"
                        />
                        <Inputbox
                            placeholder="pasword"
                        />
                        <LoginButton
                            type="submit"
                            placeholder="login"
                        />
                    </form>
                    <div className='login-with-google'> <button>login with google</button></div>
                    <div className='inputBox-acount-text'>
                        <Link to={"/signup"}>Create Account</Link>
                        <p>Forget Password</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
