import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EdicionMedia() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [url, setUrl] = useState("");
  const [imagenPelicula, setImagenPelicula] = useState("");
  const [anioEstreno, setAnioEstreno] = useState("");
  const [generoPrincipal, setGeneroPrincipal] = useState("");
  const [directorPrincipal, setDirectorPrincipal] = useState("");
  const [productora, setProductora] = useState("");
  const [tipo, setTipo] = useState("");
  const [creadoEn, setCreadoEn] = useState("");
  const [actualizadoEn, setActualizadoEn] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSinopsis = (event) => {
    setSinopsis(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleImagenPelicula = (event) => {
    setImagenPelicula(event.target.value);
  };
  const handleAnioEstreno = (event) => {
    setAnioEstreno(event.target.value);
  };
  const handleGeneroPrincipal = (event) => {
    setGeneroPrincipal(event.target.value);
  };
  const handleDirectorPrincipal = (event) => {
    setDirectorPrincipal(event.target.value);
  };
  const handleProductora = (event) => {
    setProductora(event.target.value);
  };
  const handleTipo = (event) => {
    setTipo(event.target.value);
  };
  const handleCreadoEn = (event) => {
    setCreadoEn(event.target.value);
  };
  const handleActualizadoEn = (event) => {
    setActualizadoEn(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: title,
      sinopsis: sinopsis,
      url: url,
      imagenPelicula: imagenPelicula,
      anioEstreno: anioEstreno,
      generoPrincipal: generoPrincipal,
      directorPrincipal: directorPrincipal,
      productora: productora,
      tipo: tipo,
      creadoEn: creadoEn,
      actualizadoEn: actualizadoEn,
    };

    const response = await fetch(`http://localhost:5001/api/media/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log("Tipo Creado con exito");
    }
  };

  return (
    <React.Fragment>
      <div className="divFormularioMedia">
        <h1>Edicion de Media</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Por favor, llene todos los campos</label>
          <input
            type="text"
            name="title"
            placeholder="Ingresa el titulo"
            value={title}
            onChange={handleTitle}
          ></input>
          <input
            type="text"
            name="sinopsis"
            placeholder="ingresar descripcion"
            value={sinopsis}
            onChange={handleSinopsis}
          ></input>
          <input
            type="text"
            name="url"
            placeholder="ingresa el link de la peli"
            value={url}
            onChange={handleUrl}
          ></input>
          <input
            type="text"
            name="imagenPelicula"
            placeholder="ingresar la url de la imagen"
            value={imagenPelicula}
            onChange={handleImagenPelicula}
          ></input>
          <input
            type="text"
            name="anioEstreno"
            placeholder="ingresa el anio de estreno"
            value={anioEstreno}
            onChange={handleAnioEstreno}
          ></input>
          <input
            type="text"
            name="generoPrincipal"
            placeholder="Ingresa el genero principal"
            value={generoPrincipal}
            onChange={handleGeneroPrincipal}
          ></input>
          <input
            type="text"
            name="directorPrincipal"
            placeholder="ingresa el director de la peli"
            value={directorPrincipal}
            onChange={handleDirectorPrincipal}
          ></input>
          <input
            type="text"
            name="productora"
            placeholder="ingresa la productora de la peli"
            value={productora}
            onChange={handleProductora}
          ></input>
          <input
            type="text"
            name="tipo"
            placeholder="ingresa el tipo de pelicula"
            value={tipo}
            onChange={handleTipo}
          ></input>
          <input
            type="date"
            name="creado-En"
            placeholder="ingresa la fecha de creacion de la peli"
            value={creadoEn}
            onChange={handleCreadoEn}
          ></input>
          <input
            type="date"
            name="actualizado-En"
            placeholder="ingresa la fecha de actualizacion"
            value={actualizadoEn}
            onChange={handleActualizadoEn}
          ></input>
          <button type="submit">Agregar</button>
        </form>
      </div>
      <div className="line">
        <table className="container-table">
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
            <tr>
              <td>{title}</td>
              <td>{sinopsis}</td>
              <td>{url}</td>
              <td>{imagenPelicula}</td>
              <td>{anioEstreno}</td>
              <td>{generoPrincipal}</td>
              <td>{directorPrincipal}</td>
              <td>{productora}</td>
              <td>{tipo}</td>
              <td>{creadoEn}</td>
              <td>{actualizadoEn}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
