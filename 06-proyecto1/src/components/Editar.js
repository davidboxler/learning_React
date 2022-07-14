import React from "react";

export const Editar = ({peli, conseguirPeliculas, setListado, setEditar}) => {
  const titulo_componente = "Editar pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    // conseguir el target del evento
    let target = e.target
    // buscar el indice del objeto de la pelicula a actualizar
    const pelis_almacendas = conseguirPeliculas();
    const indice = pelis_almacendas.findIndex(peli => peli.id === id)

    // Crear un objeto con ese id con indice, con titulo y descripcion del formulario
    let peli_acualizada = {
        id,
        titulo: target.titulo.value,
        description: target.description.value
    }
    // Actualizar el elemento con ese indice
    pelis_almacendas[indice] = peli_acualizada
    // Guardar el nuevo array de objetos en el localstorage
    localStorage.setItem('pelis', JSON.stringify(pelis_almacendas))
    // Actualizar estados
    setListado(pelis_almacendas)
    setEditar(0)
  }

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>

      <form onSubmit={ e => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_descripcion"
          defaultValue={peli.titulo}
        />
        <textarea
          name="description"
          className="description_editar"
          defaultValue={peli.description}
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};
