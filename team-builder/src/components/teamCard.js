import React from "react";

const TeamCard = (props) => {

    console.log(props);

    return (
        <div className="team-card-container">
            <h2 className="team-card-container__name">Team Name</h2>
            <p className="team-card-container__email">Email@email.com</p>
            <p className="team-card-container__position"> Team Position</p>
        </div>
    )
}

export default TeamCard;