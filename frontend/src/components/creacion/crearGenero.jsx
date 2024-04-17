import React, {useState} from "react";

export default function FormularioGenero() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescription] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");
  const [estado, setEstado] = useState("");

  const handleName = (event) => {
    setNombre(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handlefechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handlefechaActualizacion = (event) => {
    setFechaActualizacion(event.target.value);
  };
  const handleestado = (event) => {
    setEstado(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = {
      nombre: nombre,
      descripcion: descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
      estado: estado,
    }

    const response = await fetch("http://localhost:5001/api/genre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if(!response.ok){
      console.log("Genero no fue creado con exito");
    }
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className="divFormularioGenero">
        <h1>Modulo Genero</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">completa los siguientes campos:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={handleName}
          ></input>
          <input
            type="text"
            name="descripcion"
            placeholder="ingresar descripcion"
            value={descripcion}
            onChange={handleDescription}
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
          <input
            type="text"
            name="estado"
            placeholder="ingresa el estado"
            value={estado}
            onChange={handleestado}
          ></input>
          <button type="submit">enviar Datos</button>
        </form>
      </div>
      <div>
        <h1>Genero</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nombre}</td>
              <td>{descripcion}</td>
              <td>{fechaCreacion}</td>
              <td>{fechaActualizacion}</td>
              <td>{estado}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
