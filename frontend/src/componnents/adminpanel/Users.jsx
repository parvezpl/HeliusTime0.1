import React, { useEffect, useState } from 'react';
import { singupData } from '../../api/apiCall';
import './css/user.css'
import { Navigate, useNavigate } from 'react-router-dom';

const Users = () => {
  const [contacts, setData] = useState([]);
  const navigate = useNavigate()
  const fetchData = async () => {
    try {
      await singupData().then((res) => {
        setData(res);
      }
      )
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])
const clickhandler = (userId)=>{
  navigate("/admin/userDetail",{state:userId})

}

  return (
    <div className="page-content" >
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item"
          onClick={()=>clickhandler(contact._id)}
          >
            <span className="contact-name">{contact.name}</span>
            <span className="contact-mobile">{contact.mobile}</span>
            <span className="contact-email">{contact.contact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
