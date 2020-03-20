import React, { useState } from 'react';


const FormPage = (props) => {

    // console.log(props);

    const [userInput , setUserInput] = useState({
      name: "",
      email: "",
      title: ""
    });

    const userInputChange = (event) => {
        // setUserInput(event.target.value);
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
    }

    // console.log(userInput)


    return (
        <form className="form-page-component">
            <label className="form-page-component__input-label" htmlFor="user-name-id">Full Name:</label>
            <input onChange={userInputChange} className="form-page-component__input-field" type="text" name="name" id="user-name-id" placeholder="Full Name"></input>
            
            <label className="form-page-component__input-label" htmlFor="user-email-id">Email Address:</label>
            <input onChange={userInputChange} className="form-page-component__input-field" type="text" name="email" id="user-email-id" placeholder="Email Address"></input>
            
            <label className="form-page-component__input-label" htmlFor="user-title-id">Position Title:</label>
            <input onChange={userInputChange} className="form-page-component__input-field" type="text" name="title" id="user-title-id" placeholder="Position Title"></input>

            <label className="form-page-component__submit-button-label" htmlFor="user-submit-button-id"></label>
            <button onClick={() => {props.addMember(userInput)}} type="submit" className="form-page-component__submit-button" name="user-submit-button" id="user-submit-button-id">Submit</button>
        </form>
    )
}


export default FormPage;