import React from 'react';
import './css/Header.css'; // Add styles here

const Header = () => {
  return (
    <header className="header">
      <h1>Admin Panel</h1>
      <div className="header-right">
        <span>Welcome, Admin</span>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
