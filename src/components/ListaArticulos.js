import React from 'react'
import Articulo from './Articulo'
import { useEffect,useState } from 'react'

const ListaArticulos = () => {
    const [articulos,setArticulos]=useState([])

    useEffect(() => {
        obtenerDatos()

    }, [])

    const obtenerDatos=async ()=>{
        const datos=await fetch('http://localhost:3001/articulos')
        const art=await datos.json()
        setArticulos(art)
        console.log(articulos)

    }
    return (
        <div>
            <div className="container">
        
            
                {
                    articulos.map(item=>(
                        <Articulo 
                            title={item.NOMBRE} 
                            precio={item.PRECIO}
                            descripcion={item.DESCRIPCION}
                            marca={item.MARCA}
                            subcategoria={item.SNOMBRE}

                            img={process.env.PUBLIC_URL + item.FOTO}/>
                    
                    ))
                }
            
            </div>
        
            
        </div>
    )
}

export default ListaArticulos

