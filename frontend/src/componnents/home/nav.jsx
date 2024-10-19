import React, { useState } from 'react'
import "./nav.css"
import { useDispatch, useSelector } from 'react-redux';
import { loginFunc } from '../../reduxx/slices';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../../api/apiCall';

export function Nav() {
    const [optionStatus, setOptionStatus] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const islogin = localStorage.getItem('islogin')
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
            await logout()
                .then((res) => {
                    dispatch(loginFunc(false))
                    localStorage.removeItem("user")
                    navigate('/')

                })
                .catch((error) => console.error(error));
        }
        if (status == "Login") {
            navigate('/login')
        }

    }

    return (
        <>
            <div className='navi'>
                <Link to={"/"} className='navi-name'><span>{user ? user.toUpperCase() : "PARVEZ ALAM"}</span></Link>
                <div className='navi-end'>
                    <ul className='navi-option'>
                        <div className='switch'
                        onClick={()=>setOptionStatus((prev)=>!prev)}
                        >=</div>
                        <div className='navi-option-link'
                        style={{display: optionStatus ? "none" : "flex"}}
                        >
                            {islogin && <Link className='navi-option-link' to={'/admin'}>Admin</Link>}
                            <Link className='navi-option-link' to={'/'}>home</Link>
                            <Link className='navi-option-link' to={'/logindetail'}>about</Link>
                            <Link className='navi-option-link'>service</Link>
                            <Link className='navi-option-link'>contact</Link>
                        </div>
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
