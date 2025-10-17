import React from 'react'
import HomePage from './pages/HomePage'
import SignupUser from './components/Signup'
import UserAuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'

export const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App