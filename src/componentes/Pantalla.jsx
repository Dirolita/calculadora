import React from "react";

/*Puedo definir mis componentes como una funcipn flecha, pero deben ser componentes sencillos*/
const Pantalla =( {input}) =>(
    <div className="input">
        {input}
    </div>
);
export default Pantalla