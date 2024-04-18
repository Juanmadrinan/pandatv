import React from "react";
import EdicionDirector from "./edicion/edicionDirector";
import EdicionGenero from "./edicion/edicionGenero";
import EdicionMedia from "./edicion/edicionMedia";
import EdicionProductora from "./edicion/edicionProductora";
import EdicionTipo from "./edicion/edicionTipo";


export default function FormularioEdicion({ edicion }) {
  let formulario;

  const edicionFormulario = (edicion) => {
    switch (edicion) {
      case "director":
        return <EdicionDirector />;
      case "genero":
        return <EdicionGenero />;
      case "media":
        return <EdicionMedia />;
      case "productora":
        return <EdicionProductora />;
      case "tipo":
        return <EdicionTipo />;
      default:
        formulario = null;
    }
  };
  return (
    <div className="divFormulario">
      <h1>Edición</h1>
      {edicionFormulario(edicion)}
    </div>
  );
}
