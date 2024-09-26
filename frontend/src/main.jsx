import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './reduxx/store.js'
import CenterBox from './componnents/home/center_box.jsx'
import { Login } from './componnents/login/login.jsx'
import { Sidebar } from './componnents/sidebar/sidebar.jsx'
import { Tigrim } from './componnents/game/tigrim/tigrim.jsx'
import { Website } from './componnents/pages/worksComp/website/website.jsx'
import { Workscomp } from './componnents/pages/worksComp/workscomp.jsx'
import LoginDetail from './componnents/home/logindetail.jsx'
import { SignupForm } from './componnents/singup/SignupForm.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<App />}>
        <Route path='/' element={
          <>
            <CenterBox />
            <Outlet />
          </>
        }>
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<SignupForm />}/>
          
        </Route>
        <Route path='myworks' element={<Workscomp/>}>
          <Route path='game' element={<div>game</div>}/>
          <Route path='tigrim' element={<Tigrim />}/>
          <Route path='website' element={<Website />}/>
        </Route>
        <Route path='logindetail' element={<LoginDetail/>}></Route>
      </Route>
    </Route> 
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
