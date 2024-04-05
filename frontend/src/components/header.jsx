import React from "react";
import "../styles/header.css";

export default function Header(){ 
    return(
        <header class="header">
            <nav class="nav">
                <ul class="ul">
                    <li class="li"><a href="#" class="item uno">Inicio</a></li>
                    <li class="li"><a href="#" class="item uno">Peliculas</a></li>
                    <li class="li"><a href="#" class="item uno">Series</a></li>
                </ul>
            </nav>
            <input type="text" class="search" id="search-input" placeholder="Buscar películas..."></input>
        </header>
    )
}
