import React,{useEffect,useState} from 'react'


const GridArticulos = (props) => {

    const [articulos,setArticulos]=useState([])
    
    const [fila,setFila]=useState(props.row)
    const [pagina,setPagina]=useState(props.pag)
    

    useEffect(() => {
        obtenerDatos()

    },[])

    
    useEffect(() => {
        obtenerDatos()

    },[fila])
  /*  useEffect(() => {
        obtenerDatos()

    },[props.actualizar])
    */

   useEffect(() => {
        obtenerDatos()

    }, [props.row])

  /*  useEffect(() => {
        obtenerDatos()

    }, [articulos])*/
   

   

    /*useEffect(() => {
        refrescarDatos()

    }, [actualizar])*/

   const borrarHandler=async (e)=>{
    
       const datos=fetch('http://localhost:3001/articulos/'+e.target.id,
       {
        method: 'DELETE'
       }).then(res => res.json())
       .then(res=> {
             console.log(res)})
        .catch(console.error)
       
                
       // const a=articulos.filter(item=> item.idARTICULO!=e.target.id)
       // setArticulos(a)
        const d=await fetch('http://localhost:3001/articulos?num_row='
            +fila+"&pag="+props.pag)
        const art=await d.json()
        setArticulos(art)
    
        
                
        
    }
    
       
       

   
   
    const obtenerDatos=async ()=>{
        const datos=await fetch('http://localhost:3001/articulos?num_row='
            +props.row+"&pag="+pagina)
    
        const art=await datos.json()
        setArticulos(art)
    }

    
    

    return (
        <>
            <div className="container card  shadow-lg rounded col-sm-12 SeccionCat">
                
            <table className="table table-hover py-2">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">DESCRIPCIÒN</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">MARCA</th>
                    <th scope="col">CATEGORÍA</th>
                    <th scope="col">FOTO</th>
                    <th scope="col">ACCIÓN</th>
                    </tr>
                </thead>
                <tbody>
                {
                    articulos.map(item=>(
                        <tr>
                        <td className="fst-italic">{item.idARTICULO}</td>
                        <td className="fst-italic">{item.NOMBRE}</td>
                        <td className="fst-italic">{item.DESCRIPCION}</td>
                        <td className="fst-italic">{item.PRECIO}</td>
                        <td className="fst-italic">{item.MARCA}</td>
                        <td className="fst-italic">{item.NOMBRE_CATEGORIA}</td>
                        <td className="fst-italic">
                            <img 
                                className="foto zoom"
                                src={process.env.PUBLIC_URL + item.FOTO}>
                            </img>
                        </td>
                        <td scope="col" className="fst-italic">
                            <button  className="btn btn-danger btn-sm fst-italic">Editar</button>
                            
                        </td>
                        <td scope="col" className="fst-italic">
                            
                            <button className="btn btn-warning btn-sm fst-italic" 
                                id={item.idARTICULO}
                                onClick={borrarHandler}>Borrar</button>
                        </td>
                        </tr>
                    ))
                }
            
                  
                </tbody>
                </table>
               
            </div>


        
            
        </>
    )
}

export default GridArticulos
