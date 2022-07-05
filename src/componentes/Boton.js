import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props){
    const esOperador = (valor) =>{
       return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    return(
        <button onClick={() => props.manejarClick(props.children)} className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </button>
    );
}

export default Boton;