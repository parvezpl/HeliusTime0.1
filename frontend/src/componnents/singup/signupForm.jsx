import React, { useState } from 'react';
import './SignupForm.css';
import axios, { Axios } from 'axios';

export function SignupForm  () {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const postDAta =async(data)=>{
    console.log(data);
    await axios.post('/api/singups', {name:data.name, mobile:data.mobile, email:data.email})
    .then((dataa) => console.log(dataa))
  .catch((error) => console.error(error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postDAta(formData)
    
    console.log('Form Data Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="form-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};


