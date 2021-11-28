import React from 'react';
import '../assets/css/style.css';
import { NavLink } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import Ofertas from './Ofertas';




const Menu = () => {
  return (
    <div className="container-fluid bg-dark">
      
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#"> JQE</a>
         
        <span className="navbar-toggler-icon"></span>
        
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="btn btn-light mx-1 btn-sm" to="/">
                  Inicio
      </NavLink>
      <NavLink className="btn btn-light mx-1 btn-sm" to="/ofertas">
                  Ofertas
      </NavLink>
      <NavLink className="btn btn-light mx-1 btn-sm" to="/categorias">
                  Categorias
      </NavLink>
      <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn btn-danger mx-1 btn-sm">
            Articulos
          </Dropdown.Toggle>
              
              <Dropdown.Menu>
                <Dropdown.Item href="articulos">Mantenimiento</Dropdown.Item>
                <Dropdown.Item href="articulo">Alta</Dropdown.Item>
                
            </Dropdown.Menu>
        </Dropdown>
        </div>
    </div>
    </nav>
  

    </div>
     
  
  )
}

export default Menu

