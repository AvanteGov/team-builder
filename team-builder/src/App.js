import React from 'react';
import './App.css';
import NavComponent from "./components/navComponent";
import FormPage from "./components/formPage";
import TeamContainer from "./components/teamContainer";

function App() {
  return (
    <div className="App">
     <NavComponent />
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