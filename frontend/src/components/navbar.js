import React from 'react'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div class="divNavbar">
        <nav>
            <header>
                <h1>PandaTv</h1>
                <p>PandaTv la mejor plataforma online para ver peliculas Gratis</p>
            </header>
            <ul>
                <a href="#home">Home</a>
                <a href="#estrenos">Estrenos</a>
                <a href="#series">Series</a>
                <a href="#animes">Animes</a>
                <a href="#registro">Registro</a>
                <a href="#buscarPelis">Buscar Pelis</a>
            </ul>\

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

            <label for="localMovies">Peliculas Locales:</label>
                <select name="localMovies" id="localMovies">
                    <option value="ultimas">Ultimas</option>
                    <option value="mejores">Mejores</option>
                    <option value="proximas">Proximas</option>
                    <option value="populares">Populares</option>          
                </select>
               
            <label for="series">Series:</label>
                <select name="Series" id="Series">
                    <option value="popular">Popular</option>
                    <option value="tvShows">TV Shows</option>
                    <option value="mejores">Mejores</option>
                    <option value="ultimas">Ultimas</option>  
                </select>
        </nav>
    </div> 
  )
}

export default Navbar;