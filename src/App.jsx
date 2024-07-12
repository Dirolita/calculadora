import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { evaluate } from 'mathjs';
import './App.css'

function App() {
  const [inputCalc , setInputCalc] = useState('');

  const addInput = val =>{
    setInputCalc(inputCalc + val)
  };
  const calcularResultaso =() =>{
    if (inputCalc){
      setInputCalc(evaluate(inputCalc))
    } else{
      alert("Ups Hubo un error, intentalo nuevamente")
    }
  }
  return (
    <>
      <div className='App'>
        <div className='contenedor-calc'>
          <Pantalla 
            input={inputCalc}
          />
          <div className='fila'>
            <Boton manejarClic ={addInput}>1</Boton>
            <Boton manejarClic ={addInput}>2</Boton>
            <Boton manejarClic ={addInput} >3</Boton>
            <Boton manejarClic ={addInput}>+</Boton>
 
          </div>
          <div className='fila'>
            <Boton manejarClic ={addInput} >4</Boton>
            <Boton manejarClic ={addInput}>5</Boton>
            <Boton manejarClic ={addInput}>6</Boton>
            <Boton manejarClic ={addInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic ={addInput}>7</Boton>
            <Boton manejarClic ={addInput}>8</Boton>
            <Boton manejarClic ={addInput}>9</Boton>
            <Boton manejarClic ={addInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic ={calcularResultaso}>=</Boton>
            <Boton manejarClic ={addInput}>0</Boton>
            <Boton manejarClic ={addInput}>.</Boton>
            <Boton manejarClic ={addInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear ={ ()=> setInputCalc('')}>
              Clear
            </BotonClear>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
