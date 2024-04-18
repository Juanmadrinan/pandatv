import React, {useState} from "react";

export default function FormularioTipo() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleName = (event) => {
    setNombre(event.target.value);
  };
  const handleDescription = (event) => {
    setDescripcion(event.target.value);
  };
  const handleDateCreate = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handleDateUpdate = (event) => {
    setFechaActualizacion(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = {
      nombre: nombre,
      descripcion: descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
    }

    const response = await fetch('http://localhost:5001/api/tipo', {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(!response.ok) {
      console.log('No fue creado un tipo')
    }

  };
  
  return (
    <React.Fragment>
      <div className="divFormularioTipo">
        <h1>Modulo Tipo</h1>
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
            name="descripcion"
            placeholder="Ingresar descripcion"
            value={descripcion}
            onChange={handleDescription}
          ></input>
          <input
            type="date"
            name="date-create"
            placeholder="Fecha de Creacion"
            value={fechaCreacion}
            onChange={handleDateCreate}
          ></input>
          <input
            type="date"
            name="date-update"
            placeholder="Fecha Actualizacion"
            value={fechaActualizacion}
            onChange={handleDateUpdate}
          ></input>
          <button type="submit">Enviar Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h1>tipo</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>descripcion</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nombre}</td>
              <td>{descripcion}</td>
              <td>{fechaCreacion}</td>
              <td>{fechaActualizacion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
