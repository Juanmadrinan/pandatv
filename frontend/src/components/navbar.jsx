import React from 'react'
import { useState } from 'react'
import Logo from "../assets/images/logo.png"
import '../styles/navbar.css'
import Formulario from './formsAnadir/formulario'

export default function Navbar() {
    const [componenteActual, setComponenteActual] = useState(null);

    const mostrarFormulario = (formulario) => {
        setComponenteActual(formulario);
    }

  return (
    <div class="divNavbar">
        <nav class="navBar">
            <div class="divLogo">
                <img src={Logo} alt="logo"></img>
            </div>
            <div>
                <div>
                    <details class="details" onmouseover="this.open=true" onmouseout="this.open=false">
                        <summary class="summary">
                            <a class="tituloLink" href="/">Administrador</a>
                        </summary>
                        <ul class="cajaUlAdministrador">
                            <li>                   
                                <a onClick={() => mostrarFormulario('Anadir')}>
                                    Anadir
                                </a>          
                            </li>
                            <li>
                                <a onClick={() => mostrarFormulario('Actualizar')}>
                                    Actualizar
                                </a>
                            </li>
                            <li>
                                <a onClick={() => mostrarFormulario('Borrar')}>
                                    Borrar
                                </a>
                            </li>
                        </ul>
                        {componenteActual === 'Anadir' && <Formulario title="Añadir" />}
                        {componenteActual === 'Actualizar' && <Formulario title="Actualizar" />}
                        {componenteActual === 'Borrar' && <Formulario title="Borrar" />}

                    </details>
                </div>
                <div>
                    <details class="details" onmouseover="this.open=true" onmouseout="this.open=false">
                        <summary class="summary">
                            <a class="tituloLink" href="/">Genero</a>
                        </summary>
                        <ul class="cajaUl">
                            <li>
                                <a href="/" class="">Drama</a>
                            </li>
                            <li>
                                <a href="/" class="">Terror</a>
                            </li>
                            <li>
                                <a href="/" class="">Comedia</a>
                            </li>
                            <li>
                                <a href="/" class="">Romance</a>
                            </li>
                            <li>
                                <a href="/" class="">Aventura</a>
                            </li>
                            <li>
                                <a href="/" class="">Ciencia Ficcion</a>
                            </li>
                            <li>
                                <a href="/" class="">Animacion</a>
                            </li>
                            <li>
                                <a href="/" class="">Accion</a>
                            </li>
                            <li>
                                <a href="/" class="">Crimen</a>
                            </li>
                            <li>
                                <a href="/" class="">Familia</a>
                            </li>
                            <li>
                                <a href="/" class="">Musica</a>
                            </li>
                            <li>
                                <a href="/" class="">Misterio</a>
                            </li>
                            <li>
                                <a href="/" class="">Suspenso</a>
                            </li>
                            <li>
                                <a href="/" class="">Documental</a>
                            </li>
                            <li>
                                <a href="/" class="">Fantasia</a>
                            </li>
                        </ul>
                    </details>
                </div>
                <div>
                    <details class="details" onmouseover="this.open=true" onmouseout="this.open=false">
                        <summary class="summary">
                            <a class="tituloLink" href="/">Series</a>
                        </summary>
                        <ul class="cajaUl">
                            <li>
                                <a href="/" class="">Popular</a>
                            </li>
                            <li>
                                <a href="/" class="">TV Shows</a>
                            </li>
                            <li>
                                <a href="/" class="">Mejores</a>
                            </li>
                            <li>
                                <a href="/" class="">Ultimas</a>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
        </nav>
    </div> 
  )
}