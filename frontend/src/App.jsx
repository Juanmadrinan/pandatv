import { React } from "react";
import { NavLink, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import FormularioCrear from "./components/formularioCrear";
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
              <NavLink to={"/"} className="link-animation">
                Home
              </NavLink>
            </li>
            <li className="li">
              <NavLink to={'/crear'} className="link-animation">
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

      <Routes>
        <Route path="/" Component={SearchMovies}/>
        <Route path="/crear" Component={FormularioCrear}/>
      </Routes>
    </div>
  );
}
export default App;
