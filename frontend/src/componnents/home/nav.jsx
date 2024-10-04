import React from 'react'
import "./nav.css"
import { useDispatch, useSelector } from 'react-redux';
import { loginFunc } from '../../reduxx/slices';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Nav({ onLoginClick }) {
    const dispatch = useDispatch()
    const navigate =useNavigate()
    const islogin = useSelector((state) => state.account.loginStatus)
    const options = [
        {
            name: 'home',
            to: '/'
        }

    ]

    const loginhandler = (e) => {
        e.preventDefault();
        const status = e.target.getAttribute("value")
        console.log(status)
        if (status === "Logout") {
                 axios.get('/api/logout')
                    .then((dataa) => console.log("res",dataa))
                    .catch((error) => console.error(error));
            
            dispatch(loginFunc(false))
            navigate('/')
        }
        if (status == "Login") {
            navigate('/login')
        }

    }

    return (
        <>
            <div className='navi'>
                <Link to={"/"} className='navi-name'><span>Parvez Alam</span></Link>
                <div className='navi-end'>
                    <ul className='navi-option'>
                        <Link className='navi-option-link' to={'/'}>home</Link>
                        <Link className='navi-option-link' to={'/logindetail'}>about</Link>
                        <Link className='navi-option-link'>service</Link>
                        <Link className='navi-option-link' to={'/admin'}>admin</Link>
                        <Link className='navi-option-link'>contact</Link>
                    </ul>
                    <Link to={"/login"}
                        className='navi-login'
                        onClick={loginhandler}
                    >
                        {islogin ? <span value="Logout" >Logout</span> : <span value="Login">Login</span>}
                    </Link>
                </div>
            </div>
        </>
    )
}
