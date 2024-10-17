import React, { useEffect, useState } from 'react';
import './logindetail.css';
import axios from 'axios';
import { singupData } from '../../api/apiCall';


const LoginDetail = () => {



    const [contacts, setData] = useState([]);

    const fetchData = async () => {
        try {
            await singupData().then((res)=>{
                // console.log(res)
                setData(res);

            }
            )
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const submithande=async ()=>{
        
    }


    return (
        <>
            <div className="list-container">
                <h2 onClick={fetchData}>Contact List</h2>
                <button onClick={submithande}>hello</button>
                <ul className="contact-list">
                    {contacts.map((contact, index) => (
                        <li key={index} className="contact-item">
                            <span className="contact-name">{contact.name}</span>
                            <span className="contact-mobile">{contact.mobile}</span>
                            <span className="contact-email">{contact.contact}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default LoginDetail;
