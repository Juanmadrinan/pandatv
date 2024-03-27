import React from 'react';
import '../styles/formulario.css';

function Formulario(){
    return(
        <React.Fragment>
            <div className='divFormulario'>
                <form action="/submit-form" method="post">
                    <label for="opciones">Escoge el modulo:</label>
                    <select name="opciones" id="opciones">
                        <option value="media">Media</option>
                        <option value="productora">Productora</option>
                        <option value="director">director</option>
                        <option value="genero">Genero</option>
                        <option value="tipo">Tipo</option>
                    </select>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Formulario;