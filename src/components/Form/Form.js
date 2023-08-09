import { useState } from "react"
import "./Form.css"
import Field from "../Field/Field"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            id: uuidv4(),
            nombre, // Esto es lo mismo a nombre: nombre,
            puesto,
            foto: URL.createObjectURL(foto),
            equipo
        }
        registrarColaborador(datosAEnviar)

        // console.log(foto)
        
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    // Cargar imagen colaborador
    const cargarImagen = (e) => {
        console.log("Imagen cargada")
    }

    return <section className="formulario">
        <form className="formulario__colab" onSubmit={manejarEnvio}>
            <h2>New member</h2>
            <Field
                titulo="Name"
                placeholder="Member's name"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Field
                titulo="Task"
                placeholder="Task name"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Field
                titulo="Picture"
                placeholder="Ingresar enlace de foto"
                required
                //valor={foto} ESTE ERA EL ERROR
                actualizarValor={actualizarFoto}
                type="file"
                accept="image/*"
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form  className="formulario__equipo" onSubmit={manejarNuevoEquipo}>
            <h2>New team</h2>
            <Field
                titulo="Title"
                placeholder="Team title"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Field
                titulo="Color"
                placeholder="Ingresar color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>

    </section>
}

export default Formulario