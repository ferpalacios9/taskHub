import { useState } from "react"
import "./Field.css"
import Footer from "../Footer/Footer"

const Field = (props) => {
    const placeholderModificado = `${props.placeholder}...` // Se uso nomas para entender como meter constantes de props

    // Destructuración de input type
    const { type = "text" } = props
    const { accept } = props

    console.log(type)

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const cargarImagen = (e) => {
        //console.log(URL.createObjectURL(e.target.files[0]))
        //console.log("SE CARGO LA IMAGEN")
        const imagenCargada = e.target.files[0];
        //console.log(imagenCargada)
        props.actualizarValor((imagenCargada))
    }

    return <div className={`field field-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={type === "file" ? cargarImagen : manejarCambio}
            type={type}
            accept={accept}
        />
    </div>
}

export default Field