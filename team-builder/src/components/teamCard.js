import React from "react";

const TeamCard = (props) => {

    // console.log(props);

    return (
        <div className="team-card-container">
            <h2 className="team-card-container__name">{props.user.name}</h2>
            <p className="team-card-container__email">{props.user.email}</p>
            <p className="team-card-container__position">{props.user.title}</p>
        </div>
    )
}

export default TeamCard;