import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element = {<LoginForm purpose="Signin"/>}/>
        <Route path='/signup' element = {<LoginForm purpose= "Signup"/>}/>
      </Routes>
    </>
  )
}

export default App
