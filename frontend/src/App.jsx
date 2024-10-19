
import Cookies from 'js-cookie';
import './App.css'
import { Nav } from './componnents/home/nav';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFunc } from './reduxx/slices';
import { useEffect, useState } from 'react';
import { tokenverifie } from './api/apiCall';
import axios from 'axios';

function App() {
  const dispatch = useDispatch()
  const API_URL = import.meta.env.VITE_API_URL
  const isloginCheck = async () => {
  const token = Cookies.get("token")
    if (localStorage.getItem("user") || token) {
      await axios.get(`${API_URL}/api/token`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
          }
        }
      )
        .then((res) => {
          dispatch(loginFunc(true))
          localStorage.setItem("user", res.data.name)

        })
    }
  }

  useEffect(() => {
    isloginCheck()
  }, [])



  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}



export default App
