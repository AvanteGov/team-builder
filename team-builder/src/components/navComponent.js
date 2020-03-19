import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import TeamContainer from "./teamContainer";
import FormPage from "./formPage";

const NavComponent = () => {


    return (
        <div className="navigation-container">
           
            <Link to="/formpage" render={(props) =>  {
                return (
                    <FormPage />
                )
            }}>
                <div className="navigation-container__select-form"> 
                    <h2 className="nav-option">FORM PAGE</h2>
                </div>
            </Link>

            <Link to="/teampage" render={(props) => {
                return (
                    <TeamContainer />
                )
            }}>
                <div className="navigation-container__select-team"> 
                    <h2 className="nav-option">TEAM PAGE</h2>
                </div>
            </Link>
        </div>
    )
}

//  <Link to={`/movies/${movie.id}`} render={(props) => {
//     return <Movie />
// }}>

//   <h2>{title}</h2>
// </Link>



export default NavComponent 