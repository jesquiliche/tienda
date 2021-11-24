
import React from 'react';
import '../assets/css/style.css';
import Menu from "../components/Menu"

const Cabecera = () => {
    return (
        
        
            <header className="fixed-top">
                <div id='silverfox' className="container-fluid bg-primary">
            
        
                    <div className="container py-3 text-white col-lg-12" >
                        <h1 class="display-1 text-  text-white"><b>JQE Electronics</b></h1>
                        <h2 >by Jesús Quintana Esquiliche</h2>
                    </div>
                
                </div>
                <Menu />
            </header>
    
    )
}

export default Cabecera


