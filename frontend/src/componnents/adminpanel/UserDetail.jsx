import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { getUserData, getUserDataUpdate } from '../../api/apiCall';
import './css/userDetail.css'

function UserDetail() {
    const [updateStatus, seUpdateStatus]= useState('')
    const location = useLocation();
    const userId = location.state;
    console.log(userId)

    useEffect(()=>{
        getUserData(userId).then((res)=>{
            console.log(res)
            setFormData((prevData) => ({
                ...prevData,
                name:res.name,
                username:res.username,
                contact:res.contact

                // [res.name]: files ? files[0] : value,
            }));
        })
    },[])


    const [formData, setFormData] = useState({
        photo: null,
        name: '',
        username: '',
        contact: '',
        address: '',
        other: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        getUserDataUpdate(userId, formData)
        .then((res)=>{
            seUpdateStatus("update successfull")
        })
        .catch(
            seUpdateStatus("not update")
        )
    };

    return (
        <>
            <div>UserDetail</div>
            <div className='updatestatus'>{updateStatus}</div>
            <form onSubmit={handleSubmit}>
                <div className='leben_and_input'>
                    <label>
                        <input
                            type="file"
                            name="photo"
                            onChange={handleChange}
                            accept="image/*"
                        />
                    </label>
                </div>
                <div className='leben_and_input'>
                    <label>
                        Name:
                    </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                </div>
                <div className='leben_and_input'>
                    <label>
                        username:
                    </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                </div>
                <div className='leben_and_input'>
                    <label>
                    contact:
                    </label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                </div>
                <div className='leben_and_input'>
                    <label>
                        Address:
                    </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                       
                        />
                </div>
                <div className='leben_and_input'>
                    <label>
                        Other:
                    </label>
                        <input
                            type="text"
                            name="other"
                            value={formData.other}
                            onChange={handleChange}
                        />
                </div>
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default UserDetail