import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    const handleEliminar = () => {
        const isConfirmed = window.confirm("Remove member?")
        if (isConfirmed) {
            eliminarColaborador(id)
        }
    }

    return <div className="colaborador">
        <AiFillCloseCircle onClick={handleEliminar} className="eliminar" />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre}></img>
            {/*<img src={foto} alt={nombre}></img>*/}
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart className="fav__Button" color="red" onClick={() => like(id)} /> : <AiOutlineHeart className="fav__Button" onClick={() => like(id)} />}

        </div>
    </div>
}

export default Colaborador