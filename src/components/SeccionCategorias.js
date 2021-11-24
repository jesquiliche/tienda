import React,{useEffect,useState} from 'react'
import CardCategoria from './CardCategoria'

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
            <div className="row">
            
                {
                    categorias.map(item=>(
                        <CardCategoria 
                            title={item.NOMBRE} 
                        
                            img={process.env.PUBLIC_URL + item.FOTO}/>
                    
                    ))
                }
            
            </div>
           
            
        </div>
    )
}

export default SeccionCategorias
