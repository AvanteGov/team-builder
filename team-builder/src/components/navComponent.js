import React from "react";
import { Link } from "react-router-dom"

const NavComponent = () => {


    return (
        <div className="navigation-container">
           
            <Link to="/formpage">
                <div className="navigation-container__select-form"> 
                    <h2 className="nav-option">FORM PAGE</h2>
                </div>
            </Link>

            <Link to="/teampage">
                <div className="navigation-container__select-team"> 
                    <h2 className="nav-option">TEAM PAGE</h2>
                </div>
            </Link>
        </div>
    )
}

export default NavComponent 