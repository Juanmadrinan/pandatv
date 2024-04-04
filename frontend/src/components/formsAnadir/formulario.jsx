import React from 'react';
import '../../styles/formStyles/formulario.css';
// import FormMedia from './forms/formMedia';

export default function Formulario(){
    return(
        <React.Fragment>
            <div className='divFormulario'>
               <h1>Anadir Modulo</h1>
                <form action="/submit-form" method="post">
                    <label for="opciones">Escoge el modulo:</label>
                    <select className='selectFormulario' name="opciones" id="opciones">
                        <option value="media">Media</option>
                        <option value="productora">Productora</option>
                        <option value="director">Director</option>
                        <option value="genero">Genero</option>
                        <option value="tipo">Tipo</option>
                    </select>
                </form>
            </div>
        </React.Fragment>
    )
}