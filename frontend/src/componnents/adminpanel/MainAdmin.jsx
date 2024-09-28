import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import './MainAdmin.css'; // Add styles here


const MainAdmin = () => {
  return (

      <div className="admin-panel">
        <Sidebar />
        <div className="main-content">
          <Header />
            <Outlet/>
        </div>
      </div>

  );
};

export default MainAdmin;
