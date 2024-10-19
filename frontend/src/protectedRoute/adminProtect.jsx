// src/ProtectedRoute.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AdmninProtectedRoute = ({ children }) => {
    const islogin = localStorage.getItem("islogin")
    return islogin ? children : <Navigate to="/login" />;
};

export default AdmninProtectedRoute;
