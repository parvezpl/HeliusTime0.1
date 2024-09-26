
import { useState } from 'react';
import './App.css'
import CenterBox from './componnents/home/center_box';
import { Nav } from './componnents/home/nav';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './componnents/sidebar/sidebar';

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}



export default App
