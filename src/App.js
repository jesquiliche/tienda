import React from 'react'
import { Outlet } from 'react-router'
import Cabecera from './components/Cabecera'
import Menu from './components/Menu'



const App = () => {
  
  return (
    
    <>
      <Cabecera />
      <Menu />
      <div className="container">
          <Outlet />

      </div>
      
    </>
  
  )
}

export default App
