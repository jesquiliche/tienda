import React from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import Ofertas from './Ofertas';




const Menu = () => {
  return (
    <div className="container-fluid bg-dark">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">JQE</a>
         
        <span className="navbar-toggler-icon"></span>
        
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Inicio</a>
      <a className="nav-item nav-link" href="/ofertas">Ofertas</a>
      <a className="nav-item nav-link" href="/categorias">Categorias</a>
      <a className="nav-item nav-link disabled" href="#">Contacto</a>
    </div>
  </div>
</nav>
    </div>
     
  
  )
}

export default Menu

