import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function VisualTipo() {
  const [VisualTipo, setVisualTipo] = useState([]);

  const getTipos = async () => {
    const response = await fetch("http://localhost:5001/api/tipo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setVisualTipo(data);
    if (!response.ok) {
      console.log("no se pudo obtener la informacion de los Tipos");
    }
  };

  const eliminar =(id) => {
    fetch(`http://localhost:5001/api/tipo/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    setVisualTipo(VisualTipo.filter((tipo) => tipo._id !== id));
  };

  useEffect(() => {
    getTipos();
  }, []); 

  return (
    <div>
      <h1>Visualizacion de Tipo</h1>
      <table className="director-table">
        <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
        </thead>
        <tbody>
          {VisualTipo.map((tipo) => (
            <tr key={tipo._id}>
              <td>{tipo.nombre}</td>
              <td>{tipo.descripcion}</td>
              <td>{tipo.fechaCreacion}</td>
              <td>{tipo.fechaActualizacion}</td>
              <td>{<Link to={`/editar/api/tipo/${tipo._id}`}>Editar</Link>}</td>
              <td>
                {
                  <button type="button" onClick={() => eliminar(tipo._id)}>
                    Borrar
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
