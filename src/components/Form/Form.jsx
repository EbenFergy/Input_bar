import React, { useState } from "react";
import { FormStyle, FormContainer } from "./FormStyle";
import Button from "../UI/Button/Button";
import { ModalStyle, DarkOpacity } from "../Modal/ModalStyle";
import { Cards, CardsHeader } from "../UI/Cards/Cards";
// import Modal from "react-modal";

const Form = ({ inputsHere }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const usernameHandler = (e) => {
    setUsernameInput(e.target.value.trim());
    // console.log(typeof e.target.value)
  };

  const ageHandler = (e) => {
    setAgeInput(e.target.value.trim());
    // console.log(typeof e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userDetails = {
      username: usernameInput,
      age: ageInput,
      id: Math.random(),
    };
    userDetails.username.length > 0 && userDetails.age.length > 0
      ? inputsHere(userDetails)
      : setModalOpen(true);

    setUsernameInput("");
    setAgeInput("");
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <FormContainer>
      <FormStyle onSubmit={submitHandler}>
        <div className="input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={usernameInput}
            type="text"
            onChange={usernameHandler}
          />
        </div>
        <div className="input">
          <label htmlFor="age">Age/Years</label>
          <input
            id="age"
            value={ageInput}
            type="number"
            onChange={ageHandler}
          />
        </div>
        <Button>Add User</Button>
      </FormStyle>

      {modalOpen === true ? (
        <div>
          <DarkOpacity onClick={closeModalHandler} />
          <ModalStyle>
            <Cards className="background" >
              <h5>Please put in a valid username or Age</h5>
              <Button onClick={closeModalHandler}>Close</Button>
            </Cards>
          </ModalStyle>
        </div>
      ) : null}
    </FormContainer>
  );
};

export default Form;
