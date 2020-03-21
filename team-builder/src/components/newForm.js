import React, { useState } from "react";

const NewForm = (props) => {

    // sets up state to track form input and manage blank form state
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        title: ""
    })

    // on change event extends the state object to create a new object 
    const changeHandler = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
    }

    // handles submission by bringing in handler function from App.js 
    // and creating function to invoke it 
    const submitHandler = (event) => {
        event.preventDefault()
        // calling the function from props, and setting unique id with Date
        props.addMember({
            ...userInput,
            id: Date.now()
        })
    }

    // console.log(userInput);

    return (
        <form onSubmit={submitHandler} className="user-form">
            <label htmlFor="name-id" className="user-form__label">Full Name</label>
            <input 
                className="user-form__input"
                placeholder="Full Name"
                type="text"
                id="name-id"
                name="name"
                value={userInput.name}
                onChange={changeHandler}
            ></input>
            
            <label htmlFor="email-id" className="user-form__label">Email</label>
            <input 
                className="user-form__input"
                placeholder="Email"
                type="text"
                id="email-id"
                name="email"
                value={userInput.email}
                onChange={changeHandler}
            ></input>
            
            <label htmlFor="title-id" className="user-form__label">Position Title</label>
            <input 
                className="user-form__input"
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