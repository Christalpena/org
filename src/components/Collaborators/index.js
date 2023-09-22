import "./Collaborators.css"
import { AiFillCloseCircle,AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborators = (props) => {

    const {name, position, photo, team,id,fav} = props.data
    return (
        <div className="colaborador">
            < AiFillCloseCircle onClick={() => props.deleteCollaborator(id)} className="delete" />
            <div className="encabezado" style={{ backgroundColor: props.backColor }}>
                <img src={photo} alt={name}></img>
                <div className="info">

                    { fav ? < AiFillHeart color="red" onClick={() => props.like(id)} /> : < AiOutlineHeart onClick={() => props.like(id)} />}

                    <h4>{name}</h4>
                    <h5>{position}</h5>
                    <h6>{team}</h6>
                </div>

            </div>
        </div>
    );

};

export default Collaborators;