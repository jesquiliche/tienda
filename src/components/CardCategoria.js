
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';





class CardCategoria extends React.Component {
    
    

    render(){
        return (
            
               
                    <div className="card  shadow-lg p-2 rounded col-sm-3  targeta">
                        <div className="card-body item ">
                            <h4 className="card-title">{this.props.title}</h4>
                            <h5>{this.props.precio}</h5>
                            <div>
                                <img src={this.props.img}/>        
                            </div>
                            <Link to={`/articulosPorCategorias/${this.props.id}`}
                                className="btn btn-danger">
                                Ver
                            </Link>
                          
                        </div>
                    </div>
                   
           
        );
    }
}
export default CardCategoria;