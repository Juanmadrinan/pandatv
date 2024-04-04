import React from 'react';
import '../../styles/formStyles/formTipo.css'


export default function FormularioTipo(){
    return(
        <React.Fragment>
            <div className='divFormulario'>
               <h1>Modulo Tipo</h1>
                <form action="/submit-form" method="post">
                    <label for="opciones">completa los siguientes campos:</label>
                    <select className='selectFormulario' name="opciones" id="opciones">
                        <option value="media">Nombre</option>
                        <option value="productora">Descripcion</option>
                        <option value="director">Fecha de Creacion</option>
                        <option value="genero">Fecha Actualizacion</option>
                    </select>
                </form>
            </div>
        </React.Fragment>
    )
}