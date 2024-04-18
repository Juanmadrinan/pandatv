import React, {useState} from "react";

export default function FormularioProductora() {
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

    // Uso el try-catch para capturar los errores
    try {
      // Enviamos las solicitudes al servidor utilizando fetch
      const response = await fetch('http://localhost:5001/api/productora', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Convertimos el objeto de datos a formato JSON
        body: JSON.stringify(data),
      });

      if(!response.ok) {
        console.log('Productora no ha sido creado');
      };
    } catch (error) {
      console.log('Error en la solicitud: ' + error);
    }
  };

  return (
    <React.Fragment>
      <div className="divformularioProductora">
        <h1>Modulo Productora</h1>
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
          <input
            type="text"
            name="state"
            placeholder="Ingresa el estado"
            value={estado}
            onChange={handleEstado}
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
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{slogan}</td>
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
