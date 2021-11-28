import React,{useEffect,useState} from 'react'
import Articulo from './Articulo'
import Oferta from './Oferta'

const Ofertas = () => {
    
    const [articulos,setArticulos]=useState([])
    useEffect(() => {
        obtenerDatos()

    }, [])

    const obtenerDatos=async ()=>{
        
        const datos=await fetch('http://localhost:3001/ofertas')
        const art=await datos.json()
        setArticulos(art)
        console.log(articulos)

    }
    return (
        <div className="container SeccionCat">
            <h2 className="text-center">Ofertas</h2>
            <div className="row col-sm-12">

            {
                    articulos.map(item=>(
                        <Oferta 
                            title={item.NOMBRE} 
                            precio={item.PVP_ORIGINAL}
                            oferta={item.PVP_OFERTA}
                            descripcion={item.DESCRIPCION}
                            marca={item.MARCA}
                            descuento={item.DESCUENTO}
                            subcategoria={item.SNOMBRE}

                            img={process.env.PUBLIC_URL + item.FOTO}/>
                    
                    ))
                }
            </div>
            
        </div>
    )
}

export default Ofertas
