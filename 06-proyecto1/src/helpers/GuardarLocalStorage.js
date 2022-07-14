export const guardarLocarStorage = (clave, elemento) => {
    // Conseguir todos los elementos que tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave))

    // Consultar si es un array
    if(Array.isArray(elementos)){
      // Añadir un nuevo elemento en el array
      elementos.push(elemento)
    } else {
      // Crear un array con la nueva peli
      elementos = [elemento]
    }

    // Gurdar en el localStoraga
    localStorage.setItem(clave, JSON.stringify(elementos))

    //Devolver objeto guardado
    return elemento
}