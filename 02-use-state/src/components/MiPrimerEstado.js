import React, { useState } from "react";

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState("Victor Robles");

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
    console.log(e.target)
  };

  return (
    <div>
      <h3>Componente: Mi Primer Estado</h3>
      <strong className="label">{nombre}</strong>
      &nbsp;
      <button onClick={ e => cambiarNombre(e, "David") }>Cambiar nombre a david</button>
      &nbsp;
      <input type='text' onChange={ e => cambiarNombre(e, e.target.value)} placeholder="Cambiar de nombre"/> 
    </div>
  );
};
