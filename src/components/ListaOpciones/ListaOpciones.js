import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Teams</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="">Select a team</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones