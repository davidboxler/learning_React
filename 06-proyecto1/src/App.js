import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
  const [listadoState, setListado] = useState([]);
  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>
      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li><a href="/#"> Inicio </a></li>
          <li><a href="/#"> Peliculas </a></li>
          <li><a href="/#"> Blog </a></li>
          <li><a href="/#"> Contacto </a></li>
        </ul>
      </nav>
      {/* Contenido principal */}
      <section className="content">
         {/* Aqui esta el listado de peliculas */}
        <Listado listadoState={listadoState} setListado={setListado} />
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListado={setListado} />
        <Crear setListado={setListado} />
      </aside>

      {/* Pie de página */}
      <footer className="footer">&copy; Máster en JavaScript ES12yTypeScript</footer>
    </div>
  );
}

export default App;
