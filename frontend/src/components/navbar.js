import React from 'react'
import '../styles/navbar.css'
import Logo from "../img/logo.png"

function Navbar() {
  return (
    <div class="divNavbar">
        <nav>
            <div class="divLogo">
                <img src={Logo} alt="logo"></img>
            </div>
           
            <div>
                <div>
                    <label for="Género">Generos:</label>
                        <select name="Generos" id="Generos">
                            <option value="drama">Drama</option>
                            <option value="terror">Terror</option>
                            <option value="comedia">Comedia</option>
                            <option value="romance">Romance</option>
                            <option value="aventura">Aventura</option>
                            <option value="cienciaFiccion">Ciencia Ficcion</option>
                            <option value="animacion">Animacion</option>
                            <option value="accion">Accion</option>
                            <option value="crimen">Crimen</option>
                            <option value="familia">Familia</option>
                            <option value="musica">Musica</option>
                            <option value="misterio">Misterio</option>
                            <option value="suspenso">Suspenso</option>
                            <option value="documental">Documental</option>
                            <option value="fantasia">Fantasia</option>
                        </select>
                </div>

                <div>
                <label for="localMovies">Peliculas Locales:</label>
                    <select name="localMovies" id="localMovies">
                        <option value="ultimas">Ultimas</option>
                        <option value="mejores">Mejores</option>
                        <option value="proximas">Proximas</option>
                        <option value="populares">Populares</option>          
                    </select>
                </div>
               
                <div>
                    <label for="series">Series:</label>
                    <select name="Series" id="Series">
                        <option value="popular">Popular</option>
                        <option value="tvShows">TV Shows</option>
                        <option value="mejores">Mejores</option>
                        <option value="ultimas">Ultimas</option>  
                    </select>
                </div>
            </div>
            
        </nav>
    </div> 
  )
}

export default Navbar;