import { Outlet } from '@tanstack/react-router'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App