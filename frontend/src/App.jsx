
import Cookies from 'js-cookie';
import './App.css'
import { Nav } from './componnents/home/nav';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFunc } from './reduxx/slices';
import { useEffect, useState } from 'react';
import { tokenverifie } from './api/apiCall';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const API_URL = import.meta.env.VITE_API_URL
  const isloginCheck = () => {
  const token = Cookies.get("token")
    if (localStorage.getItem("user") || token) {
      tokenverifie()
        .then((res) => {
          if(res?.massage){
            Cookies.remove("token")
            localStorage.removeItem("linkId")
            localStorage.removeItem('islogin')
            localStorage.removeItem('user')
            navigate('/')
          } else{
            dispatch(loginFunc(true))
            console.log(res?.loginstatus)
            // localStorage.setItem("user", res.data)
          }
        })
        .catch((err)=>{
          console.log("auth failed")
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
