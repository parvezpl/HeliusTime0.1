import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

function UserDetail() {
    const location = useLocation();
    const userId = location.state;
    console.log(userId)

    

    const [formData, setFormData] = useState({
        photo: null,
        name: '',
        email: '',
        mobile: '',
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
        console.log('Form Data:', formData);
    };

    return (
        <>
            <div>UserDetail</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <div
                            type="file"
                            name="photo"
                            onChange={handleChange}
                            accept="image/*"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Name:
                        <div
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <div
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mobile:
                        <div
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Address:
                        <div
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Other:
                        <div
                            type="text"
                            name="other"
                            value={formData.other}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UserDetail