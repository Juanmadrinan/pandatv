import React from 'react';
import '../../styles/formStyles/formMedia.css'


export default function FormularioMedia(){
    return(
        <React.Fragment>
            <div className='divFormulario'>
               <h1>Modulo Media</h1>
                <form action="/submit-form" method="post">
                    <label for="opciones">completa los siguientes campos:</label>
                    <select className='selectFormulario' name="opciones" id="opciones">
                        <option value="media">Titulo</option>
                        <option value="productora">Sinopsis</option>
                        <option value="director">Url</option>
                        <option value="genero">imagen Principal</option>
                        <option value="tipo">año de estreno</option>
                        <option value="tipo">Genero Principal</option>
                        <option value="tipo">Director Principal</option>
                        <option value="tipo">Productora</option>
                        <option value="tipo">Tipo</option>
                        <option value="tipo">Creado en</option>
                        <option value="tipo">actualizado en</option>
                    </select>
                </form>
            </div>
        </React.Fragment>
    )
}