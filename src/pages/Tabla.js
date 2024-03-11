import React, { useState, useEffect } from "react";
import axios from "../services/Axios";
import {useNavigate} from "react-router-dom";
import { ImBin, ImPencil } from "react-icons/im";
import {toast} from 'react-toastify';


function Tabla() {
  const [datos, setDatos] = useState([]);

  const navigate=useNavigate();

  const buscar = async () => {
    const buscarDatos = await axios.get("/persona/buscarPersona");
    setDatos(buscarDatos.data);
    console.log(buscarDatos.data);
  };

  const Delete=async(id)=>{
    const del=await axios.delete(`/persona/eliminar/${id}`)
    .then(()=>{
      toast('Se eliminó correctamente', {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    });
    buscar();
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Correo</th>
            <th scope="col">Modificar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>

        {datos.map((datos, index) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{datos.nombre}</td>
                <td>{datos.apellidos}</td>
                <td>{datos.correo}</td>
                <td><button type="button" class="btn btn-info" onClick={()=>navigate(`/contenido/${datos._id}`)}><ImPencil/></button></td>
                <td><button type="button" class="btn btn-danger" onClick={()=>Delete(datos._id)}><ImBin/></button></td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Tabla;
