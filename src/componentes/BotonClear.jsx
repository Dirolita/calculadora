import React from "react";


const BotonClear = (props) =>(
    <button className="btn-clear"
    onClick={props.manejarClear}
    >
        {props.children}
    </button>
)

export default BotonClear