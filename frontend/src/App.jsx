import { React } from "react";
import { NavLink, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import FormularioCrear from "./components/formularioCrear";
import FormularioVisualizar from "./components/formularioVisualizar";
import FormularioEditar from "./components/formularioEditar";
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
              <NavLink to={"/crear"} className="link-animation">
                Creación
              </NavLink>
            </li>
            <li className="li">
              <a href="/visualizacion" className="link-animation">
                Visualización
              </a>
            </li>
          </ul>
        </nav>
            
      </header>
      <Routes>
        <Route path="/" Component={SearchMovies} />
        <Route path="/crear" Component={FormularioCrear} />
        <Route path="/visualizacion" Component={FormularioVisualizar} />
        <Route
          path={"/editar/api/director/:id"}
          element={<FormularioEditar edicion="director" />}
        />
        <Route
          path={"/editar/api/genre/:id"}
          element={<FormularioEditar edicion="genero" />}
        />
        <Route
          path={"/editar/api/media/:id"}
          element={<FormularioEditar edicion="media" />}
        />
        <Route
          path={"/editar/api/productora/:id"}
          element={<FormularioEditar edicion="productora" />}
        />
        <Route
          path={"/editar/api/tipo/:id"}
          element={<FormularioEditar edicion="tipo" />}
        />
      </Routes>
    </div>
  );
}

export default App;
