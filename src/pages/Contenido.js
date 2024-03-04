import React, {useState} from 'react';
import Axios from '../services/Axios';

function Contenido() {

    const initialValues={
        nombre:"",
        apellidos:"",
        correo:""
}

    const [valores, setValores]=useState(initialValues);
    


    const onChange=(e)=>{
       const {name, value}=e.target;
       setValores({...valores, [name]:value})
    }

    
    const guardarInfo=(e)=>{
      Axios.post("/persona/guardarPersona",valores)
      .then(()=>{
        console.log("Registros guardados correctamente");
      });
      
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        guardarInfo();
    }


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Datos personales</h5>

          <form class="row g-3 needs-validation" 
          onSubmit={onSubmit} >
            <div className="col-md-12">
             
              <input
                type="text"
                name='nombre'
                className="form-control"
                id="validationCustom01"
                placeholder="Ingresa tu nombre"
                required
                value={valores.nombre}
                onChange={onChange}
                
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-12">
            
              <input
                type="text"
                name='apellidos'
                class="form-control"
                id="validationCustom02"
                placeholder="Apellidos"
                value={valores.apellidos}
                onChange={onChange}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-12">
              
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  name='correo'
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Ingresa correo"
                  value={valores.correo}
                  onChange={onChange}
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contenido;
