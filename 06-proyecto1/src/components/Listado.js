import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

const Listado = ({ listadoState, setListado }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("Componente listado peliculas cargado");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListado(peliculas);

    return peliculas;
  };

  const borrarPeliculas = (id) => {
    // Conseguir peliculas almacenadas
    let pelis_almacendas = conseguirPeliculas();
    console.log(pelis_almacendas);
    // Filtrar peliculas para que eleimine del array
    let nuevo_array_peliculas = pelis_almacendas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    // Actualizar estado del listado
    setListado(nuevo_array_peliculas);
    // Actualizar los datos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.description}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>
                Editar
              </button>
              {/* aparece el formulario para editar */}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListado={setListado}
                />
              )}
              <button
                className="delete"
                onClick={() => borrarPeliculas(peli.id)}
              >
                Borrar
              </button>
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas disponibles</h2>
      )}
    </>
  );
};

export default Listado;
