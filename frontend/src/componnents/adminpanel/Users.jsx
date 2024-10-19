import React, { useEffect, useState } from 'react';
import { deleteUserData, singupData } from '../../api/apiCall';
import './css/user.css'
import { MdDeleteForever } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';

const Users = () => {
  const [contacts, setData] = useState([]);
  const [sms, setSms] = useState('');
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
  }, [sms])
  const clickhandler = (userId) => {
    navigate("/admin/userDetail", { state: userId })

  }

  const deleteHandler = (id) => {
    deleteUserData(id).then((res) => {
      setSms(res.message)
      setTimeout(()=>{
        setSms("")
      },3000)
      console.log(res)
    })

  }
  return (
    <div className="page-content" >
      <ul className="contact-list">
        <div style={{"height":"10px", "color":"white"}}>{sms}</div>
        {contacts.map((contact, index) => (

          <li key={index} className="contact-item"

          >
            <div onClick={() => clickhandler(contact._id)} className='box-con-item'>
              <span className="contact-name">{contact.name}</span>
              <span className="contact-mobile">{contact.mobile}</span>
              <span className="contact-email">{contact.contact}</span>
            </div>
            <MdDeleteForever className='icon' onClick={() => deleteHandler(contact._id)} />
          </li>

        ))}
      </ul>
    </div>
  );
};

export default Users;
