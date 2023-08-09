import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)
    /*const [mostrar, actualizarMostrar] =useState(true)
    const manejarClick = () => {
        console.log("Mostrar / ocultar imagen")
        actualizarMostrar(!mostrar)
    }*/

    return <section className="orgSection">
        <h3 className="title">My organization</h3>
        <img src="/img/add_button.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg