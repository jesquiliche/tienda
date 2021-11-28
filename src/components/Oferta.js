import React from 'react'
import '../assets/css/style.css';

const Oferta = (props) => {
    
    return (
        

        
        <div className="container card  shadow-lg rounded col-sm-6">
            <div className="card-body item">
                 
                <table >
                    <tr>
                    <td className="col-lg-2" valign="top">
                    
                        <img src={props.img} className="zoom"/>            
                    </td>
                    <td className="col-lg-8" valign="top" align="left">
                        <h2 className="text-rigth">{props.title} </h2> <h4 className="text-rigth">{props.descuento} % de descuento</h4>

                        <p>{props.precio} PVP Original - {props.oferta} PVP Oferta</p>
                        
                        {props.descripcion}
                
                        
                        
                            
                                    
                        
                    </td>
                    </tr>
                   

                    
                            
                </table>
                
                <a href="#" className="btn btn-danger">Comprar</a>
            </div>
        
        </div>
    );
}

export default Oferta
