import React from "react";
import TeamCard from "./teamCard";

const TeamContainer = (props) => {

    // const [ userInfo, setUserInfo ] = useState([{
    //         name: "Alex Couts",
    //         email: "alexcouts18@gmail.com",
    //         title: "Op Director"
    //     }
    // ])
    
    // console.log(props);

    // for each user, return a TeamCard component with that user's info
    return (
        <div className="card-container">
            {props.users.map((item) =>  {
                return (
                    <TeamCard user={item} key={item.id} />
                )
            })}
        </div>
    )
}

export default TeamContainer;