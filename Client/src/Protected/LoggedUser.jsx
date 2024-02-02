import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

const LoggedUser = ({ isAuth, children }) => {
    const navigate = useNavigate()

    if (isAuth) {
        return (<Navigate to={'/room'} />)
    }
    else {
         return (children)
       
    }
}

export default LoggedUser
