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
import Home from './components/Home'

import FormArticulo from './components/FormArticulo'

import GridArticulos from './components/GridArticulos';
import ListaArticulos from './components/ListaArticulos';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      
        
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/articulos" exact element={<GridArticulos/>}/>
        <Route path="/articulo" exact element={<FormArticulo/>}/>
        <Route path="/articulosPorCategorias/:id" exact element={<ListaArticulos/>}/>
      </Routes>
      
    
    
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
