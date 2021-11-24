
import React from 'react';
import '../assets/css/style.css';





class CardCategoria extends React.Component {
    
    

    render(){
        return (
            
               
                    <div className="card  shadow-lg p-3 rounded col-sm-3  mr-auto targeta">
                        <div className="card-body item">
                            <h4 className="card-title">{this.props.title}</h4>
                            <h5>{this.props.precio}</h5>
                            <div>
                                <img src={this.props.img}/>        
                            </div>
                            
                            <a href="#" className="btn btn-danger">Ofertas</a>
                          
                        </div>
                    </div>
                   
           
        );
    }
}
export default CardCategoria;