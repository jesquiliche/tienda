import React from 'react'
import { Outlet } from 'react-router'
import Cabecera from './components/Cabecera'
import Menu from './components/Menu'



const App = () => {
  
  return (
    
    <>
      <Cabecera />
      
      
      <div className="container-fluid">
          <Outlet />

      </div>
      
    </>
  
  )
}

export default App
