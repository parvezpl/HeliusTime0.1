import React from 'react'
import "./nav.css"
import CenterBox from './center_box';
import { useDispatch } from 'react-redux';
import { loginFunc } from '../../reduxx/slices';
import { Link } from 'react-router-dom';

export function Nav({onLoginClick}) {
    const dispatch =useDispatch()

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
                    onClick={()=>dispatch(loginFunc(true))}
                    ><span >Login</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
