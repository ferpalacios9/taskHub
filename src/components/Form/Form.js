import "./Form.css"
import TextField from "../FieldText/FieldText"
import ListaOpciones from "../ListaOpciones/ListaOpciones"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextField titulo="Nombre" placeholder="Ingresar nombre" />
            <TextField titulo="Puesto" placeholder="Ingresar puesto" />
            <TextField titulo="Foto" placeholder="Ingresar enlace de foto" />
            <ListaOpciones />
        </form>
    </section>
}

export default Formulario