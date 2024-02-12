 function Persona(props){
   const {nombre,direccion}=props;
   //console.log(props);
    return(
      <div>
        <h1>Nombre: {nombre}</h1>
        <p>Direccion:{direccion}</p>
      </div>
    )
  }
  export default Persona;