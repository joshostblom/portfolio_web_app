import './App.css'
import { Outlet } from 'react-router-dom'
import LocalNavbar from './components/LocalNavbar'

function App() {
  return (
    <>
      <LocalNavbar />
      <Outlet />
    </>
  )
}

export default App