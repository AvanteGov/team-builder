import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NavComponent from "./components/navComponent";
import FormPage from "./components/formPage";
import TeamContainer from "./components/teamContainer";

function App() {

  const [ usersInfo, setUsersInfo ] = useState([{
      name: "Alex Couts",
      email: "alexcouts18@gmail.com",
      title: "Op Director"
    }
  ]);

 const addMemberHandler = (newMember) => {
    // console.log("adding member", newMember);
    newMember.preventDefault()
    // updates the state of the array of users
    setUsersInfo([...usersInfo, newMember]);
 }

  console.log(usersInfo);

  return (
    <div className="App">
     <NavComponent />
     <Route path="/teampage" component={() => {
       return (
         <TeamContainer users={usersInfo} />
       )
     }} />
     <Route path="/formpage" component={() => {
       return (
         <FormPage addMember={addMemberHandler}/>
       )
     }} />
    </div>
  );
}

export default App;


// * need to set up routes and links to render the different components 
// * need to buidl out the nav component
// * need to set up styling for the components
// * must build form symantic structure 
//   * set up form handler 
//   * set up state 
//   * set the value and onchange to call the form handler in order to save chages 
//   * look up how dan built out hte submit button.