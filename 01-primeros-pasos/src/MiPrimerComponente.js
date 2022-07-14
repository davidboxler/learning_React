//Importar modulos de react y dependencias
import React, { Fragment } from "react";

// Función del componente
const MiPrimerComponente = () => {
  let nombre = "David boxler";
  let web = "misitio.es";

  let usuario = {
    nombre: "david",
    apellidos: "boxler",
    web: "misitio.es",
  };
  return (
    <div className="mi-componente">
      <h2>Mi componente</h2>
      <p>MiPrimerComponente</p>
      <h3>Datos del usuario:</h3>
      <ul>
        <li>
          Nombre: <strong>{usuario.nombre}</strong>
        </li>
        <li>
          Apellido: <strong>{usuario.apellidos}</strong>
        </li>
        <li>
          Web: <strong>{usuario.web}</strong>
        </li>
      </ul>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </div>
  );
};

// Export
export default MiPrimerComponente;
