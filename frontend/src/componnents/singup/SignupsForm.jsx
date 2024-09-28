import React, { useState } from 'react';
import './SignupForm.css';
import axios, { Axios } from 'axios';

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const postDAta = async (data) => {
    console.log(data);
    await axios.post('/api/singups', { name: data.name, mobile: data.mobile, email: data.email })
      .then((dataa) => console.log(dataa))
      .catch((error) => console.error(error));
  }
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateContact(formData.contact)) {
      setErrorMessage('Please enter a valid mobile number or email.');
      return;
    }
    postDAta(formData)

    console.log('Form Data Submitted:', formData);
    // Add form submission logic here
    setErrorMessage('');  // Clear any previous errors
    alert('Signup successful!');
  };

  const validateContact = (contact) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    return emailRegex.test(contact) || mobileRegex.test(contact);
  };


  return (
    <div className="form-container">
      <h2>Signup Form</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
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
          <label htmlFor="contact">Mobile or Email</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
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


