import React from "react";

export default function FormularioTipo() {
  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");
  const [dateCreate, setDateCreate] = useState("");
  const [dateUpdate, setDateUpdate] = useState("");

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

  const onsubmit = (event) => {
    event.preventDefault();
    console.log(nombre, description, dateCreate, dateUpdate);
  };
  
  return (
    <React.Fragment>
      <div className="divFormularioTipo">
        <h1>Modulo Tipo</h1>
        <form method="post" onSubmit={onSubmit}>
          <label for="opciones">Completa los siguientes campos:</label>
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
        </form>
      </div>
      <div>
        <h1>Director</h1>
        <table>
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
              <td>{dateCreate}</td>
              <td>{dateUpdate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
