import { useState } from "react"
import "./FieldText.css"

const TextField = (props) => {
    const placeholderModificado = `${props.placeholder}...` // Se uso nomas para entender como meter constantes de props
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="text-field">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default TextField