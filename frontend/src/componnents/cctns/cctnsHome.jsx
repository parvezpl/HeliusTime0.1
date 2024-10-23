import React, { useState } from 'react';
import './cctnshome.css'; // Import CSS for basic styling
import { createCctnsData } from './apiCctns/apicctns';

export function  CCTNSHome () {
  const [activeTab, setActiveTab] = useState('Send'); // State to track active tab

  // Event handler to switch between Send and Log
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // State to hold form data
  const [formData, setFormData] = useState({
    option: '',   // For radio buttons
    name: '',   // First input field
    email: '',   // Second input field
    password: '',   // Third input field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Data Submitted:', formData); 
    createCctnsData(formData)
    .then((res)=>{
        console.log("submit",res)
    })
  };

  return (
    <div className="form-container">
      <h2>Form with Radio Buttons and Inputs</h2>
      <form onSubmit={handleSubmit} className='form'>
        {/* Radio Buttons */}
        <div className='button'> 
          <label className='button-label'>
            <input
              type="radio"
              name="option"
              value="User"
              checked={formData.option === 'User'}
              onChange={handleChange}
            />
            User
          </label>
          <label className='button-label'>
            <input
              type="radio"
              name="option"
              value="Cctnswork"
              checked={formData.option === 'Cctnswork'}
              onChange={handleChange}
            />
            Cctnswork
          </label>
        </div>

        {/* Input Fields */}
        <div>
          <label className='input-label' >
          name:
            <input
              type="text"
              name="name"
              value={formData.input1}
              onChange={handleChange}
              placeholder="Enter first input"
            />
          </label>
        </div>

        <div>
          <label className='input-label'>
          email:
            <input
              type="text"
              name="email"
              value={formData.input2}
              onChange={handleChange}
              placeholder="Enter second input"
            />
          </label>
        </div>

        <div>
          <label className='input-label'>
          password:
            <input
              type="text"
              name="password"
              value={formData.input3}
              onChange={handleChange}
              placeholder="Enter third input"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
