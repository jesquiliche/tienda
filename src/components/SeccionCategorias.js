import React,{useEffect,useState} from 'react'
import CardCategoria from './CardCategoria'
import style from '../assets/css/style.css'

const SeccionCategorias = () => {

    const [categorias,setCategorias]=useState([])

    useEffect(() => {
        obtenerDatos()

    }, [])

    const obtenerDatos=async ()=>{
        const datos=await fetch('http://localhost:3001/categorias')
        const cat=await datos.json()
        setCategorias(cat)
        console.log(cat)

    }

    return (
        <div className="container">
            <div className="container mb-2 SeccionCat">
                <h2 className="text-center">Categorias</h2>
                <div className="row">
            
                    {
                        categorias.map(item=>(
                            <CardCategoria 
                                title={item.NOMBRE} 
                                id={item.ID}
                                img={process.env.PUBLIC_URL + item.FOTO}>
                            </CardCategoria>
                                
                    
                        ))
                    }
                </div>
            </div>
        </div>  
    )
}

export default SeccionCategorias
