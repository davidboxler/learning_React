import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // Cuando el componente se monta
        alert("El componente Aviso está montado!!")
        // Cuando el componente se desmonta
        return () => {
            alert('Componente Desmontado')
        };
    }, []) // Se ejecuta una vez porque pasa por el array vacio

  return (
    <div>
        <h1>Hemos superado los 20 cambios</h1>
        <button onClick={e => {
            alert('Bienvenido!!!')
        }}>Mostrar Alerta</button>
    </div>
  )
}
