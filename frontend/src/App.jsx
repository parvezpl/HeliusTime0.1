
import axios from 'axios';
import './App.css'
import { Nav } from './componnents/home/nav';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFunc } from './reduxx/slices';
import { useEffect, useState } from 'react';

function App() {
  const dispatch =useDispatch()
  
  
  const isloginCheck= async()=>{
    const res= await axios.get('/api/token')
    localStorage.setItem("user",res.data.name)
    if (res.data) {
      dispatch(loginFunc(true))
    }else{
      localStorage.setItem("user","parvez alam")
      dispatch(loginFunc(false))
    }
  }

  useEffect(()=>{
    isloginCheck()
  },[])


  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}



export default App
