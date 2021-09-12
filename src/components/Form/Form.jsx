import React, { useState } from "react";
import FormStyle from "./FormStyle";
import Button from "../UI/Button/Button";

const Form = ({ inputsHere }) => {
  const [usernameInput, setUsernameInput] = useState();
  const [ageInput, setAgeInput] = useState();

  const usernameHandler = (e) => {
    setUsernameInput(e.target.value);
  };

  const ageHandler = (e) => {
    setAgeInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userDetails = {
      username: usernameInput,
      age: ageInput,
      id: Math.random(),
    };

    inputsHere(userDetails);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div className="input">
        <label>Username</label>
        <input type="text" onChange={usernameHandler} />
      </div>
      <div className="input">
        <label>Age/Years</label>
        <input type="number" onChange={ageHandler} />
      </div>
      <Button>Add User</Button>
    </FormStyle>
  );
};

export default Form;
