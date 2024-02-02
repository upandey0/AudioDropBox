import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Register from './Pages/Register/Register.jsx'
import Authenticate from './Pages/Authenticate/Authenticate.jsx'
import LoggedUser from './Protected/LoggedUser.jsx'
import Activated from './Protected/Activated.jsx'

let isAuth = true;
const user = {
  activate : false
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='signin' element={<LoggedUser isAuth={isAuth}> {<Register/>} </LoggedUser>}></Route>
      <Route path='activate' element = {<Activated isActivate = {user.activate} isAuth = {isAuth}> <Authenticate/></Activated>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
