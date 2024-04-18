import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function VisualProductora() {
  const [VisualProductora, setVisualProductora] = useState([]);

  const getProductora = async () => {
      const response = await fetch('http://localhost:5001/api/productora', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const data = await response.json();
      setVisualProductora(data);
      if(!response.ok) {
          console.log('No se pudo obtener la información de los directores');
      }
  }

  const eliminar = (id) =>{
      fetch(`http://localhost:5001/api/productora/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      setVisualProductora(VisualProductora.filter((productora) => productora._id !== id));
  }

  useEffect(() => {
    getProductora();
  }, []);


  return (
    <div>
    <h1>Visualización de Productora</h1>
    <table className="director-table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Slogan</th>
                <th>Descripcion</th>
                <th>Fecha de Creación</th>
                <th>Fecha de Actualización</th>
            </tr>
        </thead>
        <tbody>
            {VisualProductora.map((productora) => (
                <tr key={productora._id}>
                    <td>{productora.nombre}</td>
                    <td>{productora.estado}</td>
                    <td>{productora.slogan}</td>
                    <td>{productora.descripcion}</td>
                    <td>{productora.fechaCreacion}</td>
                    <td>{productora.fechaActualizacion}</td>
                    <td>{<Link to={`/editar/api/productora/${productora._id}`}>Editar</Link>}</td>
                    <td>{<button type='button' onClick={() => eliminar(productora._id)}>Borrar</button>}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
}
