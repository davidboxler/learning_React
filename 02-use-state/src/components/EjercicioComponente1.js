import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

export const EjercicioComponente1 = ({year}) => {

    const [yearNow, setYearNow] = useState(year)

    const siguiente = e => {
        setYearNow(yearNow+1)
    }

    const anterior = e => {
        let resta = yearNow - 1
        setYearNow(resta)
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value)

        if(Number.isInteger(dato)){
            setYearNow(dato)
        } else {
            setYearNow(year)
        }
    }

  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>
        <p>
            <button onClick={siguiente}>SIGUIENTE</button>
            &nbsp;
            <button onClick={anterior}>ANTERIOR</button>
        </p>
        <p>Cambiar año:
            <input onChange={ cambiarYear } type="text" placeholder='Cambia el año'/>
        </p>
    </div>
  )
}

EjercicioComponente1.propTypes = {
    year: PropTypes.number.isRequired
}