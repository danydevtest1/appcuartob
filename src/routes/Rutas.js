import {Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contenido from "../pages/Contenido";
import Prueba from "../pages/Prueba";

function Rutas(){
    return(
        <div>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contenido" element={<Contenido/>}/>
                <Route path="/prueba" element={<Prueba/>}/>
            </Routes>
        </Layout>
        </div>
    )
}
export default Rutas;