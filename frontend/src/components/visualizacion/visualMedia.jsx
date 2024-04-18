import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function VisualMedia() {
  const [VisualMedia, setVisualMedia] = useState([]);

  const getMedia = async () => {
    const response = await fetch("http://localhost:5001/api/media", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setVisualMedia(data);
    if (!response.ok) {
      console.log("No se pudo obtener la información de los directores");
    }
  };

  const eliminar = (id) => {
    fetch(`http://localhost:5001/api/media/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setVisualMedia(VisualMedia.filter((media) => media._id !== id));
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div>
      <h1>Visualizacion de Media</h1>
      <table className="director-table">
        <thead>
          <tr>
            <th>titulo</th>
            <th>sinopsis</th>
            <th>url</th>
            <th>imagenPelicula</th>
            <th>anioEstreno</th>
            <th>generoPrincipal</th>
            <th>directorPrincipal</th>
            <th>productora</th>
            <th>tipo</th>
            <th>creadoEn</th>
            <th>actualizadoEn</th>
          </tr>
        </thead>
        <tbody>
          {VisualMedia.map((media) => (
            <tr key={media._id}>
              <td>{media.title}</td>
              <td>{media.sinopsis}</td>
              <td>{media.url}</td>
              <td>{media.imagenPelicula}</td>
              <td>{media.anioEstreno}</td>
              <td>{media.generoPrincipal}</td>
              <td>{media.directorPrincipal}</td>
              <td>{media.productora}</td>
              <td>{media.tipo}</td>
              <td>{media.creadoEn}</td>
              <td>{media.actualizadoEn}</td>
              <td>{<Link to={`/editar/api/media/${media._id}`}>Editar</Link>}</td>
              <td>{<button type="button" onClick={() => eliminar(media._id)}>Borrar</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
