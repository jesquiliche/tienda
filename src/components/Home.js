import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

//Cargamos los componentes
import Cabecera from './Cabecera'
import Menu from './Menu'
import CardCategoria from '../components/CardCategoria'


//Cargamos las imagenes de las distintas categorias
import movil from '../assets/img/moviles.webp';
import portatil from '../assets/img/portatiles.webp';
import tablet from '../assets/img/tables.webp';
import consola from '../assets/img/consolas.webp';
import electrodomestico from '../assets/img/electrodomesticos.webp';
import television from '../assets/img/tv.webp';
import SeccionCategorias from '../components/SeccionCategorias';
import Ofertas from '../components/Ofertas';

import FormArticulo from '../components/FormArticulo'



const Home = () => {
  return (
    <>
      <Ofertas/>
      <SeccionCategorias/>
      
      
      
    
    </>
  )
}

export default Home
