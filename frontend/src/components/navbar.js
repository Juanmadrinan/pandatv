import React from "react";
import logo  from "../img/pandatv.png";
import "../styles/navbar.css";

function Navbar() {
    return(
        <div class="principal">
            <nav class="navbar">
                <ul>
                    <li class="list-logo">
                        <img src={logo} alt="logo pandatv" class="logo"></img>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/generos">Generos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;