import React from "react";
import "../styles/header.css";

function Header(){ 
    return(
       <div class="divHeader">
            <div class="divUl">
                <ul class="ulNavbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#estrenos">Estrenos</a></li>
                    <li><a href="#series">Series</a></li>
                    <li><a href="#animes">Animes</a></li>
                    <li><a href="#registro">Registro</a></li>
                    <li><a href="#buscarPelis">Buscar Pelis</a></li>
                </ul>
            </div>
       </div>
    )
}

export default Header;