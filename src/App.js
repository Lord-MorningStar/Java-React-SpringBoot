import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Dado from "./Dado";
import "./Dado.css"

// function Sumar(e) {
//   e.preventDefault();
//   const v1 = parseInt(e.target.valor1.value);
//   const v2 = parseInt(e.target.valor2.value);
//   const suma = v1 + v2;
//   alert("La suma es : " + suma);
// }

function App() {

  function numerosRandom(){
    return Math.trunc(Math.random() * 6) + 1;
  }
  function Tirar(){
    setNumRandom1(numerosRandom());
    setNumRandom2(numerosRandom());
    setNumRandom3(numerosRandom());
  }

  const [v1,setNumRandom1] = useState(0);
  const [v2,setNumRandom2] = useState(0);
  const [v3,setNumRandom3] = useState(0);

  return (
  <div>
    <Dado valor={v1}></Dado>
    <Dado valor={v2}></Dado>
    <Dado valor={v3}></Dado>
    <br></br>
    <button onClick={Tirar}>Tirar Dado</button>
  </div>
  );
}

export default App;
