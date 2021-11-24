import React from 'react';
import '../assets/css/style.css';




const Menu = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        
        <a className="navbar-brand" href="/home"><h3>JQE</h3></a>

        
            <ul className="navbar-nav navbar-white">
          
        
            <li className="nav-item">
              
              <a className="nav-link" href="#">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Personal Shopper</a>
            </li>
            <li className="nav-item">
      
                <a className="nav-link" href="/contacto">Contacto</a>
            
            </li>
            <li className="nav navbar-nav navbar-right">
              Texto de separacion  aaaaaaaa aaa   aaaa aa aaaaaaaaaaaaa  
            </li>
        </ul>
        
      
        </nav>
      </div>
    </div>
     
  
  )
}

export default Menu

