
import Cookies from 'js-cookie';
import './App.css'
import { Nav } from './componnents/home/nav';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFunc } from './reduxx/slices';
import { useEffect, useState } from 'react';
import { tokenverifie } from './api/apiCall';

function App() {
  const dispatch = useDispatch()
  const isloginCheck = async () => {
    if (localStorage.getItem("user") || Cookies.get("token")) {
      // console.log("res")
      await tokenverifie().then((res) => {
        dispatch(loginFunc(true))
        localStorage.setItem("user", res.name)

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
