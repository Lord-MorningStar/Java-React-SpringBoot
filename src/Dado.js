import React from "react";

// export const Dado = () =>{
//     return (
//         <div>DadoS</div>
//     )
// }
function Dado(props){
    return (
        <div className="dado-recuadro">
            {props.valor}
        </div>
     );
}

export default Dado;