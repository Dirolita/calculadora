import React from "react";

function Boton(props){
    /*Esta funcion retorna true si cimple estas condiciones*/
    const esOperador = valor =>{
        return isNaN(valor) && (valor != '.') 
    }
    return(
        /*los propos. childen le estan diciendo que todo lo que yo ponga en esta etiqueta se renderizara como un prop*/
        <div
        className={`boton-contenedor ${esOperador(props.children)? 'operador': "" }`.trimEnd()}
        >
            {props.children}
        </div>
    )
}
export default Boton