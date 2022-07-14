import React, { useState } from "react";
import { guardarLocarStorage } from "../helpers/GuardarLocalStorage";

export const Crear = ({ setListado }) => {
  const tituloComponent = "Añadir pelicula";
  const [peli, setPelicula] = useState({
    titulo: "",
    description: "",
  });

  const { titulo, description } = peli;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let description = target.description.value;

    //Crear objeto pelicula
    let pelicula = {
      id: new Date().getTime(),
      titulo,
      description,
    };

    //Guardar estado
    setPelicula(pelicula);

    //Acutalizar el listado principal
    setListado((elementos) => {
      return [...elementos, pelicula];
    });

    //Guardar pelicula en el Local Storage
    guardarLocarStorage("pelis", pelicula);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponent}</h3>
      <strong>
        {titulo && description && "Has creado la pelicula: " + titulo}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" placeholder="Titulo" id="titulo" name="titulo" />
        <textarea
          placeholder="Descripción"
          id="description"
          name="description"
        ></textarea>
        <input type="submit" value="Guardar" id="save" />
      </form>
    </div>
  );
};
