import React from 'react'

//Cargamos los componentes
import Cabecera from './components/Cabecera'
import Menu from './components/Menu'
import CardCategoria from './components/CardCategoria'


//Cargamos las imagenes de las distintas categorias
import movil from './assets/img/moviles.webp';
import portatil from './assets/img/portatiles.webp';
import tablet from './assets/img/tables.webp';
import consola from './assets/img/consolas.webp';
import electrodomestico from './assets/img/electrodomesticos.webp';
import television from './assets/img/tv.webp';
import SeccionCategorias from './components/SeccionCategorias';

import FormArticulo from './components/FormArticulo'



const App = () => {
  return (
    <>
      <Cabecera />
      
      <div className="container col-sm-12">
        <div className="row">
              
              <FormArticulo/>
          
      

        </div>

      
      
      </div>
          <div className="container col-sm-12">
        <div className="row py-3">
          <CardCategoria title='Televisión' precio='Desde 399 €' img={television}/>
          <CardCategoria title='Portátiles' precio='Desde 467 €' img={portatil}/>
          <CardCategoria title='Tablets' precio='Desde 120 €' img={tablet}/>
          <CardCategoria title='Móviles' precio='Desde 80 €' img={movil}/>
        </div>
        <div className="row py-3">
          <CardCategoria title='Consolas' precio='Desde 399 €' img={consola}/>
          <CardCategoria title='Neveras' precio='Desde 199 €' img={electrodomestico}/>
          <CardCategoria title='Tablets' precio='300n €' img={tablet}/>
          <CardCategoria title='Móviles' precio='120 €' img={movil}/>

        </div>
        </div>
        <SeccionCategorias/>
    </>
  )
}

export default App
