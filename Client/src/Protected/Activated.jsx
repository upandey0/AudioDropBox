import React from 'react'
import {Navigate} from 'react-router-dom'

const Activated = ({isActivate, children, isAuth}) => {
  return (
    !isAuth ? (<Navigate to={'/signin'}/>) : (isActivate ? (<Navigate to={'/room'}/>) : (children))
  )
}

export default Activated
