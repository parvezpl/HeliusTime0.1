import React from 'react';
import './css/Header.css'; // Add styles here

const Header = () => {
  const user = localStorage.getItem('user')
  return (
    <header className="header">
      <div className="header-right">
        <span>Welcome, {user}</span>
      </div>
    </header>
  );
};

export default Header;
