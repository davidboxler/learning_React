import React from "react";

export const SegundoComponente = () => {
  // const libros = ["Harry Potter", "Clean Code", "1984"]
  const libros = [];

  return (
    <div className="segundo componente">
      <h2>Listado de libros</h2>
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={libro}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros actualmente</p>
      )}
    </div>
  );
};
