
import React from 'react';
import '../assets/css/style.css';
import Menu from "../components/Menu"

const Cabecera = () => {
    return (
        
        
            <header id="silverfox" className="fixed-top">
                <div className="container-fluid">
            
                   


                        <h1 className="display-1 text-white"><b> JQE Electronics</b></h1>
                        <h2 className="display-4 text-white">     by Jesús Quintana Esquiliche</h2>
                
                        

                            
                    
                        
                </div>
                

                <Menu/>
                
                
            </header>
    
    )
}

export default Cabecera


