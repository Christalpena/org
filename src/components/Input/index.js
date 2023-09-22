import "./Input.css"

const Input = (props) => {

    const driveChange = (e) => {
        props.updateValue(e.target.value);
    };

    const {type = "text"} = props
    
    return(
        <div className={`input ${type}-input`}>
            <label>{props.titulo}</label>
            <input value={props.value} placeholder={props.placeholder} required={props.required} onChange={driveChange} 
            type={type}
            />
        </div>
    );
};

export default Input;