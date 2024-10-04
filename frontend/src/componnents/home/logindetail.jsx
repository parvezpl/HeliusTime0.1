import React, { useEffect, useState } from 'react';
import './logindetail.css';
import axios from 'axios';


const LoginDetail = () => {



    const [contacts, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/singup")
            console.log(response)
            setData(response.data);
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
                            <span className="contact-email">{contact.email}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default LoginDetail;
