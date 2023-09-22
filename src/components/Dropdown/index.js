import "./Dropdown.css"

const Dropdown = (props) => {
    const driveChange = (e) =>{
        props.updateTeam(e.target.value);
    }
    
    return (
        <div className="dropdown">
            <label>Opciones</label>
            <select value={props.value} onChange={driveChange}>
                <option value="" disabled defaultValue hidden>Seleccionar equipo</option>
                { props.team.map( (team, index) => {
                    return <option key={index}>{team}</option>
                })};
            </select>
        </div>
    );
};


export default Dropdown;