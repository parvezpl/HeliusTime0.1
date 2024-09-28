
import './App.css'
import { Nav } from './componnents/home/nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}



export default App
