import React, {useState} from 'react'
import Persona from '../components/Persona'
import {listPersonas} from "../datos/ListaDatos";
export default function Home() {
   
    const [datos, setDatos] = useState(listPersonas);
    //console.log(datos);
  return (
    <div className=''>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 p-4">
        {
            datos.map(
                (personas)=>
                <Persona 
                key={personas.id}
                nombre={personas.nombre} 
                direccion={personas.direccion}
                imagenes={personas.image}

                />)
        }
      
      </div>
    </div>
  )
}
