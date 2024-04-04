import React from 'react';
import '../../styles/formStyles/formProductora.css'


export default function FormularioProductora(){
    return(
        <React.Fragment>
            <div className='divFormulario'>
               <h1>Modulo Productora</h1>
                <form action="/submit-form" method="post">
                    <label for="opciones">completa los siguientes campos:</label>
                    <select className='selectFormulario' name="opciones" id="opciones">
                        <option value="media">Nombre</option>
                        <option value="productora">Estado</option>
                        <option value="director">Fecha de Creacion</option>
                        <option value="genero">Fecha de Actualizacion</option>
                        <option value="tipo">Slogan</option>
                        <option value="tipo">Descripcion</option>
                    </select>
                </form>
            </div>
        </React.Fragment>
    )
}