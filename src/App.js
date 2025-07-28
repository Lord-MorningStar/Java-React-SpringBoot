import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Dado from "./Dado";
import "./Dado.css"
import Contador from "./Contador";

// function Sumar(e) {
//   e.preventDefault();
//   const v1 = parseInt(e.target.valor1.value);
//   const v2 = parseInt(e.target.valor2.value);
//   const suma = v1 + v2;
//   alert("La suma es : " + suma);
// }

function App() {

  function cuenta(){
    setAgregarNumero(numero+1);
  }


  const [numero,setAgregarNumero] = useState(0);

  return (
  <div>
    <Contador valor={numero}></Contador>
    <br></br>
    <button onClick={cuenta}>+</button>
  </div>
  );
}

export default App;
