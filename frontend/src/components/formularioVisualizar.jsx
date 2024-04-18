import React, { useState } from "react";
import VisualDirector from "./visualizacion/visualDirector";
import VisualGenero from "./visualizacion/visualGenero";
import VisualMedia from "./visualizacion/visualMedia"
;import VisualProductora from "./visualizacion/visualProductora";
import VisualTipo from "./visualizacion/visualTipo";
import '../styles/formulario.css';


export default function FormularioVisualizar() {
  const [formularioActual, setFormularioActual] = useState("");

  const handleSelect = (e) => {
    setFormularioActual(e.target.value);
  };

  let formulario;
  switch (formularioActual) {
    case "director":
      formulario = <VisualDirector />;
      break;
    case "genero":
      formulario = <VisualGenero />;
      break;
    case "media":
      formulario = <VisualMedia />;
      break;
    case "productora":
      formulario = <VisualProductora />;
      break;
    case "tipo":
      formulario = <VisualTipo />;
      break;
    default:
      formulario = null;
  }

  return (
    <>
      <div className="divFormulario">
        <h1>Visualización</h1>
          <label for="opciones">Escoge el modulo</label>
          <select value={formularioActual} onChange={handleSelect}>
            <option value="ninguno">No seleccionar</option>
            <option value="director">Director</option>
            <option value="genero">Genero</option>
            <option value="media">Media</option>
            <option value="productora">Productora</option>
            <option value="tipo">Tipo</option>
          </select>
        {formulario}
      </div>
    </>
  );
}
