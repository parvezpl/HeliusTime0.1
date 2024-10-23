import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './reduxx/store.js'
import CenterBox from './componnents/home/center_box.jsx'
import { Login } from './componnents/login/login.jsx'
import { Tigrim } from './componnents/game/tigrim/tigrim.jsx'
import { Website } from './componnents/pages/worksComp/website/website.jsx'
import { Workscomp } from './componnents/pages/worksComp/workscomp.jsx'
import LoginDetail from './componnents/home/logindetail.jsx'
import { SignupForm } from './componnents/singup/SignupsForm.jsx'
import MainAdmin from './componnents/adminpanel/MainAdmin.jsx'
import Dashboard from './componnents/adminpanel/Dashboard.jsx'
import Users from './componnents/adminpanel/Users.jsx'
import Settings from './componnents/adminpanel/Settings.jsx'
import { Otherwork } from './componnents/pages/worksComp/otherwork/otherwork.jsx'
import AdmninProtectedRoute from './protectedRoute/adminProtect.jsx'
import UserDetail from './componnents/adminpanel/UserDetail.jsx'
import { CCTNSHome } from './componnents/cctns/cctnsHome.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(

    <Route element={<App />}>
      <Route path='/' element={<CenterBox />} />
      <Route path='/admin' element={
        <AdmninProtectedRoute>
          <MainAdmin />
        </AdmninProtectedRoute>
      }>

        <Route path="cctnshome" element={<CCTNSHome />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="userDetail" element={<UserDetail />} />

      </Route>

      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignupForm />} />
      <Route path='myworks' element={<Workscomp />}>
        <Route path='game' element={<div>game</div>} />
        <Route path='tigrim' element={<Tigrim />} />
        <Route path='website' element={<Website />} />
        <Route path='test' element={<Otherwork />} />
      </Route>
      <Route path='logindetail' element={<LoginDetail />}></Route>
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
