import "./Team.css";
import Collaborators from "../Collaborators";
import hexToRgba from 'hex-to-rgba';



const Team = (props) =>{

    const {primaryColor, team,id} = props.data;
    const {collaboratorInf, deleteCollaborator, updateColor,like} = props;
    const newColor = {
        backgroundColor: hexToRgba(primaryColor,0.6)
    };

    return <>
    { collaboratorInf.length > 0 &&
        <section className="team" style={newColor} >
            
            <input type="color" className="input-color"  value={hexToRgba(primaryColor,0.6)}
            onChange={(event) => {
                updateColor(event.target.value,id)}
                }/>

            <h3 style={{ borderColor: primaryColor }}>{team}</h3>

            <div className="collaborators">
                {
                    collaboratorInf.map((collaborator,index) => <Collaborators 
                    like={like} 
                    backColor={primaryColor} 
                    data={collaborator} 
                    key={index} 
                    deleteCollaborator={deleteCollaborator}
                    />)
                }
            </div>
        </section>

    }
    </>
};
export default Team;
