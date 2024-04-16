import React, { useEffect, useState } from "react";

export default function FormularioDirector() {
    
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [dateCreate, setDateCreate] = useState("");
  const [dateUpdate, setDateUpdate] = useState("");

  const handleName = (event) => {
    setNombre(event.target.value);
  };
  const handleState = (event) => {
    setEstado(event.target.value);
  };
  const handleDateCreate = (event) => {
    setDateCreate(event.target.value);
  };
  const handleDateUpdate =(event) => {
    setDateUpdate(event.target.value);
  };

    useEffect(() => {
        

  }, []);
  
  const onsubmit = (event) => {
    event.preventDefault();
    console.log(nombre, estado, dateCreate, dateUpdate);
    const fetchData = async () => {
      const res = await axios.get('http://localhost:/api/director5001');
      console.log(res);
    };
    fetchData();

  };

  return (
    <React.Fragment>
      <div className="divformularioDirector">
        <h1>Modulo Director</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">completa los siguientes campos:</label>
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
          <button type="submit">Enviar Datos</button>
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
