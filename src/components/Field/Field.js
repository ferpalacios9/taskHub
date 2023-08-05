import { useState } from "react"
import "./Field.css"

const Field = (props) => {
    const placeholderModificado = `${props.placeholder}...` // Se uso nomas para entender como meter constantes de props

    // Destructuración de input type
    const { type = "text" } = props

    console.log(type)

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`field field-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Field