import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './Components/Shared/Navigation/Navigation'


function App() {


  return (
    <>
        <Navigation/>

        <Outlet/>
    </>
  )
}

export default App
