import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EdicionProductora() {
  const { id } = useParams();
  const [slogan, setSlogan] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");
  const [estado, setEstado] = useState("");

  const handleSlogan = (event) => {
    setSlogan(event.target.value);
  };
  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };
  const handleFechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handleFechaActualizacion = (event) => {
    setFechaActualizacion(event.target.value);
  };
  const handleEstado = (event) => {
    setEstado(event.target.value);
  };

  // En esta función manejamos el envío del formulario
  const onsubmit = async (event) => {
    event.preventDefault();
    // Creamos el objeto de datos que enviaremos al servidor
    const data = {
      slogan: slogan,
      nombre: nombre,
      descripcion: descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
      estado: estado,
    };

    const response = await fetch(`http://localhost:5001/api/productora/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
  };
  return (
    <React.Fragment>
      <div className="divformularioProductora">
        <h1>Edicion de Productora</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Por favor, llene todos los campos</label>
          <input
            type="text"
            name="Slogan"
            placeholder="Ingresa el Slogan"
            value={slogan}
            onChange={handleSlogan}
          ></input>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa el nombre"
            value={nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="description"
            placeholder="Ingresar descripcion"
            value={descripcion}
            onChange={handleDescripcion}
          ></input>
          <input
            type="text"
            name="state"
            placeholder="Ingresa el estado"
            value={estado}
            onChange={handleEstado}
          ></input>
          <input
            type="date"
            name="date-create"
            placeholder="Fecha de Creacion"
            value={fechaCreacion}
            onChange={handleFechaCreacion}
          ></input>
          <input
            type="date"
            name="date-update"
            placeholder="Fecha Actualizacion"
            value={fechaActualizacion}
            onChange={handleFechaActualizacion}
          ></input>
          <button type="submit">Enviar Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div className="table">
        <h1>Productora</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>Slogan</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Estado</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{slogan}</td>
              <td>{nombre}</td>
              <td>{descripcion}</td>
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
