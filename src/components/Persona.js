 function Persona(props){
   const {nombre,direccion, imagenes}=props;
   //console.log(props);
    return(
       
        <div class="col">
          <div class="card h-100">
            <img src={imagenes} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
     
    )
  }
  export default Persona;