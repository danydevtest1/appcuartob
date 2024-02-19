import React, {useState} from 'react'

export default function Prueba() {
    const [aumentar, setAumentar] = useState(0);

    const AumentarValor=()=>{
       setAumentar(aumentar+1);
    }
    const DecrementarValor=()=>{
        setAumentar(aumentar-1);
     }
  return (
    <div>
      <h1>  {aumentar}</h1>
      <br/>
      <button onClick={AumentarValor}>Aumentar</button>
      <button onClick={DecrementarValor}>Disminuir</button>
    </div>
    
  )
}
