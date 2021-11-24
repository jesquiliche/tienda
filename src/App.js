import React from 'react'
import Home from './components/Home'

import FormArticulo from './components/FormArticulo'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import GridArticulos from './components/GridArticulos';


const App = () => {
  
  return (
    
    
      <Router>
        
        
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/articulos" exact element={<GridArticulos/>}/>
          <Route path="/articulo" exact element={<FormArticulo/>}/>
         
        </Routes>

      
      
      </Router>
  
  )
}

export default App
