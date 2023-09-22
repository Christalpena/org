import "./Form.css"
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";
import Input from "../Input";
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    //collaborator
    const driveEvent = (event) => {
        event.preventDefault();
        let data = {
            name,
            position,
            photo,
            team
        };
        props.registerCollaborator(data)

    };

    //team
    const driveColorEvent = (e) => {
        e.preventDefault();
        let teamData = {
            id: uuidv4(),
            team: teamName,
            primaryColor: color,

        };
        console.log(teamData)
        
        props.addNewTeam(teamData)

    };

    //add a new collaborator
    const [name, updateName] = useState("");
    const [position, updatePosition] = useState("");
    const [photo, updatePhoto] = useState("");
    const [team, updateTeam] = useState ("");

    //add a new team
    const [teamName, updateTeamName] = useState("");
    const [color, updateColor] = useState("");

    return(
        <section className="form">
            <form onSubmit={driveEvent}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Input titulo="Nombre" placeholder="Ingresa tu nombre" required value={name} updateValue={updateName} />

                <Input titulo="Puesto" placeholder="Ingresa tu Puesto" required value={position} updateValue={updatePosition} />

                <Input titulo="Foto" placeholder="Ingresa el enlace de tu Foto" required value={photo} updateValue={updatePhoto} />
                
                <Dropdown team={props.team} value={team} updateTeam={updateTeam}/>

                <Button text="Crear" />
            </form>

            <form onSubmit={driveColorEvent}>
                <h2>Rellena el formulario para crear un nuevo equipo.</h2>
                <Input titulo="Team" placeholder="Ingresa el nombre del team" required value={teamName} updateValue={updateTeamName} />

                <Input titulo="Color" placeholder="Ingresa el color en Hex" required value={color} updateValue={updateColor} 
                type="color"/>
                <Button text="Crear" />

            </form>
        </section>
    );
};

export default Form;