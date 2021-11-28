import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Ofertas from './components/Ofertas';

import FormArticulo from './components/FormArticulo'

import GridArticulos from './components/GridArticulos';
import ListaArticulos from './components/ListaArticulos';
import SeccionCategorias from './components/SeccionCategorias';
import Home from './components/Home'



ReactDOM.render(
  <React.StrictMode>
  
    <Router>
      
        
      <Routes>
        <Route path="/"  element={<App/>}>
          <Route index="home" element={<Home/>}/>
          <Route path="articulos" element={<GridArticulos/>}/>
          <Route path="articulo" element={<FormArticulo/>}/>
          <Route path="articulosPorCategorias/:id" element={<ListaArticulos/>}/>
          <Route path="ofertas" element={<Ofertas/>}/>
          <Route path="categorias" element={<SeccionCategorias/>}/>
        </Route>
        
      </Routes>
      
    
    
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
