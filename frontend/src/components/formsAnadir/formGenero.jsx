import React from 'react';
import '../../styles/formStyles/formGenero.css'


export default function FormularioGenero(){
    return(
        <React.Fragment>
            <div className='divFormulario'>
               <h1>Modulo Genero</h1>
                <form action="/submit-form" method="post">
                    <label for="opciones">completa los siguientes campos:</label>
                    <select className='selectFormulario' name="opciones" id="opciones">
                        <option value="media">Nombre</option>
                        <option value="productora">Estado</option>
                        <option value="director">Fecha Creacion</option>
                        <option value="genero">Fecha Actualizacion</option>
                        <option value="tipo">Descripcion</option>
                    </select>
                </form>
            </div>
        </React.Fragment>
    )
}