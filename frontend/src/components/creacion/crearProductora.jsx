import React from "react";

export default function FormularioProductora() {
  const [slogan, setSlogan] = useState("");
  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");
  const [dateCreate, setDateCreate] = useState("");
  const [dateUpdate, setDateUpdate] = useState("");
  const [State, setState] = useState("");

  const handleSlogan = (event) => {
    setSlogan(event.target.value);
  };
  const handleName = (event) => {
    setNombre(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleDateCreate = (event) => {
    setDateCreate(event.target.value);
  };
  const handleDateUpdate = (event) => {
    setDateUpdate(event.target.value);
  };
  const handleState = (event) => {
    setState(event.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    console.log(slogan, nombre, description, dateCreate, dateUpdate, State);
  };

  return (
    <React.Fragment>
      <div className="divFormularioProductora">
        <h1>Modulo Productora</h1>
        <form method="post" onSubmit={onSubmit}>
          <label for="opciones">completa los siguientes campos:</label>
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
            onChange={handleName}
          ></input>
          <input
            type="text"
            name="description"
            placeholder="ingresar descripcion"
            value={description}
            onChange={handleDescription}
          ></input>
          <input
            type="date"
            name="date-create"
            placeholder="Fecha de Creacion"
            value={dateCreate}
            onChange={handleDateCreate}
          ></input>
          <input
            type="date"
            name="date-update"
            placeholder="Fecha Actualizacion"
            value={dateUpdate}
            onChange={handleDateUpdate}
          ></input>
          <input
            type="text"
            name="state"
            placeholder="ingresa el estado"
            value={State}
            onChange={State}
          ></input>
          <button type="submit">enviar Datos</button>
        </form>
      </div>
      <div>
        <h1>Productora</h1>
        <table>
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
              <td>{description}</td>
              <td>{dateCreate}</td>
              <td>{dateUpdate}</td>
              <td>{State}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
