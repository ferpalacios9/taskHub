import "./FieldText.css"

const TextField = (props) => {
    const placeholderModificado = `${props.placeholder}...` // Se uso nomas para entender como meter constantes de props
    return <div className="text-field">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} />
    </div>
}

export default TextField