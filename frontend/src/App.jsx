
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
  const isloginCheck = async () => {
    
    if (localStorage.getItem("user") || Cookies.get("token")) {
      await axios.get(`/api/token`)
      .then((res) => {
        console.log(res)
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
