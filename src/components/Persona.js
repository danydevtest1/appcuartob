 import {useNavigate} from 'react-router-dom';


 function Persona(props){
   const {nombre,direccion, imagenes}=props;
   //console.log(props);
   
   const navigate = useNavigate();
   const Mensaje=()=>{
    navigate('/prueba')
   }
    return(
       
        <div class="col">
          <div class="card h-100">
            <img src={imagenes} 
            class="card-img-top" alt="..."
            width={40}
            height={250}
            />
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">
              <button 
              type="button" 
              class="btn btn-info"
              onClick={Mensaje}
              >Seguir leyendo...</button>
              </small>
            </div>
          </div>
        </div>
     
    )
  }
  export default Persona;