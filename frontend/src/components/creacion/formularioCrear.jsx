import React, { useState } from 'react';
import FormularioTipo from './formTipo';
import FormularioMedia from './formMedia';
import FormularioProductora from './formProductora';
import FormularioDirector from './formDirector';
import FormularioGenero from './formGenero';

import '../../styles/formStyles/formulario.css';

export default function Formulario({title}){
    const [formularioActual, setFormularioActual] = useState('');

    const handleSelect = (e) => {
        setFormularioActual(e.target.value);
    }

    let form;
    switch (formularioActual) {
        case 'Tipo':
            form = <FormularioTipo/>
            break;
            
        case 'Media':
            form = <FormularioMedia/>
            break;

        case 'Productora':
            form = <FormularioProductora/>
            break;

        case 'Director':
            form = <FormularioDirector/>
            break;

        case 'Genero':
            form = <FormularioGenero/>
            break;

        default:
            form = null;
    }
             
    return (
        <React.Fragment>
            <div className='divFormulario'>
               <h1>{title}</h1>
                <form action="/submit-form" method="post">
                    <label for="opciones">Escoge el modulo:</label>
                    <select className='selectFormulario' name="opciones" id="opciones" value={formularioActual} onChange={handleSelect}>
                        <option value="">No seleccionar</option>
                        <option value="Media">Media</option>
                        <option value="Productora">Productora</option>
                        <option value="Director">Director</option>
                        <option value="Genero">Genero</option>
                        <option value="Tipo">Tipo</option>
                    </select>
                </form>
                {form}
            </div>
        </React.Fragment>
    )
}