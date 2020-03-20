import React from "react";
import TeamCard from "./teamCard";

const TeamContainer = (props) => {

    // for each user, return a TeamCard component with that user's info
    return (
        <div className="card-container">
            {props.users.map((item) =>  {
                return (
                    <TeamCard user={item} key={item.name} />
                )
            })}
        </div>
    )
}

export default TeamContainer;