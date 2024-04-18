import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function VisualDirector() {
  const [VisualDirector, setVisualDirector] = useState([]);

  const getDirectores = async () => {
    const response = await fetch("http://localhost:5001/api/director", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setVisualDirector(data);
    if (!response.ok) {
      console.log("No se pudo obtener la información de los directores");
    }
  };

  const eliminar = (id) => {
    fetch(`http://localhost:5001/api/director/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setVisualDirector(VisualDirector.filter((director) => director._id !== id));
  };

  useEffect(() => {
    getDirectores();
  }, []);

  return (
    <div>
      <h1>Visualización de Directores</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Fecha de Creación</th>
            <th>Fecha de Actualización</th>
          </tr>
        </thead>
        <tbody>
          {VisualDirector.map((director) => (
            <tr key={director._id}>
              <td>{director.nombre}</td>
              <td>{director.estado}</td>
              <td>{director.fechaCreacion}</td>
              <td>{director.fechaActualizacion}</td>
              <td>{<Link to={`/editar/api/director/${director._id}`}>Editar</Link>}</td>
              <td>
                {
                  <button type="button" onClick={() => eliminar(director._id)}>
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
