import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MiOrg';
import Team from './components/Team';
import teams from './components/Team/TeamsInf';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [showform, updateForm] = useState(false)
  const changeShow = () => {
    updateForm(!showform);
  };
  const [collaborators,updateCollaborators] = useState([
    { 
      id: uuidv4(),
      team: "Programación",
      photo: "https://avatars.githubusercontent.com/u/107286072?v=4",
      name:"Christal",
      position:"Back End Web Developer",
      fav: true
    }
          
  ]);

  const [team,updateTeam] = useState(
    teams
  ); 

  //Registring collaborators

  const registerCollaborator = (collaborator) => {
    //Spread
    updateCollaborators([...collaborators, {...collaborator,id: uuidv4() }]);
  };

  //add new team
  const addNewTeam = (teamName) =>{
    updateTeam([...team,teamName]);
  }

  //Delete collaborators
  const deleteCollaborator = (id) => {
    const newCollaborator = collaborators.filter((collaborator) => collaborator.id !== id);
    updateCollaborators(newCollaborator);
  }

  //Update Team's color

  const updateColor = (color,id) =>{
    const updatedTeams = team.map((team) => {
      if(team.id === id){
        team.primaryColor = color;
      };
      return team;
    });
    updateTeam(updatedTeams);
  };

  //Like
  const like = (id)=>{
    const updatedLike = collaborators.map((c) =>{
      if(c.id === id){
        c.fav = !c.fav
      };
      return c
    });
    updateCollaborators(updatedLike)
  };
  //Ternario --> condicion ? seMuestra: noSemuestra

  return (
    <div>
      <Header/>
      {/*showform && <Form />*/}
      { showform === true ? 
      <Form registerCollaborator={registerCollaborator} 
      addNewTeam={addNewTeam} 
      team={team.map((teams) => teams.team)}/> :<></>}

      <MyOrg changeShow={changeShow} />

      { 
        team.map( (team) => <Team 
        data={team} 
        key={team.team} 
        collaboratorInf={collaborators.filter(collaborator => collaborator.team === team.team)}
        deleteCollaborator={deleteCollaborator}
        updateColor={updateColor}
        like={like}
        />)
      }

      <Footer />
    </div>
  );
}

export default App;
