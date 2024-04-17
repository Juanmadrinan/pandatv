import React, {useState} from "react";

export default function FormularioMedia() {
  const [tittle, setTittle] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [url, setUrl] = useState("");
  const [imgMovie, setImgMovie] = useState("");
  const [premierYear, setPremierYear] = useState("");
  const [genreMain, setGenreMain] = useState("");
  const [directorMain, setDirectorMain] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [createdIn, setCreatedIn] = useState("");
  const [updatedIn, setUpdatedIn] = useState("");

  const handleTittle = (event) => {
    setTittle(event.target.value);
  };
  const handleSinopsis = (event) => {
    setSinopsis(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleImgMovie = (event) => {
    setImgMovie(event.target.value);
  };
  const handlePremierYear = (event) => {
    setPremierYear(event.target.value);
  };
  const handleGenreMain = (event) => {
    setGenreMain(event.target.value);
  };
  const handleDirectorMain = (event) => {
    setDirectorMain(event.target.value);
  };
  const handleProducer = (event) => {
    setProducer(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleCreatedIn = (event) => {
    setCreatedIn(event.target.value);
  };
  const handleUpdateIn = (event) => {
    setUpdatedIn(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();
    const data = {
      tittle : tittle,
      sinopsis: sinopsis,
      url: url,
      imgMovie: imgMovie,
      premierYear: premierYear,
      genreMain: genreMain,
      directorMain: directorMain,
      producer: producer,
      type: type,
      createdIn: createdIn,
      updatedIn: updatedIn,
    }
    
    const response = await fecth("http://localhost:5001/api/media", {
      method: "POST",
      headers:{
        "Content-Type": "aplication/json",
      },
      body: JSON.stringfy(data)
    });

    if (!response.ok){
      console.log("Tipo Creado con exito");
    }
    console.log(data);
  };


  return (
    <React.Fragment>
      <div className="divFormularioMedia">
        <h1>Modulo Media</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">completa los siguientes campos:</label>
          <input
            type="text"
            name="Tittle"
            placeholder="Ingresa el titulo"
            value={tittle}
            onChange={handleTittle}
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
            type="url"
            name="img-movie"
            placeholder="ingresar la url de la imagen"
            value={imgMovie}
            onChange={handleImgMovie}
          ></input>
          <input
            type="numb"
            name="premier-year"
            placeholder="ingresa el anio de estreno"
            value={premierYear}
            onChange={handlePremierYear}
          ></input>
          <input
            type="text"
            name="genre-main"
            placeholder="Ingresa el genero principal"
            value={genreMain}
            onChange={handleGenreMain}
          ></input>
          <input
            type="text"
            name="director-main"
            placeholder="ingresa el director de la peli"
            value={directorMain}
            onChange={handleDirectorMain}
          ></input>
          <input
            type="text"
            name="producer"
            placeholder="ingresa la productora de la peli"
            value={producer}
            onChange={handleProducer}
          ></input>
          <input
            type="text"
            name="type"
            placeholder="ingresa el tipo de pelicula"
            value={type}
            onChange={handleType}
          ></input>
          <input
            type="date"
            name="create-in"
            placeholder="ingresa la fecha de creacion de la peli"
            value={createdIn}
            onChange={handleCreatedIn}
          ></input>
          <input
            type="date"
            name="updated-in"
            placeholder="ingresa la fecha de actualizacion"
            value={updatedIn}
            onChange={handleUpdateIn}
          ></input>
          <button type="submit">Agregar</button>
        </form>
      </div>
      <div>
        <h1>Media</h1>
        <table>
          <thead>
            <tr>
              <th>titulo</th>
              <th>sinopsis</th>
              <th>url</th>
              <th>imgPelicula</th>
              <th>anioEstreno</th>
              <th>generoPrincipal</th>
              <th>directorPrincipal</th>
              <th>productor</th>
              <th>tipo</th>
              <th>creadoEn</th>
              <th>actualizadoEn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tittle}</td>
              <td>{sinopsis}</td>
              <td>{url}</td>
              <td>{imgMovie}</td>
              <td>{premierYear}</td>
              <td>{genreMain}</td>
              <td>{directorMain}</td>
              <td>{producer}</td>
              <td>{type}</td>
              <td>{createted}</td>
              <td>{updatedIn}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
