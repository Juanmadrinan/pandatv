import { React } from "react";
import { NavLink, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CrearDirector from "./components/creacion/crearDirector";
import "./styles/buscador.css";
import SearchMovies from "./components/searchMovies";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <ul className="ul">
          <li className="li">
              <NavLink to={'/api/director'} className="link-animation">
                Home
              </NavLink>
            </li>
            <li className="li">
              <NavLink to={'/api/director'} className="link-animation">
                Creación
              </NavLink>
            </li>
            <li className="li">
              <a href="#" className="link-animation">
                Visualización
              </a>
            </li>
          </ul>
        </nav>    
      </header>
      <SearchMovies />
      <Routes>
        <Route path="/api/director" Component={CrearDirector}/>  
      </Routes>
    </div>
  );
}
export default App;
