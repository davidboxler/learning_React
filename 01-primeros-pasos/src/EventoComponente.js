import React from "react";

export const EventoComponente = () => {
  const Click = (e, nombre) => {
    alert("has dado click: " + nombre);
  };

  function Dobleclick(e) {
    alert("Has dado click en el boton");
  }

  const entraste = (e, accion) => {
      alert(`Has ${accion} con el mouse por la caja`)
  } 

  const estasDentro = e => {
    console.log("Estas dentro del input, escribe tu nombre!")
  }

  const estasFuera = e => {
    console.log("Estas fuera del input, adioss!")
  }

  return (
    <div>
      <h1>Eventos de React</h1>

      <p>
        {/*Evento click*/}
        <button onClick={(e) => Click(e, "David")}>Dame Click!</button>
      </p>

      <p>
        {/*Evento click*/}
        <button onDoubleClick={Dobleclick}>Dame doble Click!</button>
      </p>

       <div id="caja" onMouseEnter={ e => entraste(e, "entraste") } onMouseLeave={ e => entraste(e, "saliste") }>
          Pasa por encima!!
       </div>

       <p>
         <input type="text" onFocus={ estasDentro } onBlur={ estasFuera } placeholder="Introducir tu nombre..." />
       </p>
    </div>
  );
};