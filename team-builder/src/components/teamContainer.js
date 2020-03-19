import React, { useState } from "react";

const TeamContainer = () => {

    const [ userInfo, setUserInfo ] = useState([{
            name: "Alex Couts",
            email: "alexcouts18@gmail.com",
            title: "Op Director"
        }
    ])
    
    console.log(userInfo);

    return (
        <div className="card-container">
            <span>I am the team container!</span>
        </div>
    )
}

export default TeamContainer;