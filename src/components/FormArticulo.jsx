import React, {useState,useEffect} from 'react'
import GridArticulos from './GridArticulos'
import { useForm } from 'react-hook-form'


const FormArticulo = () => {

    
    const [file,setFile]=useState(null) 
    const [fila,setFila]=useState(0)
    const [pagina,setPagina]=useState(5)
    const [actualizar,setActualizar]=useState(false)



    const selectedHandler = e => {
        
        
            setDatos({...datos,
            FOTO : "./assets/img/"+e.target.files[0].name})

            setFile(e.target.files[0])
            console.log(file)
            
            
        
    }

    
    //Estado donde se guarda la listasta de categorias
    const [categorias,setCategorias]=useState([])
    //Estado donde se guarda la listas de subcategorias
    const [subCategorias,setSubCategorias]=useState([])
    //EStado donde se guarda los tipos de IVA
    const [iva,setIva]=useState([])
    //Estado donde se guarada la lista de Marcas
    const [marcas,setMarcas]=useState([])

    //Esta de fichero seleccionado
    const [selectedFile, setSelectedFile] = useState(null);
    
    //Estado donde se guarda la foto
    const [imagen, setImagen] = useState("")

    //Estado donde se guarda la foto
    const [foto, setFoto] = useState("")

    //Ficha del producto
    const [datos, setDatos] = useState({
        "idARTICULO": 0,
        "NOMBRE": "",
        "DESCRIPCION": "",
        "CATEGORIA": 0,
        "TIPOIVA": 0,
        "PRECIO": 0,
        "SUBCATEGORIA": 0,
        "IDMARCA": 0,
        "FOTO": ""
    },);

    const subirImagen=()=>{
        if(!file){

        alert('Debe especificar un fichero primero')
        return
        }
    
        //e.preventDefault()        
        const formdata = new FormData()
        formdata.append('image', file)

        fetch('http://localhost:3001/articulos/foto', {
        method: 'POST',
        body: formdata
        })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => {
        console.error(err)
        })
    
    }


    const sendHandler = (e) => {
        e.preventDefault()
        console.log(file)
        if(!file){
          alert('Debe especificar un fichero primero')
          return
        }
        //e.preventDefault()        
        const formdata = new FormData()
        formdata.append('image', file)
    
        fetch('http://localhost:3001/articulos/foto', {
          method: 'POST',
          body: formdata
        })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => {
          console.error(err)
        })
       
    }
    

    //Rellenar estados
    useEffect(() => {
        obtenerDatos()
        obtenerSubCategorias()
        obtenerIva()
        obtenerMarcas()

    }, [])

    useEffect(() => {
        obtenerDatos()
        obtenerSubCategorias()
        obtenerIva()
        obtenerMarcas()
        }, [actualizar])


    //Consultar base de datos y rellenar el estado de Categorias
    const obtenerDatos=async ()=>{
        const datos=await fetch('http://localhost:3001/categorias')
        const cat=await datos.json()
        setCategorias(cat)
    
    }

    
    //Consultar base de datos y rellenar el estado de subCategorias
    const obtenerSubCategorias=async ()=>{
        const datos=await fetch('http://localhost:3001/subcategorias')
        const scat=await datos.json()
        setSubCategorias(scat)

    }

    //Consultar base de datos y rellenar el estado del IVA
    const obtenerIva=async ()=>{
        const datos=await fetch('http://localhost:3001/iva')
        const iva=await datos.json()
        setIva(iva)
    

    }

    //Consultar base de datos y rellenar el estado  MARCAS
    const obtenerMarcas=async ()=>{
        const datos=await fetch('http://localhost:3001/marcas')
        const marca=await datos.json()
        setMarcas(marca)
    }

    //Actualizar datos en estado Datos
    const handleOnChange=async (e)=>{
        await setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })  
        
    }

    const {register,handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (datos) => {
            InsertarDatos(datos)
        }

    //Insertar en base de datos
    const InsertarDatos=()=>{
        fetch('http://localhost:3001/articulos', {
        method: 'POST', 
        body: JSON.stringify(datos), // data can be `string` or {object}!
        
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', datos))
        subirImagen(file)
        setActualizar(true)
        
    }
    


    return (

        <div className="Container py-14 articulos">
            
            <div className="container card  shadow-lg rounded col-sm-12 py-3">
            
                
            <GridArticulos row={fila} pag={pagina} actualizar={actualizar} />
            
            
  
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                    <a class="page-link" href="#" 
                        tabindex="-1"
                        onClick={()=>{
                            if(fila>0)
                                setFila(fila-5)
                            else setFila(0)
                                
                            setPagina(pagina)
                        
                        }}>Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#"
                        onClick={()=>{
                        setFila(5)
                                           
                    }}    
                    >1</a></li>
                    <li class="page-item"><a class="page-link" href="#"
                        onClick={()=>{
                        setFila(10)
                                           
                    }}  
                    >2</a></li>
                    <li class="page-item"><a class="page-link" href="#"
                        onClick={()=>{
                        setFila(15)
                                           
                    }}  
                    >3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" 
                        onClick={()=>{
                            setFila(fila+5)
                            
                            setPagina(pagina)
                        
                        }}>Next</a>
                    </li>
                </ul>
            </nav>

                <div className="card-title">
                    <h4>
                        Ficha Artículo
                    </h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>
                                Categoria
                            </label>

                            <div className="mb-3">
                                <select 
                                    name="CATEGORIA" 
                                    className="form-select"
                                    
                                    onClick={handleOnChange}
                                    {...register("CATEGORIA", {
                                        required: "Required",min:1
                                    })} 

                                    >
                                   
                                    
                                    {/*Rellenar lista de Categorias*/}
                                    <option value="0">Seleccionar</option>
                                    {categorias.map(e=>(
                                        <option value={e.ID}>{e.NOMBRE}</option>
                                    ))}
                                    
                                    
                                </select>
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.CATEGORIA &&  "* Categoría es requerida"}
                                </span>
                            </div>
                            <label>
                                Subcategoria
                            </label>
                            <div className="mb-3">
                                <select 
                                    name="SUBCATEGORIA" 
                                    className="form-select"
                                    onClick={handleOnChange}
                                    {...register("SUBCATEGORIA", {
                                        required: "Required",min:1
                                    })} 

                                    >

                                    {/*Rellenar lista de Subcategorias*/}
                                    <option value="0">Seleccionar</option>    
                                    {subCategorias.map(e=>(
                                        <option value={e.IDSUBCATEGORIA}>{e.NOMBRE}</option>
                                    ))}

                                                                       
                                </select>
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.SUBCATEGORIA &&  "* Subcategoría es requerida"}
                                </span>
                            </div>
                            <label>
                                IVA
                            </label>
                            <div className="mb-3">
                                <select 
                                    name="TIPOIVA" 
                                    className="form-select"
                                    onClick={handleOnChange}
                                    {...register("TIPOIVA", {
                                        required: "Required",min:1
                                    })} 
                                >

                                    {/*Rellenar lista de IVA*/}
                                    <option value="0">Seleccionar</option> 
                                    {iva.map(e=>(
                                        <option value={e.ID}>{e.NOMBRE}</option>
                                    ))}
                                    
                                    
                                </select>
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.TIPOIVA &&  "* IVA es requerida"}
                                </span>
                            </div>
                            <label>
                                Marca
                            </label>
                            <div className="mb-3">
                                <select 
                                    name="IDMARCA"  
                                    className="form-select"
                                    onClick={handleOnChange}
                                    {...register("IDMARCA", {
                                        required: "Required",min:1
                                    })} 
                                    >

                                    
                                    {/*Rellenar lista de Subcategorias*/}
                                    <option value="0">Seleccionar</option> 
                                    {marcas.map(e=>(
                                        <option value={e.ID}>{e.MARCA}</option>
                                    ))}
                                    
                                    
                                </select>
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.IDMARCA &&  "* MARCA es requerida"}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label>
                                Nombre
                            </label>

                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="nombre"  
                                    name="NOMBRE"
                                    placeholder="Introduca el nombre del artículo"
                                    {...register("NOMBRE", {
                                        required: "Required",
                                        minLength:10,
                                        maxLength:150
                                    })} 
                                    onChange={handleOnChange}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.NOMBRE &&  "* Nombre es requerido y debe tener una longitud minima de 20 caracteres"}
                                </span>
                            </div>
                                <label>
                                    Precio
                                </label>
                            <div className="mb-3">
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="precio"  
                                    name="PRECIO"
                                    placeholder="Introduzca precio"
                                    
                                    {...register("PRECIO", {
                                        required: "Required",
                                        min:1
                                    })} 
                                    onChange={handleOnChange}
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors.PRECIO &&  "* Precio es requerido"}
                                </span>
                            </div>
                                <label>
                                    Descripciòn
                                </label>
                            <div className="mb-3">
                                <textarea 
                                    type="text" 
                                    class="form-control" 
                                    id="descripcion"  
                                    name="DESCRIPCION"
                                    placeholder="Intoduzca la descripcion"
                                    cols="80"
                                    rows="5"
                                    onChange={handleOnChange}
                                ></textarea>
                            
                            </div>
                        </div>
                        <div className="col-lg-4">

                        <input type="file" 
                            className="form-control-file" 
                            name="FOTO" className="projectfile"
                            
                            onChange={selectedHandler}
                          /*  {...register("FOTO", {
                                required: "Required"
                            })} */                    
                        />
                        <span className="text-danger text-small d-block mb-2">
                                    {errors.FOTO &&  "* Fichero es requerido"}
                                </span>
                        <img className="picture" src={file}/>
                     </div> 
                    </div>
                      
                    <button type="submit" class="btn btn-danger" 
                    onClick={()=>setActualizar(!actualizar)}>Enviar</button>
                        
                </form>
                
                          </div>
        </div>
    )
}

export default FormArticulo
