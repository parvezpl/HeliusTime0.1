import React, { useState } from 'react'
import './centerbox.css'
import homeimg from './../../assets/home.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function CenterBox({ onLoginClick }) {
    // const [isLoginVigible, setIsLoginVisible] = useState(false)
    const isLoginVigible = useSelector((state) => state.account.loginStatus)

    return (
        <>
            <div className='main-page-box' style={{ filter: isLoginVigible && "blur(20px)" }} >
                <div className='centerBox2'>
                    <div className='main-leftbox'>
                        <div className='leftbox'>
                            <div className='textbox'>
                                <span className='textbox1'>hello!</span>
                                <span className='textbox2'>I Am Parvez Alam</span>
                                <div className='paragraph'>
                                <p >I am a passionate and detail-oriented full-stack web developer with
                                    expertise in React.js for front-end development and Node.js with
                                    Express.js for back-end services. I specialize in creating dynamic,
                                    responsive web applications with a focus on performance and user experience.
                                    My skill set includes building RESTful APIs, working with databases,
                                    and ensuring seamless communication between client and server.
                                </p><br />
                                <p>With a strong foundation in JavaScript and modern web technologies,
                                I am committed to delivering efficient, scalable solutions tailored to client needs.</p>
                                </div>
                            </div>
                            <div className='buttonbox'>
                                <Link to={"/myworks"} className='link-button' >View Work</Link>
                                <Link to={"/hireme"} className='link-button'>hire me</Link>
                                <div className='view_work'></div>
                                <div className='hire_me'></div>
                            </div>
                        </div>
                    </div>
                    <div className='rightbox-main'>
                        <div className='rightbox'>
                            <img src={homeimg} alt="" className='img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
