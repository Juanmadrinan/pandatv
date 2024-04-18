import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function EdicionDirector() {
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [estado, setEstado] = useState("");
    const [fechaCreacion, setFechaCreacion] = useState("");
    const [fechaActualizacion, setFechaActualizacion] = useState("");
  
    const handleName = (event) => {
      setNombre(event.target.value);
    };
    const handleState = (event) => {
      setEstado(event.target.value);
    };
    const handlefechaCreacion = (event) => {
      setFechaCreacion(event.target.value);
    };
    const handlefechaActualizacion = (event) => {
      setFechaActualizacion(event.target.value);
    };
  
  
    const onsubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        nombre: nombre,
        estado: estado,
        fechaCreacion: fechaCreacion,
        fechaActualizacion: fechaActualizacion,
      };
  
      const response = await fetch(`http://localhost:5001/api/director/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        console.log("Director no fue actualizado con exito");
      }
    };
  
    return (
      <React.Fragment>
        <div className="divformularioDirector">
          <h1>Modulo Director</h1>
          <form method="post" onSubmit={onsubmit}>
            <label for="opciones">Por favor, llene todos los campos</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa el nombre"
              value={nombre}
              onChange={handleName}
            ></input>
            <input
              type="text"
              name="estado"
              placeholder="ingresar el estado"
              value={estado}
              onChange={handleState}
            ></input>
            <input
              type="date"
              name="date-create"
              placeholder="Fecha de Creacion"
              value={fechaCreacion}
              onChange={handlefechaCreacion}
            ></input>
            <input
              type="date"
              name="date-update"
              placeholder="Fecha Actualizacion"
              value={fechaActualizacion}
              onChange={handlefechaActualizacion}
            ></input>
            <button type="submit">Enviar Datos</button>
          </form>
        </div>
        <div className="line"></div>
        <div>
          <h1>Director</h1>
          <table className="container-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Fecha de Creacion</th>
                <th>Fecha de Actualizacion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nombre}</td>
                <td>{estado}</td>
                <td>{fechaCreacion}</td>
                <td>{fechaActualizacion}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
}