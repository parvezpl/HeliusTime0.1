import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css'; // Add styles here

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <Link className='sidebar-link' to="/admin/dashboard">Dashboard</Link>
        <Link className='sidebar-link' to="/admin/users">Users</Link>
        <Link className='sidebar-link' to="/admin/settings">Settings</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
