import React from 'react'

function Navbar(){
  return (
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
  )
}
