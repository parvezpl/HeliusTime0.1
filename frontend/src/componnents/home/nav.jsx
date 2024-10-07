import React, { useEffect, useState } from 'react'
import "./nav.css"
import { useDispatch, useSelector } from 'react-redux';
import { loginFunc } from '../../reduxx/slices';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Nav() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const islogin = useSelector((state) => state.account.loginStatus)
    const [username, setUsername] = useState("PARVEZ ALAM")
     const user = localStorage.getItem("user")

    const options = [
        {
            names: 'home',
            to: '/'
        }
    ]

    const loginhandler = async (e) => {
        e.preventDefault();
        const status = e.target.getAttribute("value")
        console.log(status)
        if (status === "Logout") {
            await axios.get('/api/logout')
                .then((res) => {
                
                    dispatch(loginFunc(false))
                    localStorage.setItem("user","parvez alam")
                    navigate('/')

                })
                .catch((error) => console.error(error));
            setUsername("PARVEZ ALAM")
        }
        if (status == "Login") {
            setUsername(name)
            navigate('/login')
        }

    }

    return (
        <>
            <div className='navi'>
                <Link to={"/"} className='navi-name'><span>{user}</span></Link>
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
