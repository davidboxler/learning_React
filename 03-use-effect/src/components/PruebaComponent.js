import React, { useEffect, useState } from "react";
import { AvisoComponent } from "./AvisoComponent";

export const PruebaComponent = () => {
  const [usuario, setUsuario] = useState("David boxler");
  const [fecha, setFecha] = useState("01-01-1998")
  const [contador, setContador] = useState(0)

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = e =>{
      setFecha(Date.now())
  }

  useEffect(() => {
      console.log("Has cargado el componente PruebaComponent!!")
  }, [])

  useEffect(() => {
    setContador(contador + 1)
    console.log("Has modificado el usuario!!" + contador)
  }, [fecha, usuario])

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>

      <strong>{usuario}</strong>
      <strong className={contador >= 10 ? "label label-green" : 'label'}>{fecha}</strong>

      <p>

        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambiar el nombre"
        />

        <button onClick={cambiarFecha}>Cambiar fecha</button>

      </p>
      { usuario == 'David' && <AvisoComponent />}
    </div>
  );
};
