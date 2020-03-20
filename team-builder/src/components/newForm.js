import React, { useState } from "react";

const NewForm = (props) => {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        title: ""
    })

    const changeHandler = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.addMember({
            ...userInput,
            id: Date.now()
        })
    }

    console.log(userInput);

    return (
        <form onSubmit={submitHandler} className="user-form">
            <label htmlFor="name-id" className="user-form__label">Full Name</label>
            <input 
                className="user-form__name-input"
                placeholder="Full Name"
                type="text"
                id="name-id"
                name="name"
                value={userInput.name}
                onChange={changeHandler}
            ></input>
            
            <label htmlFor="email-id" className="user-form__label">Email</label>
            <input 
                className="user-form__email-input"
                placeholder="Email"
                type="text"
                id="email-id"
                name="email"
                value={userInput.email}
                onChange={changeHandler}
            ></input>
            
            <label htmlFor="title-id" className="user-form__label">Position Title</label>
            <input 
                className="user-form__title-input"
                placeholder="Position Title"
                type="text"
                id="title-id"
                name="title"
                value={userInput.title}
                onChange={changeHandler}
            ></input>
            <button type="submit">Submit</button>

        </form>
    )

}



export default NewForm