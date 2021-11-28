import React from 'react'
import '../assets/css/style.css';

const Articulo = (props) => {
    
    return (
        <div className="row py-2">

        
        <div className="container card  shadow-lg rounded col-sm-10">
            <div className="card-body item">
                 
                <table >
                    <tr>
                    <td className="col-lg-2" valign="top">
                    
                        <img src={props.img} className="zoom"/>            
                    </td>
                    <td className="col-lg-8" valign="top" align="left">
                        <h4>{props.title}</h4>
                        <h4>{props.precio} Euros</h4>
                        {props.descripcion}
                
                        
                        
                            
                            <table className="col-lg-12 pt-5 targeta" >
                                <tr>
                                    <th align="center">
                                        MARCA
                                    </th>
                                    <th align="center">
                                        SUBCATEGORIA
                                    </th>
                                    <th align="center">
                                        PRECIO
                                    </th>  
                                    </tr>
                                    <tr>
                                    <td align="center">
                                        {props.marca}
                                    </td>
                                    <td align="center">
                                        {props.subcategoria}
                                    </td>
                                    <td align="center">
                                        {props.precio}
                                    </td>                              
                                        </tr>
                                </table>
                                    
                        
                    </td>
                    </tr>
                   

                    
                            
                </table>
                
                <a href="#" className="btn btn-danger">Comprar</a>
            </div>
            </div>
        </div>
    );
}

export default Articulo
