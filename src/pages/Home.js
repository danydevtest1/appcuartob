import React, {useState} from 'react'
import Persona from '../components/Persona'
import {listPersonas} from "../datos/ListaDatos";
export default function Home() {
   
    const [datos, setDatos] = useState(listPersonas);
    //console.log(datos);
  return (
    <div >
        {
            datos.map(
                (personas)=>
                <Persona 
                key={personas.id}
                nombre={personas.nombre} 
                direccion={personas.direccion}

                />)
        }
      
      
    </div>
  )
}
